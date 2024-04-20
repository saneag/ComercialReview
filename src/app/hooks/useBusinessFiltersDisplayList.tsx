import {
  removeBusinessCategoryFilter,
  removeBusinessRatingFilter,
} from '@/app/redux/features/slices/businessFilterSlice';
import { useAppSelector } from '@/app/redux/store';
import { categoryEnumToText } from '@/app/types/enums/CategoryFilterEnum';
import { ratingEnumToText } from '@/app/types/enums/RatingFilterEnum';
import { DisplayFilterType } from '@/app/types/filter/EntityFilterType';

export default function useBusinessFiltersDisplayList() {
  const filters = useAppSelector((state) => state.businessFilter);

  const businessFiltersDisplay: DisplayFilterType[] = [
    {
      filterByLabel: 'Rating',
      filterValues: [
        {
          label: `${ratingEnumToText(filters.rating)}${filters.rating !== 0 && filters.rating !== 5 ? '+' : ''}`,
          value: filters.rating,
        },
      ],
      removeOnClick: removeBusinessRatingFilter,
    },
    {
      filterByLabel: 'Category',
      filterValues: filters.category.map((category) => ({
        label: categoryEnumToText(category),
        value: category,
      })),
      removeOnClick: removeBusinessCategoryFilter,
    },
  ];

  return businessFiltersDisplay;
}
