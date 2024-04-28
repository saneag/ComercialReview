import { UserType } from '@/app/types/user/UserType';

export interface BaseCommentType {
  text: string;
  businessId: number;
  reviewAuthorId: number;
}

export interface CommentType extends BaseCommentType {
  id: number;
  isCommentOfBusinessOwner: boolean;
  author: UserType;
  createdDate: Date;
  updatedDate: Date;
}

export interface CommentCreateType extends BaseCommentType {}

export interface CommentUpdateType {
  id: number;
  text: string;
}

export type CommentCRUDType = CommentCreateType | CommentUpdateType;
