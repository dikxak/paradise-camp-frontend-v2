import { RouteObject } from "react-router-dom";

import { LOCATION } from "@/constants/routes";

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

const locationRoutes: RouteObject[] = [
  {
    path: LOCATION.INDEX,
    element: <WIPComponent pageTitle="All Locations" />,
  },
  {
    path: LOCATION.CREATE,
    lazy: async () => {
      const { AddLocation } = await import("@/features/location/AddLocation");

      return { Component: AddLocation };
    },
  },
  {
    path: LOCATION.EDIT,
    element: <WIPComponent pageTitle="Edit Location" />,
  },
  {
    path: LOCATION.SHOW,
    element: <WIPComponent pageTitle="View Location" />,
  },
];

export default locationRoutes;
