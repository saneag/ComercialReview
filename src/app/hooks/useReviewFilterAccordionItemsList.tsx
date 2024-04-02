import RatingAccordionItems from '@/app/components/filters/filtersAccordion/filterItems/RatingAccordionItems';
import { setReviewRatingFilter } from '@/app/redux/features/slices/reviewsFilterSlice';
import { useAppSelector } from '@/app/redux/store';
import { FilterAccordionItemType } from '@/app/types/filter/FilterAccordionItemType';

export default function useReviewFilterAccordionItemsList() {
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

  return filterAccordionItems;
}
