import { ApiStatus } from "@/types";

type RequestStatus = {
  status: ApiStatus;
};

export const pendingReducer = <T extends RequestStatus>(state: T) => {
  state.status = "pending";
};

export const successReducer = <T extends RequestStatus>(state: T) => {
  state.status = "succeeded";
};

export const failureReducer = <T extends RequestStatus>(state: T) => {
  state.status = "rejected";
};
