/* eslint-disable react/button-has-type */
/* eslint-disable react/jsx-props-no-spreading */

import { IconDefinition } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import clsx from "clsx";

import Loader from "../Loader/Loader";

type ButtonSizes = "xs" | "sm" | "md" | "lg" | "xl";
type ButtonVariants =
  | "primary"
  | "secondary"
  | "outlined"
  | "warning"
  | "success"
  | "danger";

// This type enforces the rule that the component will receive icon prop when isLoading prop is sent.
type ButtonLoadingProps =
  | {
      isLoading?: undefined;
      icon?: never;
      iconPosition?: never;
    }
  | {
      isLoading?: boolean;
      icon: IconDefinition;
      iconPosition?: "start" | "end";
    };

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> &
  ButtonLoadingProps & {
    variant?: ButtonVariants;
    className?: string;
    size?: ButtonSizes;
  };

const getButtonClassName = (definedProperty: string): string =>
  `btn-${definedProperty} `;

const Button = ({
  children,
  type = "button",
  disabled = false,
  className = "",
  variant = "primary",
  size = "sm",
  icon,
  isLoading,
  iconPosition = "start",
  onClick,
  ...rest
}: ButtonProps) => {
  const buttonVariant = getButtonClassName(variant).trim();
  const buttonSize = getButtonClassName(size);

  const buttonClassName = clsx(
    "btn flex gap-2 items-center",
    className,
    buttonVariant,
    buttonSize,
  );

  let iconClassName: string = "";

  if (icon && !isLoading) {
    iconClassName = clsx({
      "text-base": size === "xs",
      "text-lg xs:text-base": size === "sm",
      "text-2xl xs:text-lg": size !== "xs",
    });
  }

  const buttonIcon: React.ReactNode = isLoading ? (
    <Loader size={size} variant={variant} disabled={disabled} />
  ) : (
    <FontAwesomeIcon icon={icon as IconDefinition} className={iconClassName} />
  );

  return (
    <button
      {...rest}
      type={type}
      disabled={disabled}
      onClick={onClick}
      className={buttonClassName}
    >
      {iconPosition === "start" && buttonIcon}

      {children}

      {iconPosition === "end" && buttonIcon}
    </button>
  );
};

Button.displayName = "Button";

export default Button;
