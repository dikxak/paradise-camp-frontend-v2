import { useTranslation } from "react-i18next";
import { NavLink } from "react-router-dom";

import { yupResolver } from "@hookform/resolvers/yup";

import ReactHookFormProvider from "@/context/ReactHookFormProvider";

import loginImg from "@/assets/images/login.jpg";

import { AUTH } from "@/constants/routes";

import LoginForm from "./components/LoginForm";
import { LOGIN_DEFAULT_FORM_VALUES } from "./constants/constants";
import { loginValidationSchema } from "./validationSchema";

export const Login = () => {
  const { t } = useTranslation();

  return (
    <ReactHookFormProvider
      resolver={yupResolver(loginValidationSchema)}
      defaultValues={LOGIN_DEFAULT_FORM_VALUES}
    >
      <div className="mx-auto my-16 max-w-lg rounded-lg px-9 py-8 shadow-lg xs:mx-4">
        <h2 className="mb-10 text-3xl font-semibold uppercase text-primary-900 xs:mb-8 xs:text-2xl">
          {t("auth.login.heading")}
        </h2>

        <div className="mb-8 flex flex-col gap-12">
          <img src={loginImg} alt="Wood fire" className="w-full rounded-lg" />

          <LoginForm />
        </div>

        <div className="flex items-center gap-2 text-lg xs:text-base">
          <p>Don&apos;t have an account?</p>
          <NavLink
            to={AUTH.SIGN_UP}
            className="border-b-2 border-secondary-800 transition hover:border-transparent"
          >
            Register
          </NavLink>
        </div>
      </div>
    </ReactHookFormProvider>
  );
};

export default Login;
