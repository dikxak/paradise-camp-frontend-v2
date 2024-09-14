/* eslint-disable check-file/filename-naming-convention */

import {
  AsyncThunkOptions,
  AsyncThunkPayloadCreator,
  AsyncThunk,
} from "@reduxjs/toolkit";

import { AppDispatch, RootState } from "@/lib/redux/store";

declare module "@reduxjs/toolkit" {
  type AsyncThunkConfig = {
    state?: unknown;
    dispatch?: AppDispatch;
    extra?: unknown;
    rejectValue?: unknown;
    serializedErrorType?: unknown;
  };

  function createAsyncThunk<
    Returned,
    ThunkArg = void,
    ThunkApiConfig extends AsyncThunkConfig = { state: RootState },
  >(
    typePrefix: string,
    payloadCreator: AsyncThunkPayloadCreator<
      Returned,
      ThunkArg,
      ThunkApiConfig
    >,
    options?: AsyncThunkOptions<ThunkArg, ThunkApiConfig>,
  ): AsyncThunk<Returned, ThunkArg, ThunkApiConfig>;
}

export default store;
