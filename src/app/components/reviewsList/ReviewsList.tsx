import { useState } from 'react';

import { useParams } from 'next/navigation';

import ListTypeChangeButtons from '@/app/components/ListTypeChangeButtons';
import ReviewCard from '@/app/components/reviewsList/reviewCard/ReviewCard';
import ReviewCreateCard from '@/app/components/reviewsList/reviewCreateCard/ReviewCreateCard';
import ShowAllReviewsLink from '@/app/components/reviewsList/ShowAllReviewsLink';
import { useGetReviewsByBusinessIdQuery } from '@/app/redux/features/reviewApi/reviewApi';
import { ListType } from '@/app/types/ListType';
import { showToastError } from '@/app/utils/showToastMessage';

interface ReviewsListProps {
  reviewsLimit?: number;
}

export default function ReviewsList({ reviewsLimit }: ReviewsListProps) {
  const [listType, setListType] = useState<ListType>(ListType.List);

  const { businessId } = useParams();

  const {
    data: reviews,
    isSuccess,
    isError,
  } = useGetReviewsByBusinessIdQuery(Number(businessId));

  if (isError) {
    showToastError('Error fetching reviews');
  }

  return (
    <div className='w-full space-y-4'>
      <div className='mb-14 mt-10'>
        <ReviewCreateCard />
      </div>
      {!reviewsLimit && (
        <ListTypeChangeButtons listType={listType} setListType={setListType} />
      )}
      <ShowAllReviewsLink reviewsLimit={reviewsLimit} />
      <div
        className={`gap-4 ${listType === ListType.List ? 'flex w-full flex-col' : 'grid grid-cols-2 max-md:grid-cols-1'}`}
      >
        {isSuccess &&
          reviews
            .slice(0, reviewsLimit)
            .map((review, index) => <ReviewCard key={index} review={review} />)}
      </div>
    </div>
  );
}
