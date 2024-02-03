'use client';

import FiltersCard from '@/app/components/filters';
import RatingAccordionItems from '@/app/components/filters/filtersAccordion/filterItems/ratingAccordionItems';
import ReviewsList from '@/app/components/reviewsList';
import { setReviewRatingFilter } from '@/app/redux/features/slices/reviewsFilterSlice';
import { useAppSelector } from '@/app/redux/store';
import { FilterAccordionItemType } from '@/app/types/filter/FilterAccordionItemType';

export default function ReviewsPage() {
  const filters = useAppSelector((state) => state.reviewsFilter.rating);

  const filterAccordionItems: FilterAccordionItemType[] = [
    {
      filterValue: 'rating',
      triggerLabel: 'Rating',
      children: <RatingAccordionItems setFilter={setReviewRatingFilter} />,
    },
  ];

  return (
    <div className='mt-5 flex flex-col gap-10 md:flex-row'>
      <div className='w-full md:w-4/12'>
        <FiltersCard filterAccordionItems={filterAccordionItems} />
      </div>
      <div className='w-full flex-1'>
        <ReviewsList />
      </div>
    </div>
  );
}
