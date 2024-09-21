import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";

import {
  pendingReducer,
  successReducer,
  failureReducer,
} from "@/utils/requestStateReducers";

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
type UserInformationUpdate = { userName: string | null; userId: string | null };

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
    userInformationUpdated(
      state,
      action: PayloadAction<UserInformationUpdate>,
    ) {
      const { userId, userName } = action.payload;

      state.userId = userId || "";
      state.userName = userName || "";
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(userRegister.pending, pendingReducer)
      .addCase(userLogin.pending, pendingReducer)

      .addCase(userRegister.fulfilled, successReducer)
      .addCase(userLogin.fulfilled, (_, action) => ({
        ...action.payload,
        status: "succeeded",
        isLoggedIn: true,
      }))

      .addCase(userRegister.rejected, failureReducer)
      .addCase(userLogin.rejected, failureReducer);
  },
});

export const { loginStatusUpdated, userInformationUpdated } = userSlice.actions;

export default userSlice.reducer;
