export interface BaseUserType {
  firstName: string;
  lastName: string;
  email: string;
  userName?: string;
}

export interface UserType extends BaseUserType {
  id: number;
  avatarPath: string;
}

export interface UserUpdateType extends BaseUserType {
  avatar: File | null;
}

export interface UserLoginType {
  accessToken: string;
  refreshToken: string;
}
