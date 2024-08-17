import { useTranslation } from "react-i18next";
import { NavLink } from "react-router-dom";

import { yupResolver } from "@hookform/resolvers/yup";

import ReactHookFormProvider from "@/context/ReactHookFormProvider";

import signUpImg from "@/assets/images/signup.jpg";

import { AUTH } from "@/constants/routes";

import SignUpForm from "./components/SignUpForm";
import { SIGN_UP_DEFAULT_FORM_VALUES } from "./constants/constants";
import { signUpValidationSchema } from "./validationSchema";

export const SignUp = () => {
  const { t } = useTranslation();

  return (
    <ReactHookFormProvider
      resolver={yupResolver(signUpValidationSchema)}
      defaultValues={SIGN_UP_DEFAULT_FORM_VALUES}
    >
      <div className="mx-auto my-16 max-w-7xl rounded-lg px-9 py-12 shadow-lg sm:mx-12 md:mx-12 xs:mx-4 xs:py-6">
        <h2 className="mb-10 text-3xl font-semibold uppercase text-primary-900 xs:mb-8 xs:text-2xl">
          {t("auth.signup.heading")}
        </h2>

        <div className="xs:item-center flex gap-12 sm:flex-col sm:items-center md:flex-col xs:mb-8 xs:flex-col">
          <img
            src={signUpImg}
            alt="Wood fire"
            className="h-[30rem] w-1/2 rounded-lg sm:w-full md:w-full xs:h-full xs:w-full"
          />

          <SignUpForm />
        </div>

        <div className="flex items-center gap-2 text-lg xs:text-base">
          <p>Already have an account?</p>
          <NavLink
            to={AUTH.LOGIN}
            className="border-b-2 border-secondary-800 transition hover:border-transparent"
          >
            Login
          </NavLink>
        </div>
      </div>
    </ReactHookFormProvider>
  );
};

export default SignUp;
