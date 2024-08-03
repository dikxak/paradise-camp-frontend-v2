import { configureStore, type Action } from "@reduxjs/toolkit";

export interface CounterState {
  value: number;
}

type ActionType = {
  type: string;
};

const initialActionType: ActionType = {
  type: "",
};

// An example slice reducer function that shows how a Redux reducer works inside.
// We'll replace this soon with real app logic.
function counterReducer(
  state: CounterState = { value: 0 },
  action: Action = initialActionType,
) {
  switch (action.type) {
    default: {
      return state;
    }
  }
}

const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});

// Infer the type of store
export type AppStore = typeof store;
// Infer the AppDispatch type from the store itself
export type AppDispatch = typeof store.dispatch;
// Infer the RootState type
export type RootState = ReturnType<typeof store.getState>;

export default store;
