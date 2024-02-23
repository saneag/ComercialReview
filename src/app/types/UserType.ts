export interface UserType {
  userId: number;
  firstName: string;
  lastName: string;
  email: string;
  userName?: string;
}

export interface UserLoginType {
  token: string;
}
