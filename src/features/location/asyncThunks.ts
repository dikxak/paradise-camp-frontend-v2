import { createAsyncThunk } from "@reduxjs/toolkit";

import displayToaster from "@/utils/displayToaster";

import { createLocationRequest, fetchLocationsRequest } from "./services/api";

export const fetchLocations = createAsyncThunk(
  "locations/fetchLocations",
  fetchLocationsRequest,
);

export const createLocation = createAsyncThunk(
  "locations/add",
  async (arg: FormData, { dispatch }) => {
    const data = await createLocationRequest(arg);

    await dispatch(fetchLocations());

    displayToaster("success", data.message);

    return data;
  },
);
