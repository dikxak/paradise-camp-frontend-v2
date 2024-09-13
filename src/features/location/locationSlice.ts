import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import { createLocationRequest } from "./services/api";
import { LocationState } from "./types";

const initialState: LocationState = {
  locations: [],
  status: "idle",
};

export const createLocation = createAsyncThunk(
  "location/add",
  createLocationRequest,
);

const locationSlice = createSlice({
  name: "location",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(createLocation.pending, (state) => {
        state.status = "pending";
      })
      .addCase(createLocation.fulfilled, (state) => {
        state.status = "succeeded";
      })
      .addCase(createLocation.rejected, (state) => {
        state.status = "rejected";
      });
  },
});

export default locationSlice.reducer;
