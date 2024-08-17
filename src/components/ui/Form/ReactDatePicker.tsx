/* eslint-disable react/jsx-props-no-spreading */

import DatePicker from "react-datepicker";
import { Control, Controller, FieldValues, Path } from "react-hook-form";

import InputIcon, { InputIconProps } from "./InputIcon";

import "react-datepicker/dist/react-datepicker.css";

type ReactDatePickerProps<T extends FieldValues> =
  React.InputHTMLAttributes<HTMLInputElement> &
    InputIconProps & {
      inputIconClassName?: string;
      inputClassName?: string;
      control: Control<T>;
    };

const ReactDatePicker = <T extends FieldValues>({
  id,
  name,
  placeholder,
  disabled,
  readOnly,
  min,
  max,
  inputClassName = "",
  control,
  icon,
  inputIconClassName = "",
  onIconClick,
}: ReactDatePickerProps<T>) => (
  <Controller
    control={control}
    name={name as Path<T>}
    render={({ field }) => (
      <>
        <DatePicker
          {...field}
          id={id}
          wrapperClassName="w-full"
          showYearDropdown
          showMonthDropdown
          showPreviousMonths={false}
          monthsShown={1}
          selected={field.value as Date}
          onChange={(date) => field.onChange(date)}
          placeholderText={placeholder}
          className={inputClassName}
          disabled={disabled}
          readOnly={readOnly}
          minDate={min ? new Date(min) : undefined}
          maxDate={max ? new Date(max) : undefined}
          autoComplete="off"
        />

        <InputIcon
          icon={icon}
          className={inputIconClassName}
          onIconClick={onIconClick}
        />
      </>
    )}
  />
);

export default ReactDatePicker;
