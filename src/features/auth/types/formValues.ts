import { FieldValues } from "react-hook-form";

export interface User extends FieldValues {
  firstName: string;
  lastName: string;
  email: string;
  dateOfBirth: string;
  phoneNo: string;
  password: string;
  confirmPassword: string;
}

export interface LoginFormValues extends FieldValues {}
