'use client';

import { useEffect } from 'react';

import { useSearchParams } from 'next/navigation';

import BusinessesList from '@/app/components/businessesList/BusinessesList';
import FiltersCard from '@/app/components/filters';
import FiltersDisplay from '@/app/components/filters/FiltersDisplay';
import useBusinessFilterAccordionItemsList from '@/app/hooks/useBusinessFilterAccordionItemsList';
import useBusinessFiltersDisplayList from '@/app/hooks/useBusinessFiltersDisplayList';
import { resetBusinessFilters } from '@/app/redux/features/slices/businessFilterSlice';
import {
  resetPagination,
  setPage,
} from '@/app/redux/features/slices/paginationSlice';
import { useAppDispatch } from '@/app/redux/store';
import { DisplayFilterType } from '@/app/types/filter/EntityFilterType';
import { FilterAccordionItemType } from '@/app/types/filter/FilterAccordionItemType';

export default function Businesses() {
  const dispatch = useAppDispatch();
  const searchParams = useSearchParams();
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
    useBusinessFilterAccordionItemsList();

  const businessFiltersDisplay: DisplayFilterType[] =
    useBusinessFiltersDisplayList();

  return (
    <div className='my-5 flex flex-col gap-10 lg:flex-row'>
      <div className='w-full lg:w-4/12'>
        <FiltersCard
          filtersDisplayChildren={
            <FiltersDisplay filters={businessFiltersDisplay} />
          }
          resetFilters={resetBusinessFilters}
          filterAccordionItems={filterAccordionItems}
        />
      </div>
      <div className='w-full flex-1'>
        <BusinessesList />
      </div>
    </div>
  );
}
