import { createBrowserRouter } from "react-router-dom";

import AppRoot from "../Root";
import authRoutes from "./auth/Auth";

const router = createBrowserRouter([
  {
    path: "/",
    element: <div>Hello World!</div>,
  },
  {
    path: "/",
    element: <AppRoot />,
    children: authRoutes,
  },
]);

export default router;
