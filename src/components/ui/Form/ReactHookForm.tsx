import { SubmitHandler, FieldValues, useFormContext } from "react-hook-form";

type ReactHookFormProps<T extends FieldValues> = {
  children: React.ReactNode;
  className?: string;
  onSubmit: SubmitHandler<T>;
};

const ReactHookForm = <T extends FieldValues>({
  children,
  className = "",
  onSubmit,
}: ReactHookFormProps<T>) => {
  const { handleSubmit } = useFormContext<T>();

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={className}>
      {children}
    </form>
  );
};

export default ReactHookForm;
