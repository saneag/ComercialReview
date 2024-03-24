export interface BaseUserType {
  firstName: string;
  lastName: string;
  email: string;
  userName?: string;
  avatar?: UserAvatarType | null;
}

export interface UserAvatarType {
  data?: string;
}

export interface UserType extends BaseUserType {
  id: number;
}

export interface UserUpdateType extends BaseUserType {}

export interface UserLoginType {
  accessToken: string;
  refreshToken: string;
}
