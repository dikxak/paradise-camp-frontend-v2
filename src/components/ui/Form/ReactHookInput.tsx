/* eslint-disable react/jsx-props-no-spreading */

import React from "react";
import { useFormContext, Path, FieldValues } from "react-hook-form";

import { IconDefinition } from "@fortawesome/free-solid-svg-icons";

import FormErrorMessage from "@/components/errors/FormErrorMessage";

import InputIcon from "./InputIcon";
import ReactDatePicker from "./ReactDatePicker";

type ReactHookInputProps<T extends FieldValues> =
  React.InputHTMLAttributes<HTMLInputElement> & {
    htmlFor: string;
    label: string;
    name: Path<T>;
    containerClassName?: string;
    icon?: IconDefinition;
    iconClassName?: string;
    onIconClick?: React.MouseEventHandler<SVGSVGElement>;
  };

const ReactHookInput = <T extends FieldValues>({
  id,
  htmlFor,
  label,
  name,
  type = "text",
  placeholder = "",
  min,
  max,
  disabled,
  className = "",
  readOnly,
  value,
  onClick,
  containerClassName = "",
  icon,
  iconClassName = "",
  onIconClick = () => {},
}: ReactHookInputProps<T>) => {
  const {
    register,
    control,
    formState: { errors },
  } = useFormContext<T>();

  const error = errors[name];

  const inputContainerClassName = `flex flex-col gap-2 ${containerClassName}`;
  const inputClassName = `${className} react-hook-input`;
  const inputIconClassName = `${iconClassName} cursor-pointer absolute right-2 top-1/2 translate-y-[-50%]`;

  const inputIcon = type !== "date" && (
    <InputIcon
      icon={icon}
      className={inputIconClassName}
      onIconClick={onIconClick}
    />
  );

  return (
    <div className={inputContainerClassName}>
      <label htmlFor={htmlFor} className="text-lg font-semibold xs:text-base">
        {label}
      </label>
      <div className="flex flex-col gap-1">
        <div className="relative">
          {type === "date" ? (
            <ReactDatePicker<T>
              name={name}
              id={id}
              type={type}
              placeholder={placeholder}
              min={min}
              max={max}
              inputClassName={inputClassName}
              icon={icon}
              inputIconClassName={inputIconClassName}
              onIconClick={onIconClick}
              disabled={disabled}
              readOnly={readOnly}
              control={control}
            />
          ) : (
            <input
              id={id}
              type={type}
              placeholder={placeholder}
              min={min}
              max={max}
              className={inputClassName}
              disabled={disabled}
              readOnly={readOnly}
              onClick={onClick}
              value={value}
              {...register(name)}
            />
          )}

          {inputIcon}
        </div>

        <FormErrorMessage<T> error={error} />
      </div>
    </div>
  );
};

export default ReactHookInput;
