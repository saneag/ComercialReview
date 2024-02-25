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
  userId: string;
}

export interface UserUpdateType extends BaseUserType {}

export interface UserLoginType {
  token: string;
}
