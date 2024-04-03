'use client';

import BusinessesList from '@/app/components/businessesList/BusinessesList';
import FiltersCard from '@/app/components/filters';
import FiltersDisplay from '@/app/components/filters/FiltersDisplay';
import useBusinessFilterAccordionItemsList from '@/app/hooks/useBusinessFilterAccordionItemsList';
import useBusinessFiltersDisplayList from '@/app/hooks/useBusinessFiltersDisplayList';
import {
  resetBusinessFilters,
  setBusinessSearchFilter,
} from '@/app/redux/features/slices/businessFilterSlice';
import { DisplayFilterType } from '@/app/types/filter/EntityFilterType';
import { FilterAccordionItemType } from '@/app/types/filter/FilterAccordionItemType';

export default function Businesses() {
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
          setSearchFilter={setBusinessSearchFilter}
        />
      </div>
      <div className='w-full flex-1'>
        <BusinessesList />
      </div>
    </div>
  );
}
