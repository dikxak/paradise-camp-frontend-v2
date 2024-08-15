import { configureStore } from "@reduxjs/toolkit";

import userReducer from "@/features/auth/authSlice";

const store = configureStore({
  reducer: {
    user: userReducer,
  },
});

// Infer the type of store
export type AppStore = typeof store;
// Infer the AppDispatch type from the store itself
export type AppDispatch = typeof store.dispatch;
// Infer the RootState type
export type RootState = ReturnType<typeof store.getState>;

export default store;
