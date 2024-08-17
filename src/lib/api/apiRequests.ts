import { AxiosInstance } from "axios";

import {
  authenticatedRequest,
  unauthenticatedRequest,
} from "./axiosInterceptors";

type RequestPayload = object;

// Generic Requests
const getRequest = <T>(request: AxiosInstance, URL: string): Promise<T> =>
  request.get(URL);

const postRequest = <T>(
  request: AxiosInstance,
  URL: string,
  payload: RequestPayload,
): Promise<T> => request.post(URL, payload);

const patchRequest = <T>(
  request: AxiosInstance,
  URL: string,
  payload: RequestPayload,
): Promise<T> => request.patch(URL, payload);

const putRequest = <T>(
  request: AxiosInstance,
  URL: string,
  payload: RequestPayload,
): Promise<T> => request.put(URL, payload);

const deleteRequest = <T>(request: AxiosInstance, URL: string): Promise<T> =>
  request.delete(URL);

// Authenticated Requests
export const authenticatedGetRequest = <T>(URL: string) =>
  getRequest<T>(authenticatedRequest, URL);

export const authenticatedPostRequest = <T>(
  URL: string,
  payload: RequestPayload,
) => postRequest<T>(authenticatedRequest, URL, payload);

export const authenticatedPatchRequest = <T>(
  URL: string,
  payload: RequestPayload,
) => patchRequest<T>(authenticatedRequest, URL, payload);

export const authenticatedPutRequest = <T>(
  URL: string,
  payload: RequestPayload,
) => putRequest<T>(authenticatedRequest, URL, payload);

export const authenticatedDeleteRequest = <T>(URL: string) =>
  deleteRequest<T>(authenticatedRequest, URL);

// Unauthenticated requests
export const unauthenticatedGetRequest = <T>(URL: string) =>
  getRequest<T>(unauthenticatedRequest, URL);

export const unauthenticatedPostRequest = <T>(
  URL: string,
  payload: RequestPayload,
) => postRequest<T>(unauthenticatedRequest, URL, payload);

export const unauthenticatedPatchRequest = <T>(
  URL: string,
  payload: RequestPayload,
) => patchRequest<T>(unauthenticatedRequest, URL, payload);

export const unauthenticatedPutRequest = <T>(
  URL: string,
  payload: RequestPayload,
) => putRequest<T>(unauthenticatedRequest, URL, payload);

export const unauthenticatedDeleteRequest = <T>(URL: string) =>
  deleteRequest<T>(unauthenticatedRequest, URL);
