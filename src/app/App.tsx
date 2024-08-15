import { FormProvider, useForm } from "react-hook-form";
import { RouterProvider } from "react-router-dom";
import { ToastContainer } from "react-toastify";

import router from "./routes/Routes";

import "react-toastify/dist/ReactToastify.css";

const App = () => {
  const methods = useForm();

  return (
    // eslint-disable-next-line react/jsx-props-no-spreading
    <FormProvider {...methods}>
      <RouterProvider router={router} />
      <ToastContainer />
    </FormProvider>
  );
};

export default App;
