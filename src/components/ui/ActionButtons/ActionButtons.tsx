import { faPen, faTrash } from "@fortawesome/free-solid-svg-icons";

import Button from "../Button/Button";

export type ActionButtonsProps = {
  onEditClick: React.MouseEventHandler<HTMLButtonElement>;
  onDeleteClick: React.MouseEventHandler<HTMLButtonElement>;
};

const ActionButtons = ({ onEditClick, onDeleteClick }: ActionButtonsProps) => (
  <div className="flex items-center gap-4">
    <Button
      icon={faPen}
      size="xs"
      variant="success"
      title="Edit"
      onClick={onEditClick}
    />
    <Button
      icon={faTrash}
      size="xs"
      variant="danger"
      title="delete"
      onClick={onDeleteClick}
    />
  </div>
);

export default ActionButtons;
