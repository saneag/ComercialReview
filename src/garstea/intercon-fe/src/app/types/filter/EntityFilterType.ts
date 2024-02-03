import { setBusinessRatingFilter } from '@/app/redux/features/slices/businessFilterSlice';
import { setReviewRatingFilter } from '@/app/redux/features/slices/reviewsFilterSlice';

export interface BaseFilterType {
  rating: RatingFilterType;
}

export type RatingFilterType = number[];

export interface ReviewFilterType extends BaseFilterType {}

export interface BusinessFilterType extends BaseFilterType {}

export type SetRatingFilterType =
  | typeof setReviewRatingFilter
  | typeof setBusinessRatingFilter;
