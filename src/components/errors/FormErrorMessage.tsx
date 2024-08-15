import { FieldErrors, FieldValues, Path } from "react-hook-form";

interface FormErrorMessageProps<T extends FieldValues> {
  error: FieldErrors<T>[(string | undefined) & Path<T>];
}

const FormErrorMessage = <T extends FieldValues>({
  error,
}: FormErrorMessageProps<T>) => (
  <span className="h-5 text-sm text-red-400 xs:text-xs">
    {error && typeof error?.message === "string" && error?.message}
  </span>
);

export default FormErrorMessage;
