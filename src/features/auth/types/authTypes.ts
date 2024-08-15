import { FieldValues } from "react-hook-form";

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
  user: User | null;
  isLoggedIn: boolean;
  token: string;
  status: "idle" | "pending" | "succeeded" | "rejected";
}

export interface LoginFormValues extends FieldValues {}
