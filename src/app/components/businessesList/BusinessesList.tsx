import { useEffect, useState } from 'react';

import { useSearchParams } from 'next/navigation';

import BusinessCard from '@/app/components/businessesList/businessCard/BusinessCard';
import ListPagination from '@/app/components/ListPagination';
import ListTypeChangeButtons from '@/app/components/ListTypeChangeButtons';
import SortDropdown from '@/app/components/SortDropdown';
import { businessSortOptions } from '@/app/constants/sortDropdownOptions';
import { useGetBusinessesQuery } from '@/app/redux/features/businessApi/businessApi';
import {
  resetBusinessFilters,
  setBusinessSortFilter,
} from '@/app/redux/features/slices/businessFilterSlice';
import {
  resetPagination,
  setPage,
} from '@/app/redux/features/slices/paginationSlice';
import { useAppDispatch, useAppSelector } from '@/app/redux/store';
import { ListType } from '@/app/types/ListType';
import { showToastError } from '@/app/utils/showToastMessage';

export default function BusinessesList() {
  const dispatch = useAppDispatch();
  const searchParams = useSearchParams();

  const [listType, setListType] = useState<ListType>(ListType.List);

  const page = useAppSelector((state) => state.pagination);
  const filter = useAppSelector((state) => state.businessFilter);

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
      dispatch(resetBusinessFilters());
    };
  }, [dispatch, pageIndex, pageSize]);

  const {
    data: businesses,
    isSuccess,
    isError,
  } = useGetBusinessesQuery(
    {
      pageNumber: page.pageIndex,
      pageSize: page.pageSize,
      categories: filter.category,
      minGrade: filter.rating,
      search: filter.search,
      sortBy: filter.sort.sortBy,
      sortDirection: filter.sort.sortDirection,
    },
    { refetchOnMountOrArgChange: true }
  );

  if (isError) {
    showToastError('Error fetching businesses');
  }

  // useQueryParams({
  //   page,
  // });

  return (
    <div className='space-y-4'>
      <div className='flex items-center justify-between gap-3 pr-3'>
        <SortDropdown
          sortBy={filter.sort.sortBy}
          sortDirection={filter.sort.sortDirection}
          sortOptions={businessSortOptions}
          setSortFilter={setBusinessSortFilter}
        />
        <ListTypeChangeButtons listType={listType} setListType={setListType} />
      </div>
      <div
        className={`gap-4 ${listType === ListType.List ? 'flex w-full flex-col' : 'grid grid-cols-2 max-md:grid-cols-1'}`}
      >
        {isSuccess &&
          businesses.items.map((business) => (
            <BusinessCard key={business.id} business={business} />
          ))}
      </div>
      {businesses && (
        <ListPagination
          totalPages={businesses.totalPages}
          hasNextPage={businesses.hasNext}
          hasPreviousPage={businesses.hasPrevious}
        />
      )}
    </div>
  );
}
