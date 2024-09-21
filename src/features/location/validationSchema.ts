import i18next from "i18next";
import * as yup from "yup";

import { FILE_SIZE, SUPPORTED_FORMATS } from "@/constants/imageUpload";

const { t } = i18next;

const commonValidationShape = {
  name: yup.string().required(t("common.validation.required", { key: "Name" })),
  address: yup
    .string()
    .required(t("common.validation.required", { key: "Address" })),
  availableSpotNo: yup
    .string()
    .required(t("common.validation.required", { key: "Available spot" })),
  type: yup.string().required(t("common.validation.required", { key: "Type" })),
  latitude: yup
    .string()
    .required(t("common.validation.required", { key: "Latitude" })),
  longitude: yup
    .string()
    .required(t("common.validation.required", { key: "Longitude" })),
  phoneNo: yup
    .string()
    .required(t("common.validation.required", { key: "Phone no" })),
  email: yup
    .string()
    .email(t("common.validation.valid", { key: "Email", type: "email" }))
    .required(t("common.validation.required", { key: "Email" })),
  price: yup
    .string()
    .required(t("common.validation.required", { key: "Price" })),
  description: yup
    .string()
    .required(t("common.validation.required", { key: "Description" })),
};

export const addLocationValidationSchema = yup.object().shape({
  ...commonValidationShape,
  img: yup
    .mixed<File>()
    .nullable()
    .test(
      "fileRequired",
      t("common.validation.required", { key: "Location image" }),
      (value) => value !== null,
    )
    .test("fileSize", t("imageUpload.validation.fileSizeTooLarge"), (value) => {
      if (value && value instanceof File) return value.size <= FILE_SIZE;
    })
    .test("fileFormat", t("imageUpload.validation.fileFormat"), (value) => {
      if (value && value instanceof File)
        return SUPPORTED_FORMATS.includes(value.type);
    }),
});

export const editLocationValidationSchema = yup
  .object()
  .shape(commonValidationShape);
