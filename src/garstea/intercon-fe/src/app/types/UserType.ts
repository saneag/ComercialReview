import { UserRoleEnum } from '@/app/types/enums/UserRoleEnum';

export interface UserType {
  firstName: string;
  lastName: string;
  email: string;
  userName?: string;
}

export interface UserLoginType {
  accessToken: string;
  refreshToken: string;
  user: UserType;
  role: UserRoleEnum;
}
