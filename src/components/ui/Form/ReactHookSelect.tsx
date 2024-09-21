/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */

import { Controller, FieldValues, Path, useFormContext } from "react-hook-form";
import Select, {
  ControlProps,
  GroupBase,
  OptionProps,
  Props,
} from "react-select";

import clsx from "clsx";

import FormErrorMessage from "@/components/errors/FormErrorMessage";

export type SelectedItemType = {
  value: string;
  label: string;
};

type ReactHookSelectProps<
  T extends FieldValues,
  Option,
  IsMulti extends boolean = false,
  Group extends GroupBase<Option> = GroupBase<Option>,
> = Props<Option, IsMulti, Group> & {
  name: Path<T>;
  htmlFor?: string;
  label?: string;
  containerClassName?: string;
};

const getOverriddenSelectControlStyles = <
  Option,
  IsMulti extends boolean = false,
  Group extends GroupBase<Option> = GroupBase<Option>,
>(
  state: ControlProps<Option, IsMulti, Group>,
) => ({
  padding: "0.35rem 0.75rem 0.35rem 0rem",
  border: "0.0625rem solid #eeefe8",
  boxShadow: state.isFocused ? "0 0 0 0.25rem rgba(151, 158, 117, 0.25)" : "",
  "&:hover": {
    border: "0.0625rem solid #ccd5e0",
    boxShadow: "0 0 0 0.25rem rgba(151, 158, 117, 0.25)",
  },
  "&:disabled": {
    backgroundColor: "#ced4da",
  },
  backgroundColor: "#f8f9fa",
});

const getOverriddenOptionStyles = <
  Option,
  IsMulti extends boolean = false,
  Group extends GroupBase<Option> = GroupBase<Option>,
>(
  state: OptionProps<Option, IsMulti, Group>,
) => ({
  backgroundColor: state.isSelected ? "#626d30" : "",
  "&:hover": {
    backgroundColor: !state.isSelected ? "#eeefe8" : "",
  },
});

const ReactHookSelect = <
  T extends FieldValues,
  Option,
  IsMulti extends boolean = false,
  Group extends GroupBase<Option> = GroupBase<Option>,
>({
  id,
  name,
  htmlFor = "",
  label = "",
  containerClassName = "",
  options,
  isMulti,
  ...rest
}: ReactHookSelectProps<T, Option, IsMulti, Group>) => {
  const {
    control,
    formState: { errors },
  } = useFormContext<T>();

  const error = errors[name];

  const selectContainerClassName = clsx(
    "flex flex-col gap-2",
    containerClassName,
  );

  const selectLabel = label && (
    <label htmlFor={htmlFor} className="text-base font-medium xs:text-base">
      {label}
    </label>
  );

  const handleSelectChange = (
    option: any,
    onHookedSelectChange: (...event: any[]) => void,
  ) => {
    if (!option && !isMulti) onHookedSelectChange("");
    else if (!option && isMulti) onHookedSelectChange([]);
    else if (Array.isArray(option)) onHookedSelectChange(option);
    else onHookedSelectChange(option?.value);
  };

  return (
    <Controller
      control={control}
      name={name as Path<T>}
      render={({ field: { value, onChange: onHookedSelectChange } }) => (
        <div className={selectContainerClassName}>
          {selectLabel}
          <Select
            {...rest}
            inputId={id}
            options={options}
            value={
              options?.find(
                (option) => (option as any).value === value,
              ) as Option
            }
            onChange={(newOptionValue) =>
              handleSelectChange(newOptionValue, onHookedSelectChange)
            }
            styles={{
              control: (base, state) => ({
                ...base,
                ...getOverriddenSelectControlStyles(state),
              }),
              indicatorSeparator: (base) => ({ ...base, display: "none" }),
              option: (base, state) => ({
                ...base,
                ...getOverriddenOptionStyles(state),
              }),
            }}
            isClearable
          />
          <FormErrorMessage<T> error={error} />
        </div>
      )}
    />
  );
};

ReactHookSelect.displayName = "ReactHookSelect";

export default ReactHookSelect;
