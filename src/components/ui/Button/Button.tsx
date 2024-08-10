/* eslint-disable react/button-has-type */

import Loader, { LoaderProps } from "../Loader/Loader";

type ButtonVariants = "primary" | "secondary";
type ButtonSizes = "xs" | "sm" | "md" | "lg" | "xl";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  isLoading?: boolean;
  className?: string;
  variant: ButtonVariants;
  size: ButtonSizes;
  loaderConfig: LoaderProps;
};

const getButtonClassName = (definedClass: string): string =>
  `btn-${definedClass} `;

const Button = ({
  children,
  type,
  disabled,
  className = "",
  variant,
  isLoading = false,
  loaderConfig,
  size,
  onClick,
}: ButtonProps) => {
  let buttonClassName = `${className} btn `;

  if (isLoading)
    buttonClassName += "flex items-center gap-3 cursor-pointer-none ";

  const buttonVariant = getButtonClassName(variant);
  const buttonSize = getButtonClassName(size);

  buttonClassName += `${buttonVariant} ${buttonSize}`;

  const trimmedButtonClassName = buttonClassName.trim();

  const { size: loaderSize, variant: loaderVariant } = loaderConfig;

  return (
    <button
      type={type}
      disabled={disabled}
      onClick={onClick}
      className={trimmedButtonClassName}
    >
      {isLoading && <Loader variant={loaderVariant} size={loaderSize} />}
      {children}
    </button>
  );
};

export default Button;
