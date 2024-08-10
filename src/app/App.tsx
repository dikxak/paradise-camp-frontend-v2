import { FormProvider, useForm } from "react-hook-form";
import { RouterProvider } from "react-router-dom";

import router from "./routes/Routes";

const App = () => {
  const methods = useForm();

  return (
    // eslint-disable-next-line react/jsx-props-no-spreading
    <FormProvider {...methods}>
      <RouterProvider router={router} />
    </FormProvider>
  );
};

export default App;
