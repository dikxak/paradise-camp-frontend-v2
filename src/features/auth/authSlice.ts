import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import { register, login } from "./services/api";
import { UserState } from "./types/authTypes";

const initialState: UserState = {
  status: "idle",
  isLoggedIn: false,
  token: "",
  userId: "",
  userName: "",
};

export const userRegister = createAsyncThunk("auth/signup", register);
export const userLogin = createAsyncThunk("auth/login", login);

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
      })
      .addCase(userLogin.pending, (state) => {
        state.status = "pending";
      })
      .addCase(userLogin.fulfilled, (_, action) => ({
        ...action.payload,
        status: "succeeded",
        isLoggedIn: true,
      }))
      .addCase(userLogin.rejected, (state) => {
        state.status = "rejected";
      });
  },
});

export default userSlice.reducer;
