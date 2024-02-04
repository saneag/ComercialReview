import { useState } from 'react';

import { History } from 'lucide-react';

import FiltersAccordion from '@/app/components/filters/filtersAccordion';
import SearchInput from '@/app/components/searchInput';
import { Button } from '@/app/components/ui/button';
import { Card, CardContent, CardHeader } from '@/app/components/ui/card';
import { useAppDispatch } from '@/app/redux/store';
import { ResetFiltersType } from '@/app/types/filter/EntityFilterType';
import { FilterAccordionItemType } from '@/app/types/filter/FilterAccordionItemType';
interface FiltersCardProps {
  filterAccordionItems: FilterAccordionItemType[];
  resetFilters: ResetFiltersType;
}

export default function FiltersCard({
  resetFilters,
  filterAccordionItems,
}: FiltersCardProps) {
  const dispatch = useAppDispatch();

  const [search, setSearch] = useState('');

  const onSearch = (value: string) => {
    // TODO: Implement search
    console.log('searching...', value);
  };

  const handleResetButtonClick = () => {
    dispatch(resetFilters());
  };

  return (
    <div className='sticky top-5 flex w-full justify-center'>
      <Card className='w-full max-w-[350px] shadow-md'>
        <CardHeader>
          <div className='flex items-center justify-between gap-2'>
            <span>Filters</span>
            <Button
              onClick={handleResetButtonClick}
              variant='link'
              className='flex h-fit items-center space-x-2 p-0'
            >
              <span>Reset</span>
              <History className='h-5 w-5' />
            </Button>
          </div>
        </CardHeader>
        <CardContent className='space-y-3'>
          <SearchInput
            search={search}
            setSearch={setSearch}
            onSearch={onSearch}
            className='shadow-md focus:ring-0 focus:ring-offset-0 focus-visible:bg-gray-100/50 focus-visible:ring-0 focus-visible:ring-offset-0'
            placeholder='Search reviews...'
          />
          <FiltersAccordion filterAccordionItems={filterAccordionItems} />
        </CardContent>
      </Card>
    </div>
  );
}
