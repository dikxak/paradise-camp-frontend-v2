import { useEffect } from "react";
import { useLocation } from "react-router-dom";

import { loginStatusUpdated } from "@/features/auth/authSlice";

import { useAppDispatch } from "@/hooks/reduxHooks";

const CheckLocalStorage = () => {
  const { pathname } = useLocation();

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(loginStatusUpdated({ token: localStorage.getItem("jwtToken") }));
  }, [pathname, dispatch]);

  return null;
};

export default CheckLocalStorage;
