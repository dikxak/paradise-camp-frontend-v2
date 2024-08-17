import { RouteObject } from "react-router-dom";

import { AUTH } from "@/constants/routes";

const authRoutes: RouteObject[] = [
  {
    path: AUTH.SIGN_UP,
    lazy: async () => {
      const { SignUp } = await import("@/features/auth/SignUp");

      return { Component: SignUp };
    },
  },
  {
    path: AUTH.LOGIN,
    lazy: async () => {
      const { Login } = await import("@/features/auth/Login");

      return { Component: Login };
    },
  },
];

export default authRoutes;
