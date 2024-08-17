import { useState } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";

import Button from "@/components/ui/Button/Button";
import ReactHookForm from "@/components/ui/Form/ReactHookForm";
import ReactHookInput from "@/components/ui/Form/ReactHookInput";

import { useAppDispatch, useAppSelector } from "@/hooks/reduxHooks";

import { AUTH } from "@/constants/routes";

import displayToaster from "@/utils/displayToaster";

import { userLogin } from "../authSlice";
import { LoginFormValues } from "../types/authTypes";

const LoginForm = () => {
  const { t } = useTranslation();

  const navigate = useNavigate();

  const dispatch = useAppDispatch();
  const { status } = useAppSelector((state) => state.user);

  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const handleShowPasswordIconClick = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };

  const handleUserLogin = async (data: LoginFormValues) => {
    const resultAction = await dispatch(userLogin(data));

    if (userLogin.fulfilled.match(resultAction)) {
      navigate(AUTH.INDEX);
      displayToaster(
        "success",
        t("auth.login.successMessage", { emoji: "🎉" }),
      );
    }
  };

  const passwordType = isPasswordVisible ? "text" : "password";
  const passwordIcon = isPasswordVisible ? faEyeSlash : faEye;

  return (
    <ReactHookForm<LoginFormValues>
      onSubmit={handleUserLogin}
      className="w-full"
    >
      <div className="flex flex-col gap-3">
        <ReactHookInput
          id="email"
          htmlFor="email"
          label="Email"
          name="email"
          placeholder="you@example.com"
          type="email"
          containerClassName="xs:col-span-1 col-span-2"
        />

        <ReactHookInput
          id="password"
          htmlFor="password"
          label="Password"
          name="password"
          placeholder="••••••••"
          type={passwordType}
          icon={passwordIcon}
          onIconClick={handleShowPasswordIconClick}
          iconClassName="text-gray-800"
        />

        <Button
          variant="primary"
          type="submit"
          className="mr-auto"
          size="lg"
          isLoading={status === "pending"}
          loaderConfig={{
            variant: "primary",
            size: "sm",
          }}
        >
          Login
        </Button>
      </div>
    </ReactHookForm>
  );
};

export default LoginForm;
