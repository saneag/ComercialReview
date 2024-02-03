'use client';

import { useState } from 'react';

import FiltersAccordion from '@/app/components/reviews/reviewsFilters/filtersAccordion';
import SearchInput from '@/app/components/searchInput';
import { Card, CardContent, CardHeader } from '@/app/components/ui/card';

export default function ReviewsFilters() {
  const [search, setSearch] = useState('');

  const onSearch = (value: string) => {
    // TODO: Implement search
    console.log('searching...', value);
  };

  return (
    <div className='sticky top-0 flex w-full justify-center'>
      <Card className='w-full max-w-[350px] shadow-md'>
        <CardHeader>Filters</CardHeader>
        <CardContent>
          <SearchInput
            search={search}
            setSearch={setSearch}
            onSearch={onSearch}
            className='shadow-md focus:ring-0 focus:ring-offset-0 focus-visible:bg-gray-100/50 focus-visible:ring-0 focus-visible:ring-offset-0'
            placeholder='Search reviews...'
          />
          <FiltersAccordion />
        </CardContent>
      </Card>
    </div>
  );
}
