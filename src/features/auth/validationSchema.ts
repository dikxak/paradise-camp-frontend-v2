import i18next from "i18next";
import * as yup from "yup";

const { t } = i18next;

export const signUpValidationSchema = yup
  .object()
  .shape({
    firstName: yup.string().required(t("auth.signup.validation.firstName")),
    lastName: yup.string().required(t("auth.signup.validation.lastName")),
    email: yup
      .string()
      .email(t("auth.signup.validation.validEmail"))
      .required(t("auth.signup.validation.email")),
    dateOfBirth: yup.string().required(t("auth.signup.validation.dateOfBirth")),
    phoneNo: yup.string().required(t("auth.signup.validation.phoneNo")),
    password: yup
      .string()
      .required(t("auth.signup.validation.password.required"))
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

export const loginValidationSchema = yup.object().shape({});
