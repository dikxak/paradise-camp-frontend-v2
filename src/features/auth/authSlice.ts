import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import { unauthenticatedPostRequest } from "@/lib/api/apiRequests";

import { User } from "./types/formValues";

type UserInfo = Pick<
  User,
  "email" | "firstName" | "lastName" | "dateOfBirth" | "phoneNo"
>;

export interface UserState {
  user: UserInfo | null;
  isLoggedIn: boolean;
  token: string;
  status: "idle" | "pending" | "succeeded" | "rejected";
}

const initialState: UserState = {
  user: null,
  status: "idle",
  isLoggedIn: false,
  token: "",
};

export const signup = createAsyncThunk(
  "auth/signup",
  async (userInfo: User) => {
    const response = await unauthenticatedPostRequest<UserInfo>(
      "/users/register",
      userInfo,
    );

    return response.data;
  },
);

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(signup.pending, (state) => {
        state.status = "pending";
      })
      .addCase(signup.fulfilled, (state) => {
        state.status = "succeeded";
      })
      .addCase(signup.rejected, (state) => {
        state.status = "rejected";
      });
  },
});

export default userSlice.reducer;
