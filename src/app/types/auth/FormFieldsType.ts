export type InputFieldType = 'text' | 'email' | 'password';

export interface BaseFieldType {
  label: string;
  displayLabel?: string;
  type?: InputFieldType;
  placeholder?: string;
  isRequired?: boolean;
}

export interface LoginFieldType extends BaseFieldType {}
export interface RegisterFieldType extends BaseFieldType {}
export interface ResetPasswordFieldType extends BaseFieldType {}
export interface ResetPasswordConfirmFieldType extends BaseFieldType {}

export type AuthFormFieldsType =
  | LoginFieldType
  | RegisterFieldType
  | ResetPasswordFieldType
  | ResetPasswordConfirmFieldType;
