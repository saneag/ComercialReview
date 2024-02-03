'use client';

import FiltersCard from '@/app/components/filters';
import RatingAccordionItems from '@/app/components/filters/filtersAccordion/filterItems/ratingAccordionItems';
import { setBusinessRatingFilter } from '@/app/redux/features/slices/businessFilterSlice';
import { useAppSelector } from '@/app/redux/store';
import { FilterAccordionItemType } from '@/app/types/filter/FilterAccordionItemType';

export default function Businesses() {
  const filters = useAppSelector((state) => state.businessFilter);

  const filterAccordionItems: FilterAccordionItemType[] = [
    {
      filterValue: 'rating',
      triggerLabel: 'Rating',
      children: (
        <RatingAccordionItems
          ratingFilter={filters.rating}
          setFilter={setBusinessRatingFilter}
        />
      ),
    },
  ];

  return (
    <div className='mt-5 flex flex-col gap-10 md:flex-row'>
      <div className='w-full md:w-4/12'>
        <FiltersCard filterAccordionItems={filterAccordionItems} />
      </div>
      <div className='w-full flex-1'></div>
    </div>
  );
}
