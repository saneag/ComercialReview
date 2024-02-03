import { setBusinessRatingFilter } from '@/app/redux/features/slices/businessFilterSlice';
import { setReviewRatingFilter } from '@/app/redux/features/slices/reviewsFilterSlice';

export interface BaseFilterType {
  rating: number[];
}

export interface ReviewFilterType extends BaseFilterType {}

export interface BusinessFilterType extends BaseFilterType {}

export type RatingFilterType =
  | typeof setReviewRatingFilter
  | typeof setBusinessRatingFilter;
