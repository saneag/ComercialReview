export type InputFieldType = 'text' | 'email' | 'password';

export interface BaseFieldType {
  label: string;
  displayLabel?: string;
  type?: InputFieldType;
  placeholder?: string;
  isRequired?: boolean;
  isDisabled?: boolean;
}
