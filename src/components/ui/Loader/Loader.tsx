import clsx from "clsx";

export type LoaderProps = {
  variant:
    | "primary"
    | "secondary"
    | "outlined"
    | "warning"
    | "success"
    | "danger";
  size: "xs" | "sm" | "md" | "lg" | "xl" | "2xl" | "3xl";
  disabled?: boolean;
};

const getLoaderClassName = (definedClass: string): string =>
  `loader-${definedClass}`;

const getLoaderDisabledClassName = (
  variant: string,
  disabled: boolean,
): string =>
  disabled ? `loader-${variant}-${disabled ? "disabled" : ""}` : "";

const Loader = ({ variant, size, disabled = false }: LoaderProps) => {
  const loaderVariant = getLoaderClassName(variant);
  const loaderSize = getLoaderClassName(size);
  const loaderDisabledClassName = getLoaderDisabledClassName(variant, disabled);

  const loaderClassName = clsx(
    "loader",
    loaderSize,
    loaderVariant,
    loaderDisabledClassName,
  );

  return <span className={loaderClassName} />;
};

Loader.displayName = "Loader";

export default Loader;
