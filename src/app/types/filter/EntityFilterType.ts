import {
  removeBusinessCategoryFilter,
  removeBusinessRatingFilter,
  resetBusinessFilters,
  setBusinessesCategoryFilter,
  setBusinessRatingFilter,
  setBusinessSearchFilter,
  setBusinessSortFilter,
} from '@/app/redux/features/slices/businessFilterSlice';
import {
  removeReviewRatingFilter,
  resetReviewFilters,
  setReviewRatingFilter,
  setReviewSearchFilter,
  setReviewSortFilter,
} from '@/app/redux/features/slices/reviewsFilterSlice';
import { SortType } from '@/app/types/SortType';

export interface BaseFilterType {
  search: string;
  sort: SortType;
}

export interface ReviewFilterType extends BaseFilterType {
  rating: number[];
}

export interface BusinessFilterType extends BaseFilterType {
  rating: number;
  category: number[];
}

export type SetRatingFilterType =
  | typeof setReviewRatingFilter
  | typeof setBusinessRatingFilter;

export type SetCategoryFilterType = typeof setBusinessesCategoryFilter;

export type SearchFilterType =
  | typeof setBusinessSearchFilter
  | typeof setReviewSearchFilter;

export type SortFilterType =
  | typeof setReviewSortFilter
  | typeof setBusinessSortFilter;

export type ResetFiltersType =
  | typeof resetBusinessFilters
  | typeof resetReviewFilters;

export type FilterType = number[];

export type RemoveRatingFilterOnClickType =
  | typeof removeBusinessRatingFilter
  | typeof removeReviewRatingFilter;

export type RemoveCategoryFilterOnClickType =
  typeof removeBusinessCategoryFilter;

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
