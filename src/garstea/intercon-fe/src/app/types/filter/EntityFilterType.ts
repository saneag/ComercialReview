import {
  removeBusinessCategoryFilter,
  removeBusinessRatingFilter,
  resetBusinessFilters,
  setBusinessesCategoryFilter,
  setBusinessRatingFilter,
} from '@/app/redux/features/slices/businessFilterSlice';
import {
  removeReviewCategoryFilter,
  removeReviewRatingFilter,
  resetReviewFilters,
  setReviewCategoryFilter,
  setReviewRatingFilter,
} from '@/app/redux/features/slices/reviewsFilterSlice';

export interface BaseFilterType {
  rating: RatingFilterType;
  category: CategoryFilterType;
}

export type RatingFilterType = number[];
export type CategoryFilterType = number[];

export interface ReviewFilterType extends BaseFilterType {}

export interface BusinessFilterType extends BaseFilterType {}

export type SetRatingFilterType =
  | typeof setReviewRatingFilter
  | typeof setBusinessRatingFilter;

export type SetCategoryFilterType =
  | typeof setBusinessesCategoryFilter
  | typeof setReviewCategoryFilter;

export type ResetFiltersType =
  | typeof resetBusinessFilters
  | typeof resetReviewFilters;

export type FilterType = RatingFilterType | CategoryFilterType;

export type RemoveRatingFilterOnClickType =
  | typeof removeBusinessRatingFilter
  | typeof removeReviewRatingFilter;

export type RemoveCategoryFilterOnClickType =
  | typeof removeBusinessCategoryFilter
  | typeof removeReviewCategoryFilter;

export type RemoveFilterOnClickType =
  | RemoveRatingFilterOnClickType
  | RemoveCategoryFilterOnClickType;

export interface FilterValueType {
  label: string;
  value: number;
}

export type DisplayFilterType = {
  filterByLabel: string;
  filterValues: FilterValueType[];
  removeOnClick: RemoveFilterOnClickType;
};
