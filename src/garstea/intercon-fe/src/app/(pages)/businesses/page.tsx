'use client';

import FiltersCard from '@/app/components/filters';
import CategoryAccordionItems from '@/app/components/filters/filtersAccordion/filterItems/categoryAccordionItems';
import RatingAccordionItems from '@/app/components/filters/filtersAccordion/filterItems/ratingAccordionItems';
import {
  resetBusinessFilters,
  setBusinessesCategoryFilter,
  setBusinessRatingFilter,
} from '@/app/redux/features/slices/businessFilterSlice';
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
    {
      filterValue: 'category',
      triggerLabel: 'Category',
      children: (
        <CategoryAccordionItems
          categoryFilter={filters.category}
          setFilter={setBusinessesCategoryFilter}
        />
      ),
    },
  ];

  return (
    <div className='mt-5 flex flex-col gap-10 md:flex-row'>
      <div className='w-full md:w-4/12'>
        <FiltersCard
          resetFilters={resetBusinessFilters}
          filterAccordionItems={filterAccordionItems}
        />
      </div>
      <div className='w-full flex-1'>
        <p>Businesses list</p>
      </div>
    </div>
  );
}
