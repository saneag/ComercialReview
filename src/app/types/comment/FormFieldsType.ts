import { BaseFieldType } from '@/app/types/BaseFormFieldType';

export interface CommentCreateFieldType extends BaseFieldType {}

export interface CommentUpdateFieldType extends BaseFieldType {}

export type CommentCRUDFieldType =
  | CommentCreateFieldType
  | CommentUpdateFieldType;
