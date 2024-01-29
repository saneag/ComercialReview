export type InputFieldType = 'text' | 'email' | 'password';

export interface BaseFieldType {
  label: string;
  displayLabel?: string;
  type?: InputFieldType;
  placeholder?: string;
}

export interface LoginFieldType extends BaseFieldType {}

export interface RegisterFieldType extends BaseFieldType {
  firstName: string;
  lastName: string;
  confirmPassword: string;
}

export type AuthFormFieldsType = LoginFieldType | RegisterFieldType;
