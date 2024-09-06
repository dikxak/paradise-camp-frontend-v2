import React from "react";
import { useTranslation } from "react-i18next";

import pageNotFoundImg from "@/assets/images/page-not-found.jpg";

import ErrorPage from "./Error";

const PageNotFound: React.FC = () => {
  const { t } = useTranslation();

  return (
    <ErrorPage
      imgSrc={pageNotFoundImg}
      title={t("pageNotFound.title")}
      message={t("pageNotFound.message")}
      alt="Page not found"
    />
  );
};

export default PageNotFound;
