import { createAsyncThunk } from "@reduxjs/toolkit";

import { createLocationRequest, fetchLocationsRequest } from "./services/api";

export const createLocation = createAsyncThunk(
  "locations/add",
  createLocationRequest,
);

export const fetchLocations = createAsyncThunk(
  "locations/fetchLocations",
  fetchLocationsRequest,
  {
    condition(_, { getState }) {
      const {
        location: { status },
      } = getState();

      if (status !== "idle") return false;
    },
  },
);
