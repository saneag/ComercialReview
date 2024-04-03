import { CategoryFilterEnum } from '@/app/types/enums/CategoryFilterEnum';
import { RatingFilterEnum } from '@/app/types/enums/RatingFilterEnum';
import { SortType } from '@/app/types/SortType';

export interface QueryParams {
  pageNumber: number;
  pageSize: number;
  search?: string;
  sort?: SortType;
  categories?: CategoryFilterEnum[];
  rating?: RatingFilterEnum[];
}
