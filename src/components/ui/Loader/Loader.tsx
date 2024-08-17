export interface LoaderProps {
  variant: "primary" | "secondary";
  size: "xs" | "sm" | "md" | "lg" | "xl";
}

const getLoaderClassName = (definedClass: string): string =>
  `loader-${definedClass}`;

const Loader = ({ variant, size }: LoaderProps) => {
  const loaderVariant = getLoaderClassName(variant);
  const loaderSize = getLoaderClassName(size);

  const loaderClassName = `loader mt-1 ${loaderSize} ${loaderVariant}`;

  return <span className={loaderClassName} />;
};

export default Loader;
