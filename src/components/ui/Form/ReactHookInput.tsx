/* eslint-disable react/jsx-props-no-spreading */

import React from "react";
import { useFormContext, Path, FieldValues, Controller } from "react-hook-form";

import { IconDefinition } from "@fortawesome/free-solid-svg-icons";
import clsx from "clsx";

import FormErrorMessage from "@/components/errors/FormErrorMessage";

import Dropzone from "../Dropzone/Dropzone";
import InputIcon from "./InputIcon";
import ReactDatePicker from "./ReactDatePicker";

type ReactHookInputProps<T extends FieldValues> =
  React.InputHTMLAttributes<HTMLInputElement> & {
    htmlFor?: string;
    label?: string;
    name: Path<T>;
    containerClassName?: string;
    icon?: IconDefinition;
    iconClassName?: string;
    onIconClick?: React.MouseEventHandler<SVGSVGElement>;
  };

const ReactHookInput = <T extends FieldValues>({
  htmlFor = "",
  label = "",
  name,
  type = "text",
  placeholder = "",
  className = "",
  onClick,
  containerClassName = "",
  icon,
  iconClassName = "",
  multiple,
  onIconClick = () => {},
  ...rest
}: ReactHookInputProps<T>) => {
  const {
    register,
    control,
    formState: { errors },
  } = useFormContext<T>();

  const error = errors[name];

  const inputContainerClassName = clsx(
    "flex flex-col gap-2",
    containerClassName,
  );
  const inputClassName = clsx(className, "react-hook-input");
  const inputIconClassName = clsx(
    iconClassName,
    "cursor-pointer absolute right-2 top-1/2 translate-y-[-50%]",
  );

  const inputIcon = type !== "date" && (
    <InputIcon
      icon={icon}
      className={inputIconClassName}
      onIconClick={onIconClick}
    />
  );

  let inputElement: null | React.ReactNode = null;

  if (type === "date")
    inputElement = (
      <ReactDatePicker<T>
        {...rest}
        name={name}
        type={type}
        placeholder={placeholder}
        inputClassName={inputClassName}
        icon={icon}
        inputIconClassName={inputIconClassName}
        onIconClick={onIconClick}
        control={control}
      />
    );
  else if (type === "file")
    inputElement = (
      <Controller
        name={name}
        control={control}
        render={({ field }) => (
          <Dropzone
            {...rest}
            key={field.value}
            type={type}
            placeholder={placeholder}
            className={className}
            onClick={onClick}
            onChange={(e) => {
              const value = multiple ? e.target.files : e.target.files?.[0];

              field.onChange(value);
            }}
          />
        )}
      />
    );
  else
    inputElement = (
      <input
        {...rest}
        type={type}
        placeholder={placeholder}
        className={inputClassName}
        onClick={onClick}
        {...register(name)}
      />
    );

  return (
    <div className={inputContainerClassName}>
      {label && htmlFor && (
        <label htmlFor={htmlFor} className="text-base font-medium">
          {label}
        </label>
      )}
      <div className="flex flex-col gap-1">
        <div className="relative">
          {inputIcon}
          {inputElement}
        </div>

        <FormErrorMessage<T> error={error} />
      </div>
    </div>
  );
};

ReactHookInput.displayName = "ReactHookInput";

export default ReactHookInput;
