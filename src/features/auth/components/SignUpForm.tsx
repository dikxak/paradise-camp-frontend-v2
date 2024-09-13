import { useState } from "react";
import { useFormContext } from "react-hook-form";
import { useTranslation } from "react-i18next";
import { useNavigate, useSearchParams } from "react-router-dom";

import {
  faEye,
  faEyeSlash,
  faCircleXmark,
  faArrowRightToBracket,
} from "@fortawesome/free-solid-svg-icons";

import Button from "@/components/ui/Button/Button";
import ReactHookForm from "@/components/ui/Form/ReactHookForm";
import ReactHookInput from "@/components/ui/Form/ReactHookInput";

import { useAppDispatch, useAppSelector } from "@/hooks/reduxHooks";

import { HOME } from "@/constants/routes";

import displayToaster from "@/utils/displayToaster";

import { userRegister } from "../authSlice";
import { SignUpFormValues } from "../types/authTypes";

const initialPasswordType = {
  isPasswordVisible: false,
  isConfirmPasswordVisible: false,
};

type PasswordType = typeof initialPasswordType;

const SignUpForm = () => {
  const { t } = useTranslation();

  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const redirectTo = searchParams.get("redirectTo");

  const { setValue, watch } = useFormContext<SignUpFormValues>();
  const { dob: userDateOfBirth } = watch();

  const dispatch = useAppDispatch();
  const { status } = useAppSelector((state) => state.user);

  const [passwordIconState, setPasswordIconState] =
    useState<PasswordType>(initialPasswordType);

  const { isPasswordVisible, isConfirmPasswordVisible } = passwordIconState;

  const handleShowPasswordIconClick = () => {
    setPasswordIconState({
      ...passwordIconState,
      isPasswordVisible: !isPasswordVisible,
    });
  };

  const handleShowConfirmPasswordIconClick = () => {
    setPasswordIconState({
      ...passwordIconState,
      isConfirmPasswordVisible: !isConfirmPasswordVisible,
    });
  };

  const handleDateInputFieldClear = () => {
    if (!userDateOfBirth) return;

    setValue("dob", "", { shouldValidate: true });
  };

  const handleUserSignUp = async (data: SignUpFormValues) => {
    const resultAction = await dispatch(userRegister(data));

    if (userRegister.fulfilled.match(resultAction)) {
      navigate(redirectTo || HOME.INDEX);
      displayToaster(
        "success",
        t("auth.signup.successMessage", { emoji: "🎉" }),
      );
    }
  };

  const passwordType = isPasswordVisible ? "text" : "password";
  const confirmPasswordType = isConfirmPasswordVisible ? "text" : "password";

  const passwordIcon = isPasswordVisible ? faEyeSlash : faEye;
  const confirmPasswordIcon = isConfirmPasswordVisible ? faEyeSlash : faEye;

  const isLoading = status === "pending";

  return (
    <ReactHookForm<SignUpFormValues>
      onSubmit={handleUserSignUp}
      className="w-full"
    >
      <div className="grid grid-cols-2 gap-x-8 gap-y-4 xs:grid-cols-1">
        <ReactHookInput
          id="firstName"
          htmlFor="firstName"
          label="First Name"
          name="firstName"
          placeholder="John"
        />

        <ReactHookInput
          id="lastName"
          htmlFor="lastName"
          label="Last Name"
          name="lastName"
          placeholder="Doe"
        />

        <ReactHookInput
          id="dob"
          htmlFor="dob"
          label="Date of Birth"
          name="dob"
          placeholder="mm/dd/yyyy"
          type="date"
          icon={faCircleXmark}
          iconClassName="text-red-500"
          onIconClick={handleDateInputFieldClear}
        />

        <ReactHookInput
          id="phoneNo"
          htmlFor="phoneNo"
          label="Phone no"
          name="phoneNo"
          placeholder="9810000000"
        />

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

        <ReactHookInput
          id="confirmPassword"
          htmlFor="confirmPassword"
          label="Confirm Password"
          name="confirmPassword"
          placeholder="••••••••"
          type={confirmPasswordType}
          icon={confirmPasswordIcon}
          onIconClick={handleShowConfirmPasswordIconClick}
          iconClassName="text-gray-800"
        />

        <Button
          variant="primary"
          type="submit"
          className="col-span-2 justify-self-end xs:col-span-1"
          size="lg"
          icon={faArrowRightToBracket}
          iconPosition="end"
          isLoading={isLoading}
          disabled={isLoading}
        >
          Sign up
        </Button>
      </div>
    </ReactHookForm>
  );
};

export default SignUpForm;
