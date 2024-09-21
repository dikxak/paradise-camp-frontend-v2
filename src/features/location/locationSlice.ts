import { createSlice } from "@reduxjs/toolkit";

import { failureReducer, pendingReducer } from "@/utils/requestStateReducers";

import {
  createLocation,
  fetchLocations,
  fetchSingleLocation,
} from "./asyncThunks";
import { LocationState } from "./types";

const initialState: LocationState = {
  locations: [],
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

      .addCase(createLocation.fulfilled, (state) => {
        state.status = "succeeded";
      })
      .addCase(fetchLocations.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.locations = action.payload.data;
      })
      .addCase(fetchSingleLocation.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.location = action.payload;
      })

      .addCase(createLocation.rejected, failureReducer)
      .addCase(fetchLocations.rejected, failureReducer);
  },
});

export default locationSlice.reducer;
