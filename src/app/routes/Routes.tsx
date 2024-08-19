import { createBrowserRouter } from "react-router-dom";

import CheckLocalStorageValues from "@/components/utils/CheckLocalStorageValues";
import ScrollToTop from "@/components/utils/ScrollToTop";

import AppRoot from "../Root";
import authRoutes from "./auth/Auth";
import blogRoutes from "./blog/Blog";
import locationRoutes from "./location/Location";
import ProtectedRoute from "./ProtectedRoute";

// TODO:Remove after real implementation
// eslint-disable-next-line react-refresh/only-export-components
const WIPComponent = ({ pageTitle }: { pageTitle: string }) => {
  return (
    <div className="m-auto my-16 flex h-[31.25rem] w-1/2 flex-col items-center justify-center rounded-md bg-primary-50 p-10">
      <p className="mb-3 text-4xl">{pageTitle}</p>
      <span className="text-lg">Work In Progress</span>
    </div>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <ScrollToTop />
        <CheckLocalStorageValues />
        <AppRoot />
      </>
    ),
    children: [
      {
        path: "/landing",
        element: <WIPComponent pageTitle="Landing Page" />,
      },
      ...authRoutes,
    ],
  },
  {
    path: "/",
    element: (
      <ProtectedRoute>
        <ScrollToTop />
        <CheckLocalStorageValues />
        <AppRoot />
      </ProtectedRoute>
    ),
    children: [
      {
        path: "/home",
        element: <WIPComponent pageTitle="Home Page" />,
      },
      ...locationRoutes,
      ...blogRoutes,
    ],
  },
]);

export default router;
