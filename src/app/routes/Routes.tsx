import { createBrowserRouter } from "react-router-dom";

import authRoutes from "./auth/Auth";

const router = createBrowserRouter([
  {
    path: "/",
    element: <div>Hello World!</div>,
  },
  ...authRoutes,
]);

export default router;
