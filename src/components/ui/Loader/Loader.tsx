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
  fullPage?: boolean;
};

const getLoaderClassName = (definedClass: string): string =>
  `loader-${definedClass}`;

const getLoaderDisabledClassName = (
  variant: string,
  disabled: boolean,
): string =>
  disabled ? `loader-${variant}-${disabled ? "disabled" : ""}` : "";

const Loader = ({
  variant,
  size,
  disabled = false,
  fullPage = false,
}: LoaderProps) => {
  const loaderVariant = getLoaderClassName(variant);
  const loaderSize = getLoaderClassName(size);
  const loaderDisabledClassName = getLoaderDisabledClassName(variant, disabled);

  const loaderClassName = clsx(
    "loader",
    loaderSize,
    loaderVariant,
    loaderDisabledClassName,
  );

  const loaderContainerClassName = clsx({
    "flex h-96 w-full items-center justify-center": fullPage,
  });

  return (
    <div className={loaderContainerClassName}>
      <span className={loaderClassName} />
    </div>
  );
};

Loader.displayName = "Loader";

export default Loader;
