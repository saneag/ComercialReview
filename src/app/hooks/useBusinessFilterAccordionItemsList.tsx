import CategoryAccordionItems from '@/app/components/filters/filtersAccordion/filterItems/CategoryAccordionItems';
import RatingAccordionItems from '@/app/components/filters/filtersAccordion/filterItems/RatingAccordionItems';
import {
  setBusinessesCategoryFilter,
  setBusinessRatingFilter,
} from '@/app/redux/features/slices/businessFilterSlice';
import { useAppSelector } from '@/app/redux/store';
import { FilterAccordionItemType } from '@/app/types/filter/FilterAccordionItemType';

export default function useBusinessFilterAccordionItemsList() {
  const filters = useAppSelector((state) => state.businessFilter);

  const filterAccordionItems: FilterAccordionItemType[] = [
    {
      filterValue: 'rating',
      triggerLabel: 'Rating',
      children: (
        <RatingAccordionItems
          ratingFilter={[filters.rating]}
          setFilter={setBusinessRatingFilter}
          isRangeFilter
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

  return filterAccordionItems;
}
