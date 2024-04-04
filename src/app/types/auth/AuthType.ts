export interface BaseAuthType {
  email: string;
  password: string;
}

export interface LoginType extends BaseAuthType {}

export interface RegisterType extends BaseAuthType {
  firstName: string;
  lastName: string;
  confirmPassword: string;
  userName?: string;
}

export interface ResetPasswordType extends Omit<BaseAuthType, 'password'> {}

export interface ResetPasswordConfirmType extends BaseAuthType {
  confirmPassword: string;
  resetPasswordCode: string;
}

export type AuthType =
  | LoginType
  | RegisterType
  | ResetPasswordType
  | ResetPasswordConfirmType;
