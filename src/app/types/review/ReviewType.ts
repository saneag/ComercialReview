export interface BaseReviewType {
  grade: number;
  reviewText: string;
}

export interface ReviewAuthorType {
  firstName: string;
  lastName: string;
  userName: string;
}

export interface ReviewType extends BaseReviewType {
  businessId: number;
  author: ReviewAuthorType;
}

export interface ReviewCreateType extends BaseReviewType {}

export interface ReviewUpdateType extends BaseReviewType {}
