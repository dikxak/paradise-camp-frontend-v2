import { Navigate, useLocation } from "react-router-dom";

import { selectIsLoggedIn } from "@/features/auth/authSelectors";

import { useAppSelector } from "@/hooks/reduxHooks";

import { AUTH } from "@/constants/routes";

const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
  const location = useLocation();

  const isLoggedIn = useAppSelector(selectIsLoggedIn);

  if (!isLoggedIn)
    return (
      <Navigate
        to={`${AUTH.LOGIN}?redirectTo=${encodeURIComponent(location.pathname)}`}
        replace
      />
    );

  return children;
};

export default ProtectedRoute;
