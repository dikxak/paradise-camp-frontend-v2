import { createSlice } from "@reduxjs/toolkit";

import { failureReducer, pendingReducer } from "@/utils/requestStateReducers";

import { createLocation, fetchLocations } from "./asyncThunks";
import { LocationResponse, LocationState } from "./types";

const initialState: LocationState = {
  locations: [],
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

      .addCase(createLocation.fulfilled, (state, action) => {
        if (state.locations.length > 0) {
          state.status = "succeeded";
          (state.locations as LocationResponse[]).push(action.payload.data);
        } else state.status = "idle";
      })
      .addCase(fetchLocations.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.locations = action.payload.data;
      })

      .addCase(createLocation.rejected, failureReducer)
      .addCase(fetchLocations.rejected, failureReducer);
  },
});

export default locationSlice.reducer;
