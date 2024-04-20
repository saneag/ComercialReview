export interface SortType<T> {
  sortBy: T;
  sortDirection?: SortDirectionEnum;
}

export enum SortDirectionEnum {
  Ascending = 0,
  Descending = 1,
}

export enum BusinessSortByEnum {
  UpdatedDate = 0,
  Title = 1,
  Category = 2,
  Rating = 3,
}

export enum ReviewSortByEnum {
  UpdatedDate = 0,
  Grade = 1,
  Like = 2,
}

export interface BusinessSortType extends SortType<BusinessSortByEnum> {}

export interface ReviewSortType extends SortType<ReviewSortByEnum> {}
