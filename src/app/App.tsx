import { RouterProvider } from "react-router-dom";
import { ToastContainer } from "react-toastify";

import { loginStatusUpdated } from "@/features/auth/authSlice";

import { useAppDispatch } from "@/hooks/reduxHooks";

import router from "./routes/Routes";

import "react-toastify/dist/ReactToastify.css";
import "leaflet/dist/leaflet.css";

const App = () => {
  const dispatch = useAppDispatch();

  dispatch(loginStatusUpdated({ token: localStorage.getItem("jwtToken") }));

  return (
    <>
      <RouterProvider router={router} />
      <ToastContainer />
    </>
  );
};

export default App;
