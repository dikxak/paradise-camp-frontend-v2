/* eslint-disable react/jsx-props-no-spreading */

import { useState } from "react";
import { useTranslation } from "react-i18next";

import { faUpload } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import clsx from "clsx";

type DropzoneProps = React.InputHTMLAttributes<HTMLInputElement>;

const Dropzone = ({ disabled, ...rest }: DropzoneProps) => {
  const { t } = useTranslation();

  const [isFocused, setIsFocused] = useState(false);

  const containerClassName = clsx(
    "relative border-2 border-dashed bg-gray-100 p-8 transition",
    {
      "hover:border-primary-500 focus:border-primary-500": !disabled,
      "bg-gray-300 border-gray-400": disabled,
      "border-primary-500": isFocused,
      "border-gray-300": !isFocused,
    },
  );

  const inputClassName = clsx(
    "absolute bottom-0 left-0 right-0 top-0 z-50 block h-full w-full opacity-0",
    {
      "cursor-pointer": !disabled,
    },
  );

  return (
    <div className={containerClassName}>
      <p className="flex items-center justify-center gap-4 text-lg">
        <span className="text-gray-600">{t("dropzone.description")}</span>
        <FontAwesomeIcon
          icon={faUpload}
          className="text-2xl text-primary-600"
        />
      </p>
      <input
        {...rest}
        type="file"
        disabled={disabled}
        className={inputClassName}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
      />
    </div>
  );
};

Dropzone.displayName = "Dropzone";

export default Dropzone;
