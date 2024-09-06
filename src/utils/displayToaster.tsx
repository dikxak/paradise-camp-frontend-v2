/* eslint-disable check-file/filename-naming-convention */

import { toast, Bounce, ToastOptions } from "react-toastify";

import ToasterContentContainer from "@/components/ui/ToasterContentContainer/ToasterContentContainer";

import TOASTER_TITLE from "@/constants/toasterTitle";

export type ToasterType = "info" | "success" | "warning" | "error" | "default";

const displayToaster = (
  type: ToasterType,
  description: string,
  title: string = "",
  autoClose: number = 5000,
) => {
  const toastConfig: ToastOptions<unknown> = {
    position: "top-right",
    autoClose,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
    transition: Bounce,
  };

  let toasterTitle = "";

  switch (type) {
    case "default":
      toasterTitle = title || TOASTER_TITLE.DEFAULT;

      toast(
        <ToasterContentContainer
          title={toasterTitle}
          description={description}
        />,
        toastConfig,
      );

      break;
    case "info":
      toasterTitle = title || TOASTER_TITLE.INFO;

      toast.info(
        <ToasterContentContainer
          title={toasterTitle}
          description={description}
        />,
        toastConfig,
      );

      break;
    case "error":
      toasterTitle = title || TOASTER_TITLE.ERROR;

      toast.error(
        <ToasterContentContainer
          title={toasterTitle}
          description={description}
        />,
        toastConfig,
      );

      break;
    case "success":
      toasterTitle = title || TOASTER_TITLE.SUCCESS;

      toast.success(
        <ToasterContentContainer
          title={toasterTitle}
          description={description}
        />,
        toastConfig,
      );

      break;
    case "warning":
      toasterTitle = title || TOASTER_TITLE.WARNING;

      toast.warn(
        <ToasterContentContainer
          title={toasterTitle}
          description={description}
        />,
        toastConfig,
      );

      break;
    default:
      toasterTitle = TOASTER_TITLE.DEFAULT;

      toast(
        <ToasterContentContainer
          title={toasterTitle}
          description={description}
        />,
        toastConfig,
      );

      break;
  }
};

export default displayToaster;
