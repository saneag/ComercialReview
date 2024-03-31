import { removeReviewRatingFilter } from '@/app/redux/features/slices/reviewsFilterSlice';
import { useAppSelector } from '@/app/redux/store';
import { ratingEnumToText } from '@/app/types/enums/RatingFilterEnum';
import { DisplayFilterType } from '@/app/types/filter/EntityFilterType';

export default function useReviewFiltersDisplayList() {
  const filters = useAppSelector((state) => state.reviewsFilter);

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

  return reviewsFiltersDisplay;
}
