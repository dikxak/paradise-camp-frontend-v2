import { FieldValues } from "react-hook-form";

import { ApiStatus } from "@/types";

export interface User {
  firstName: string;
  lastName: string;
  email: string;
  dob: string;
  phoneNo: string;
}

export interface SignUpFormValues extends FieldValues, User {
  password: string;
  confirmPassword: string;
}
export interface UserState {
  userId: string;
  userName: string;
  isLoggedIn: boolean;
  token: string;
  status: ApiStatus;
}

export type LoginFormValues = Pick<SignUpFormValues, "email" | "password"> &
  FieldValues;

export interface LoginResponse {
  userId: string;
  token: string;
  userName: string;
}
