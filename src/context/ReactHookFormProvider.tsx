/* eslint-disable react/jsx-props-no-spreading */

import {
  FormProvider,
  Resolver,
  useForm,
  FieldValues,
  DefaultValues,
} from "react-hook-form";

type ReactHookFormProviderProps<T extends FieldValues> = {
  children: React.ReactNode;
  defaultValues: DefaultValues<T>;
  resolver: Resolver<T>;
};

const ReactHookFormProvider = <T extends FieldValues>({
  children,
  resolver,
  defaultValues,
}: ReactHookFormProviderProps<T>) => {
  const methods = useForm<T>({
    resolver,
    defaultValues,
    mode: "all",
  });

  return <FormProvider {...methods}>{children}</FormProvider>;
};

export default ReactHookFormProvider;
