/* eslint-disable react/jsx-props-no-spreading */

import { FieldValues, Path, useFormContext } from "react-hook-form";

import FormErrorMessage from "@/components/errors/FormErrorMessage";

type ReactHookTextareaProps<T extends FieldValues> =
  React.TextareaHTMLAttributes<HTMLTextAreaElement> & {
    htmlFor: string;
    label: string;
    name: Path<T>;
    containerClassName?: string;
  };

const ReactHookTextarea = <T extends FieldValues>({
  htmlFor,
  label,
  name,
  className = "",
  containerClassName = "",
  rows = 4,
  ...rest
}: ReactHookTextareaProps<T>) => {
  const {
    register,
    formState: { errors },
  } = useFormContext<T>();

  const error = errors[name];

  const textAreaContainerClassName =
    `flex flex-col gap-2 ${containerClassName}`.trim();
  const textAreaClassName = `${className} react-hook-input`.trim();

  return (
    <div className={textAreaContainerClassName}>
      <label htmlFor={htmlFor} className="text-base font-semibold xs:text-base">
        {label}
      </label>

      <div className="flex flex-col gap-1">
        <textarea
          {...rest}
          rows={rows}
          className={textAreaClassName}
          {...register(name)}
        />

        <FormErrorMessage<T> error={error} />
      </div>
    </div>
  );
};

export default ReactHookTextarea;
