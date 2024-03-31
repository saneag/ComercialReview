import { useEffect, useState } from 'react';

import { useSearchParams } from 'next/navigation';

import BusinessCard from '@/app/components/businessesList/businessCard/BusinessCard';
import ListPagination from '@/app/components/ListPagination';
import ListTypeChangeButtons from '@/app/components/ListTypeChangeButtons';
import { useGetBusinessesQuery } from '@/app/redux/features/businessApi/businessApi';
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

  const {
    data: businesses,
    isSuccess,
    isError,
  } = useGetBusinessesQuery({
    pageNumber: Number(pageIndex),
    pageSize: Number(pageSize),
  });

  if (isError) {
    showToastError('Error fetching businesses');
  }

  // useQueryParams({
  //   page,
  // });

  return (
    <div className='space-y-4'>
      <ListTypeChangeButtons listType={listType} setListType={setListType} />
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
