import { BaseFieldType } from '@/app/types/BaseFormFieldType';

export interface LoginFieldType extends BaseFieldType {}
export interface RegisterFieldType extends BaseFieldType {}
export interface ResetPasswordFieldType extends BaseFieldType {}
export interface ResetPasswordConfirmFieldType extends BaseFieldType {}

export type AuthFormFieldsType =
  | LoginFieldType
  | RegisterFieldType
  | ResetPasswordFieldType
  | ResetPasswordConfirmFieldType;
