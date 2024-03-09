import { useState } from 'react';

import BusinessCard from '@/app/components/businessesList/businessCard/BusinessCard';
import ListTypeChangeButtons from '@/app/components/ListTypeChangeButtons';
import { useGetBusinessesQuery } from '@/app/redux/features/businessApi/businessApi';
import { ListType } from '@/app/types/ListType';

export default function BusinessesList() {
  const [listType, setListType] = useState<ListType>(ListType.List);

  const { data: businesses, isSuccess } = useGetBusinessesQuery();

  return (
    <div className='space-y-4'>
      <ListTypeChangeButtons setListType={setListType} />
      <div
        className={`gap-4 ${listType === ListType.List ? 'flex w-full flex-col' : 'grid grid-cols-2 max-md:grid-cols-1'}`}
      >
        {isSuccess &&
          businesses.map((business) => (
            <BusinessCard key={business.id} business={business} />
          ))}
      </div>
    </div>
  );
}
