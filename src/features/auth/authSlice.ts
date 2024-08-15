import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import { register } from "./services/api";
import { UserState } from "./types/authTypes";

const initialState: UserState = {
  user: null,
  status: "idle",
  isLoggedIn: false,
  token: "",
};

export const userRegister = createAsyncThunk("auth/signup", register);

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(userRegister.pending, (state) => {
        state.status = "pending";
      })
      .addCase(userRegister.fulfilled, (state) => {
        state.status = "succeeded";
      })
      .addCase(userRegister.rejected, (state) => {
        state.status = "rejected";
      });
  },
});

export default userSlice.reducer;
