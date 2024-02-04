'use client';

import FiltersCard from '@/app/components/filters';
import CategoryAccordionItems from '@/app/components/filters/filtersAccordion/filterItems/categoryAccordionItems';
import RatingAccordionItems from '@/app/components/filters/filtersAccordion/filterItems/ratingAccordionItems';
import FiltersDisplay from '@/app/components/filters/filtersDisplay';
import {
  resetBusinessFilters,
  setBusinessesCategoryFilter,
  setBusinessRatingFilter,
} from '@/app/redux/features/slices/businessFilterSlice';
import { useAppSelector } from '@/app/redux/store';
import { categoryEnumToText } from '@/app/types/enums/CategoryFilterEnum';
import { ratingEnumToText } from '@/app/types/enums/RatingFilterEnum';
import { DisplayFilterType } from '@/app/types/filter/EntityFilterType';
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

  const businessFiltersDisplay: DisplayFilterType[] = [
    {
      filterLabel: 'Rating',
      filterValue: filters.rating.map((rating) => ratingEnumToText(rating)),
    },
    {
      filterLabel: 'Category',
      filterValue: filters.category.map((category) =>
        categoryEnumToText(category)
      ),
    },
  ];

  return (
    <div className='mt-5 flex flex-col gap-10 md:flex-row'>
      <div className='w-full md:w-4/12'>
        <FiltersCard
          filtersDisplayChildren={
            <FiltersDisplay filters={businessFiltersDisplay} />
          }
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
