import { useEffect } from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";

import { selectIsLoggedIn } from "@/features/auth/authSelectors";

import Layout from "@/layouts/Layout";

import { useAppSelector } from "@/hooks/reduxHooks";

import { HOME } from "@/constants/routes";

const AppRoot = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const isLoggedIn = useAppSelector(selectIsLoggedIn);

  useEffect(() => {
    if (location.pathname === "/" && isLoggedIn) navigate(HOME.INDEX);

    if (location.pathname === "/" && !isLoggedIn) navigate("/landing");
  }, [location.pathname, isLoggedIn, navigate]);

  return (
    <Layout>
      <Outlet />
    </Layout>
  );
};

export default AppRoot;
