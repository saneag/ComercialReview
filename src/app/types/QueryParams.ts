import { CategoryFilterEnum } from '@/app/types/enums/CategoryFilterEnum';
import { RatingFilterEnum } from '@/app/types/enums/RatingFilterEnum';
import {
  BusinessSortByEnum,
  ReviewSortByEnum,
  SortType,
} from '@/app/types/SortType';

export interface QueryParams {
  pageNumber: number;
  pageSize: number;
  search?: string;
  categories?: CategoryFilterEnum[];
}

export interface BusinessQueryParams
  extends QueryParams,
    SortType<BusinessSortByEnum> {
  minGrade?: RatingFilterEnum;
}

export interface ReviewQueryParams
  extends QueryParams,
    SortType<ReviewSortByEnum> {
  grades?: RatingFilterEnum[];
}
