import { useTranslation } from "react-i18next";

import { yupResolver } from "@hookform/resolvers/yup";

import ReactHookFormProvider from "@/context/ReactHookFormProvider";

import signUpImg from "@/assets/images/signup.jpg";

import { SIGN_UP_DEFAULT_FORM_VALUES } from "./constants/constants";
import SignUpForm from "./SignUpForm";
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

        <div className="xs:item-center flex gap-12 sm:flex-col sm:items-center md:flex-col xs:flex-col">
          <img
            src={signUpImg}
            alt="Wood fire"
            className="h-[30rem] w-1/2 rounded-lg sm:w-full md:w-full xs:h-full xs:w-full"
          />

          <SignUpForm />
        </div>
      </div>
    </ReactHookFormProvider>
  );
};

export default SignUp;
