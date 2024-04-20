import { useEffect, useState } from 'react';

import { useParams } from 'next/navigation';

import ListPagination from '@/app/components/ListPagination';
import ListTypeChangeButtons from '@/app/components/ListTypeChangeButtons';
import PersonalReviewCard from '@/app/components/reviewsList/personalReviewCard/PersonalReviewCard';
import ReviewCard from '@/app/components/reviewsList/reviewCard/ReviewCard';
import ShowAllReviewsLink from '@/app/components/reviewsList/ShowAllReviewsLink';
import SortDropdown from '@/app/components/SortDropdown';
import { reviewSortOptions } from '@/app/constants/sortDropdownOptions';
import { useGetReviewsByBusinessIdQuery } from '@/app/redux/features/reviewApi/reviewApi';
import {
  resetReviewFilters,
  setReviewSortFilter,
} from '@/app/redux/features/slices/reviewsFilterSlice';
import { useAppDispatch, useAppSelector } from '@/app/redux/store';
import { ListType } from '@/app/types/ListType';
import { showToastError } from '@/app/utils/showToastMessage';

interface ReviewsListProps {
  showListTypeChangeButtons?: boolean;
  showAllReviewsLink?: boolean;
}

export default function ReviewsList({
  showListTypeChangeButtons = false,
  showAllReviewsLink = false,
}: ReviewsListProps) {
  const dispatch = useAppDispatch();
  const { businessId } = useParams();

  const [listType, setListType] = useState<ListType>(ListType.List);

  const page = useAppSelector((state) => state.pagination);

  const filter = useAppSelector((state) => state.reviewsFilter);

  const {
    data: reviews,
    isError,
    isSuccess,
  } = useGetReviewsByBusinessIdQuery(
    {
      businessId: Number(businessId),
      params: {
        pageNumber: page.pageIndex,
        pageSize: page.pageSize,
        grades: filter.rating,
        search: filter.search,
        sortBy: filter.sort.sortBy,
        sortDirection: filter.sort.sortDirection,
      },
    },
    { refetchOnMountOrArgChange: true }
  );

  useEffect(() => {
    return () => {
      dispatch(resetReviewFilters());
    };
  }, [dispatch]);

  if (isError) {
    showToastError('Error fetching reviews');
  }

  return (
    <div className='w-full space-y-4'>
      <PersonalReviewCard />

      <div
        className={`mb-2 flex justify-between gap-2 px-2 pt-6 ${reviews && reviews.totalCount === 0 && 'flex-col'}`}
      >
        {showAllReviewsLink && <p className='text-2xl'>Reviews</p>}
        {reviews && reviews.totalCount === 0 && <p>No reviews yet</p>}
        {showAllReviewsLink && <ShowAllReviewsLink />}
        {showListTypeChangeButtons && (
          <>
            <SortDropdown
              sortBy={filter.sort.sortBy}
              sortDirection={filter.sort.sortDirection}
              sortOptions={reviewSortOptions}
              setSortFilter={setReviewSortFilter}
            />
            <ListTypeChangeButtons
              listType={listType}
              setListType={setListType}
            />
          </>
        )}
      </div>
      <div
        className={`gap-4 ${listType === ListType.List ? 'flex w-full flex-col' : 'grid grid-cols-2 max-md:grid-cols-1'}`}
      >
        {isSuccess &&
          reviews.items.map((review, index) => (
            <ReviewCard key={index} review={review} />
          ))}
      </div>
      {reviews && page.pageSize > 3 && (
        <ListPagination
          totalPages={reviews.totalPages}
          hasNextPage={reviews.hasNext}
          hasPreviousPage={reviews.hasPrevious}
        />
      )}
    </div>
  );
}
