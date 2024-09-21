import { createSlice } from "@reduxjs/toolkit";

import {
  failureReducer,
  pendingReducer,
  successReducer,
} from "@/utils/requestStateReducers";

import {
  createLocation,
  deleteLocation,
  fetchLocations,
  fetchMyLocations,
  fetchSingleLocation,
} from "./asyncThunks";
import { LocationState } from "./types";

const initialState: LocationState = {
  locations: [],
  myLocations: [],
  location: null,
  status: "idle",
};

const locationSlice = createSlice({
  name: "location",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(createLocation.pending, pendingReducer)
      .addCase(fetchLocations.pending, pendingReducer)
      .addCase(fetchSingleLocation.pending, pendingReducer)
      .addCase(fetchMyLocations.pending, pendingReducer)
      .addCase(deleteLocation.pending, pendingReducer)

      .addCase(createLocation.fulfilled, successReducer)
      .addCase(fetchLocations.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.locations = action.payload.data;
      })
      .addCase(fetchSingleLocation.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.location = action.payload;
      })
      .addCase(fetchMyLocations.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.myLocations = action.payload;
      })
      .addCase(deleteLocation.fulfilled, successReducer)

      .addCase(createLocation.rejected, failureReducer)
      .addCase(fetchLocations.rejected, failureReducer)
      .addCase(fetchMyLocations.rejected, failureReducer)
      .addCase(deleteLocation.rejected, failureReducer);
  },
});

export default locationSlice.reducer;
