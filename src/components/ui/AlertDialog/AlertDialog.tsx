import { faTrash } from "@fortawesome/free-solid-svg-icons";

import Button from "../Button/Button";
import ReactModal from "../ReactModal/ReactModal";

type AlertDialogProps = {
  isOpen: boolean;
  title: string;
  description: string;
  destructiveButtonName?: string;
  isLoading: boolean;
  onDestructiveAction: () => void;
  onDialogClose: () => void;
};

const AlertDialog = ({
  isOpen,
  title,
  description,
  destructiveButtonName = "Delete",
  isLoading,
  onDestructiveAction,
  onDialogClose,
}: AlertDialogProps) => (
  <ReactModal isOpen={isOpen} maxWidth="50%" isCloseIconVisible={false}>
    <h2 className="mb-6 mt-1 text-3xl font-medium tracking-tight xs:text-2xl">
      {title}
    </h2>

    <p className="mb-6 text-base xs:text-sm">{description}</p>

    <div className="flex items-center justify-end gap-3">
      <Button size="md" onClick={onDialogClose} disabled={isLoading}>
        Cancel
      </Button>
      <Button
        size="md"
        variant="danger"
        onClick={onDestructiveAction}
        isLoading={isLoading}
        icon={faTrash}
        iconPosition="end"
      >
        {destructiveButtonName}
      </Button>
    </div>
  </ReactModal>
);

AlertDialog.displayName = "AlertDialog";

export default AlertDialog;
