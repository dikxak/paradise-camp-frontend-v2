/* eslint-disable import/prefer-default-export */

import { RootState } from "@/lib/redux/store";

export const selectIsLoggedIn = (state: RootState) => state.user.isLoggedIn;
export const selectUserName = (state: RootState) => state.user.userName;
