import { useState } from "react";
import { useFormContext } from "react-hook-form";

import {
  faEye,
  faEyeSlash,
  faCircleXmark,
} from "@fortawesome/free-solid-svg-icons";

import Button from "@/components/ui/Button/Button";
import ReactHookForm from "@/components/ui/Form/ReactHookForm";
import ReactHookInput from "@/components/ui/Form/ReactHookInput";

import { useAppDispatch, useAppSelector } from "@/hooks/reduxHooks";

import { signup } from "./authSlice";
import { User } from "./types/formValues";

const initialPasswordType = {
  isPasswordVisible: false,
  isConfirmPasswordVisible: false,
};

type PasswordType = typeof initialPasswordType;

const SignUpForm = () => {
  const { setValue, watch } = useFormContext<User>();

  const dispatch = useAppDispatch();
  const { status } = useAppSelector((state) => state.user);

  const { dateOfBirth: userDateOfBirth } = watch();

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

    setValue("dateOfBirth", "", { shouldValidate: true });
  };

  const passwordType = isPasswordVisible ? "text" : "password";
  const confirmPasswordType = isConfirmPasswordVisible ? "text" : "password";

  const passwordIcon = isPasswordVisible ? faEyeSlash : faEye;
  const confirmPasswordIcon = isConfirmPasswordVisible ? faEyeSlash : faEye;

  return (
    <ReactHookForm<User>
      onSubmit={async (data) => {
        await dispatch(signup(data));
      }}
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
          id="dateOfBirth"
          htmlFor="dateOfBirth"
          label="Date of Birth"
          name="dateOfBirth"
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
          isLoading={status === "pending"}
          loaderConfig={{
            variant: "primary",
            size: "sm",
          }}
        >
          Sign up
        </Button>
      </div>
    </ReactHookForm>
  );
};

export default SignUpForm;
