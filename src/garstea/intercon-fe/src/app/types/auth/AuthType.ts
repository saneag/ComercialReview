export interface BaseAuthType {
  email: string;
  password: string;
}

export interface LoginType extends BaseAuthType {}

export interface RegisterType extends BaseAuthType {
  firstName: string;
  lastName: string;
  confirmPassword: string;
  username?: string;
}

export type AuthType = LoginType | RegisterType;
