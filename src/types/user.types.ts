export interface IUser {
  _id?: string;
  userName?: string;
  login?: string;
  password?: string;
  number?: number;
  role?: "admin" | "user";
  auth_method?: "credentials" | string;
  accounts?: any[];
  created_at?: string;
  updated_at?: string;
}

export interface IAuthResponse {
  message: string;
  user: IUser;
}

export interface IResetPasswordResponse {
  message: string;
}
