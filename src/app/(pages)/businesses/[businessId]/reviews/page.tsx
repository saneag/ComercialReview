'use client';

import FiltersCard from '@/app/components/filters';
import RatingAccordionItems from '@/app/components/filters/filtersAccordion/filterItems/RatingAccordionItems';
import FiltersDisplay from '@/app/components/filters/FiltersDisplay';
import ReviewsList from '@/app/components/reviewsList/ReviewsList';
import {
  removeReviewRatingFilter,
  resetReviewFilters,
  setReviewRatingFilter,
} from '@/app/redux/features/slices/reviewsFilterSlice';
import { useAppSelector } from '@/app/redux/store';
import { ratingEnumToText } from '@/app/types/enums/RatingFilterEnum';
import { DisplayFilterType } from '@/app/types/filter/EntityFilterType';
import { FilterAccordionItemType } from '@/app/types/filter/FilterAccordionItemType';

export default function ReviewsPage() {
  const filters = useAppSelector((state) => state.reviewsFilter);

  const filterAccordionItems: FilterAccordionItemType[] = [
    {
      filterValue: 'rating',
      triggerLabel: 'Rating',
      children: (
        <RatingAccordionItems
          ratingFilter={filters.rating}
          setFilter={setReviewRatingFilter}
        />
      ),
    },
  ];

  const reviewsFiltersDisplay: DisplayFilterType[] = [
    {
      filterByLabel: 'Rating',
      filterValues: filters.rating.map((rating) => ({
        label: ratingEnumToText(rating),
        value: rating,
      })),
      removeOnClick: removeReviewRatingFilter,
    },
  ];

  return (
    <div className='mt-5 flex flex-col gap-10 lg:flex-row'>
      <div className='w-full lg:w-4/12'>
        <FiltersCard
          filtersDisplayChildren={
            <FiltersDisplay filters={reviewsFiltersDisplay} />
          }
          resetFilters={resetReviewFilters}
          filterAccordionItems={filterAccordionItems}
        />
      </div>
      <div className='w-full flex-1'>
        <ReviewsList />
      </div>
    </div>
  );
}
