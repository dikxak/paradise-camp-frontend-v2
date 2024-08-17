import { IconDefinition } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export type InputIconProps = {
  icon?: IconDefinition;
  className?: string;
  onIconClick?: React.MouseEventHandler<SVGSVGElement>;
};

const InputIcon = ({
  icon,
  className = "",
  onIconClick = () => {},
}: InputIconProps) => {
  if (!icon) return null;

  return (
    <FontAwesomeIcon icon={icon} onClick={onIconClick} className={className} />
  );
};

export default InputIcon;
