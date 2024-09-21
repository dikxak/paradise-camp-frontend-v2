import { LOCAL_STORAGE_KEYS } from "@/constants/localStorage";

import { unauthenticatedPostRequest } from "@/lib/api/apiRequests";

import {
  User,
  SignUpFormValues,
  LoginFormValues,
  LoginResponse,
} from "../types/authTypes";

export const URLS = {
  SIGN_UP: "/users/register",
  LOGIN: "/users/login",
};

export const login = async (loginInfo: LoginFormValues) => {
  const data = await unauthenticatedPostRequest<LoginResponse>(
    URLS.LOGIN,
    loginInfo,
  );

  localStorage.setItem(LOCAL_STORAGE_KEYS.JWT_TOKEN, data.token);
  localStorage.setItem(LOCAL_STORAGE_KEYS.USERNAME, data.userName);
  localStorage.setItem(LOCAL_STORAGE_KEYS.USER_ID, data.userId);

  return data;
};

export const register = async (userInfo: SignUpFormValues) => {
  const data = await unauthenticatedPostRequest<User>(URLS.SIGN_UP, userInfo);

  return data;
};
