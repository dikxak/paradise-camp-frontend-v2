import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";

import { register, login } from "./services/api";
import { UserState } from "./types/authTypes";

const initialState: UserState = {
  status: "idle",
  isLoggedIn: false,
  token: "",
  userId: "",
  userName: "",
};

type LoggedInStatusUpdate = { token: string | null };

export const userRegister = createAsyncThunk("auth/signup", register);
export const userLogin = createAsyncThunk("auth/login", login);

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    loginStatusUpdated(state, action: PayloadAction<LoggedInStatusUpdate>) {
      const { token } = action.payload;

      if (token) state.isLoggedIn = true;
      else state.isLoggedIn = false;
    },
  },
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

export const { loginStatusUpdated } = userSlice.actions;

export default userSlice.reducer;
