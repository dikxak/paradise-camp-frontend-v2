import { RouteObject } from "react-router-dom";

import { LOCATION } from "@/constants/routes";

const locationRoutes: RouteObject[] = [
  {
    path: LOCATION.INDEX,
    lazy: async () => {
      const { Locations } = await import("@/features/location/Locations");

      return { Component: Locations };
    },
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
    lazy: async () => {
      const { EditLocation } = await import("@/features/location/EditLocation");

      return { Component: EditLocation };
    },
  },
  {
    path: LOCATION.SHOW,
    lazy: async () => {
      const { LocationDetail } = await import(
        "@/features/location/LocationDetail"
      );

      return { Component: LocationDetail };
    },
  },
  {
    path: LOCATION.SHOW_MY,
    lazy: async () => {
      const { MyLocation } = await import("@/features/location/MyLocation");

      return { Component: MyLocation };
    },
  },
];

export default locationRoutes;
