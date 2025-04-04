// Auth types

interface LoginValues {
  email: string;
  password: string;
}

interface RegisterValues {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}

interface User {
  firstName: string;
  lastName: string;
  email: string;
  role: string;
  _id: string;
  createdAd: string;
  updatedAd: string;
  __v: number;
}

interface AuthResponse {
  message: string;
  user: User;
}

interface RefreshResponse {
  accessToken: string;
}

interface LogoutResponse {
  massage: string;
}

interface GetMeResponse {
  message: string;
  user: User;
}

// Product types

interface Shoe {
  _id: string;
  name: string;
  picture: string[];
  description: string;
  isNew: boolean;
  discount: number;
  size: string;
  color: string;
  gender: string;
  price: number;
  __v: number;
  updatedAt: string;
}

interface ShoeFormValues {
  name: string;
  picture: string[];
  description: string;
  isNew: boolean;
  discount: string;
  size: string;
  color: string;
  gender: string;
  price: number;
}

export type {
  LoginValues,
  RegisterValues,
  AuthResponse,
  RefreshResponse,
  LogoutResponse,
  GetMeResponse,
  Shoe,
  ShoeFormValues,
};
