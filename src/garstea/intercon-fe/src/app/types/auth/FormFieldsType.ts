export type InputFieldType = 'text' | 'email' | 'password';

export interface BaseFieldType {
  label: string;
  displayLabel?: string;
  type?: InputFieldType;
  placeholder?: string;
}

export interface LoginFieldType extends BaseFieldType {}

export interface RegisterFieldType extends BaseFieldType {}

export type AuthFormFieldsType = LoginFieldType | RegisterFieldType;
