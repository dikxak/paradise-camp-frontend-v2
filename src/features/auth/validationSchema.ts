import i18next from "i18next";
import * as yup from "yup";

const { t } = i18next;

export const signUpValidationSchema = yup
  .object()
  .shape({
    firstName: yup
      .string()
      .required(t("common.validation.required", { key: "First name" })),
    lastName: yup
      .string()
      .required(t("common.validation.required", { key: "Last name" })),
    email: yup
      .string()
      .email(t("common.validation.valid", { key: "Email", type: "email" }))
      .required(t("common.validation.required", { key: "Email" })),
    dob: yup
      .string()
      .required(t("common.validation.required", { key: "Date of birth" })),
    phoneNo: yup
      .string()
      .required(t("common.validation.required", { key: "Phone no" })),
    password: yup
      .string()
      .required(t("common.validation.required", { key: "Password" }))
      .min(8, t("auth.signup.validation.password.minLength", { minLength: 8 }))
      .matches(/[A-Z]/, t("auth.signup.validation.password.upperCase"))
      .matches(/[a-z]/, t("auth.signup.validation.password.lowerCase"))
      .matches(/[0-9]/, t("auth.signup.validation.password.number"))
      .matches(/[\W_]/, t("auth.signup.validation.password.specialCharacter")),
    confirmPassword: yup
      .string()
      .required(t("auth.signup.validation.confirmPassword"))
      .oneOf([yup.ref("password")], "Passwords must match"),
  })
  .required();

export const loginValidationSchema = yup.object().shape({
  email: yup
    .string()
    .email(t("common.validation.valid", { key: "Email", type: "email" }))
    .required(t("common.validation.required", { key: "Email" })),
  password: yup
    .string()
    .required(t("common.validation.required", { key: "Password" })),
});
