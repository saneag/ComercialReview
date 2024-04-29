import { RecommendationType } from '@/app/types/RecommendationType';

export interface BaseReviewType {
  grade: number;
  reviewText: string;
  recommendationType: RecommendationType;
}

export interface ReviewAuthorType {
  avatar: string;
  firstName: string;
  lastName: string;
  userName: string;
}

export interface ReviewType extends BaseReviewType {
  businessId: number;
  author: ReviewAuthorType;
  updatedDate: Date;
  commentsCount: number;
  wasEdited: boolean;
  authorId: number;
}

export interface ReviewCreateType extends BaseReviewType {}

export interface ReviewUpdateType extends ReviewCreateType {}
