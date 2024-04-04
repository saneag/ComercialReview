'use client';

import { useEffect } from 'react';

import { useSearchParams } from 'next/navigation';

import FiltersCard from '@/app/components/filters';
import FiltersDisplay from '@/app/components/filters/FiltersDisplay';
import ReviewsList from '@/app/components/reviewsList/ReviewsList';
import ScrollUp from '@/app/components/ScrollUp';
import useReviewFilterAccordionItemsList from '@/app/hooks/useReviewFilterAccordionItemsList';
import useReviewFiltersDisplayList from '@/app/hooks/useReviewFiltersDisplayList';
import {
  resetPagination,
  setPage,
} from '@/app/redux/features/slices/paginationSlice';
import {
  resetReviewFilters,
  setReviewSearchFilter,
} from '@/app/redux/features/slices/reviewsFilterSlice';
import { useAppDispatch, useAppSelector } from '@/app/redux/store';
import { DisplayFilterType } from '@/app/types/filter/EntityFilterType';
import { FilterAccordionItemType } from '@/app/types/filter/FilterAccordionItemType';

export default function ReviewsPage() {
  const dispatch = useAppDispatch();
  const searchParams = useSearchParams();

  const page = useAppSelector((state) => state.pagination);

  const pageIndex = searchParams.get('pageIndex') || 1;
  const pageSize = searchParams.get('pageSize') || 6;

  useEffect(() => {
    dispatch(
      setPage({
        pageIndex: Number(pageIndex),
        pageSize: Number(pageSize),
      })
    );

    return () => {
      dispatch(resetPagination());
    };
  }, [dispatch, pageIndex, pageSize]);

  const filterAccordionItems: FilterAccordionItemType[] =
    useReviewFilterAccordionItemsList();

  const reviewsFiltersDisplay: DisplayFilterType[] =
    useReviewFiltersDisplayList();

  // useQueryParams({
  //   page,
  // });

  return (
    <div className='mt-5 flex flex-col gap-10 lg:flex-row'>
      <ScrollUp />
      <div className='w-full lg:w-4/12'>
        <FiltersCard
          filtersDisplayChildren={
            <FiltersDisplay filters={reviewsFiltersDisplay} />
          }
          resetFilters={resetReviewFilters}
          filterAccordionItems={filterAccordionItems}
          setSearchFilter={setReviewSearchFilter}
        />
      </div>
      <div className='w-full flex-1'>
        <ReviewsList showListTypeChangeButtons />
      </div>
    </div>
  );
}
