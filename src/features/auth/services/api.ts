import { unauthenticatedPostRequest } from "@/lib/api/apiRequests";

import { User, SignUpFormValues } from "../types/authTypes";

const URLS = {
  SIGN_UP: "/users/register",
};

export const login = () => {};

export const register = async (userInfo: SignUpFormValues) => {
  const response = await unauthenticatedPostRequest<User>(
    URLS.SIGN_UP,
    userInfo,
  );

  return response.data;
};
