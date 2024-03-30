import { useState } from 'react';

import BusinessCard from '@/app/components/businessesList/businessCard/BusinessCard';
import ListPagination from '@/app/components/ListPagination';
import ListTypeChangeButtons from '@/app/components/ListTypeChangeButtons';
import { useGetBusinessesQuery } from '@/app/redux/features/businessApi/businessApi';
import { ListType } from '@/app/types/ListType';
import { showToastError } from '@/app/utils/showToastMessage';

export default function BusinessesList() {
  const [listType, setListType] = useState<ListType>(ListType.List);
  const [page, setPage] = useState({ pageIndex: 1, pageSize: 6 });

  const {
    data: businesses,
    isSuccess,
    isError,
  } = useGetBusinessesQuery({
    pageNumber: page.pageIndex,
    pageSize: page.pageSize,
  });

  if (isError) {
    showToastError('Error fetching businesses');
  }

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
          page={page}
          setPage={setPage}
          totalPages={businesses.totalPages}
          hasNextPage={businesses.hasNext}
          hasPreviousPage={businesses.hasPrevious}
        />
      )}
    </div>
  );
}
