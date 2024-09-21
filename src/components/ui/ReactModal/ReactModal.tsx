import Modal from "react-modal";

import { faCircleXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import clsx from "clsx";

Modal.setAppElement("#root");

type ReactModalProps = {
  children: React.ReactNode;
  isOpen: boolean;
  maxWidth?: string;
  title?: string;
  description?: string;
  contentLabel?: string;
  isCloseIconVisible?: boolean;
  onModalClose?: () => void;
};

const ReactModal = ({
  children,
  isOpen = false,
  maxWidth = "",
  title = "",
  description = "",
  contentLabel = "",
  isCloseIconVisible = true,
  onModalClose = () => {},
}: ReactModalProps) => {
  const titleClassName = clsx("mt-1 text-3xl font-medium tracking-tight", {
    "mb-8": !description,
    "mb-3": description,
  });

  return (
    <div>
      <Modal
        isOpen={isOpen}
        onRequestClose={onModalClose}
        contentLabel={contentLabel}
        style={{
          content: {
            top: "50%",
            left: "50%",
            right: "auto",
            bottom: "auto",
            marginTop: "2rem",
            marginBottom: "2rem",
            marginRight: "-50%",
            transform: "translate(-50%, -50%)",
            padding: "1.75rem",
            maxHeight: "100vh",
            overflowY: "auto",
            maxWidth: maxWidth || "80rem",
          },
          overlay: {
            backgroundColor: "rgba(0, 0, 0, 0.75)",
            overflowY: "auto",
            zIndex: 20,
          },
        }}
      >
        {title && <h2 className={titleClassName}>{title}</h2>}
        {description && <p className="mb-8 text-base">{description}</p>}

        {children}

        {isCloseIconVisible && (
          <button
            type="button"
            title="Close"
            onClick={onModalClose}
            aria-label="Close"
            className="absolute right-3 top-3 flex h-6 w-6 appearance-none items-center justify-center rounded-full focus:shadow-[0_0_0_0.25rem_rgba(228,38,38,0.25)] focus:outline-none"
          >
            <FontAwesomeIcon
              icon={faCircleXmark}
              className="text-2xl text-red-600"
            />
          </button>
        )}
      </Modal>
    </div>
  );
};

ReactModal.displayName = "ReactModal";

export default ReactModal;
