import { createAsyncThunk } from "@reduxjs/toolkit";

import displayToaster from "@/utils/displayToaster";

import {
  createLocationRequest,
  fetchLocationsRequest,
  fetchSingleLocationRequest,
} from "./services/api";
import { LocationState } from "./types";

export const fetchLocations = createAsyncThunk(
  "locations/fetchLocations",
  fetchLocationsRequest,
);

export const fetchSingleLocation = createAsyncThunk(
  "locations/fetchSingleLocation",
  async (arg: string, { dispatch, getState }) => {
    const data = await fetchSingleLocationRequest(arg);

    const { locations } = getState().location as LocationState;

    // Fetch locations data if user directly visits single
    // location page
    if (locations.length === 0) await dispatch(fetchLocations());

    return data;
  },
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
