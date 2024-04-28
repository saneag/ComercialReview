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
  Recommendation = 2,
}

export enum CommentSortByEnum {
  UpdatedDate = 0,
  CreatedDate = 1,
}

export interface BusinessSortType extends SortType<BusinessSortByEnum> {}

export interface ReviewSortType extends SortType<ReviewSortByEnum> {}

export interface CommentSortType extends SortType<CommentSortByEnum> {}
