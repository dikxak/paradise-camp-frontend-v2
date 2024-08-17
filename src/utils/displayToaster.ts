import { toast, Bounce, ToastOptions } from "react-toastify";

type ToasterType = "info" | "success" | "warning" | "error" | "default";

const displayToaster = (type: ToasterType, message: string) => {
  const toastObj: ToastOptions<unknown> = {
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
    transition: Bounce,
  };

  switch (type) {
    case "info":
      toast.info(message, toastObj);
      break;
    case "error":
      toast.error(message, toastObj);
      break;
    case "success":
      toast.success(message, toastObj);
      break;
    case "warning":
      toast.warn(message, toastObj);
      break;
    default:
      toast(message, toastObj);
      break;
  }
};

export default displayToaster;
