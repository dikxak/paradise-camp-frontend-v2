import { AxiosInstance, AxiosResponse } from "axios";

import {
  authenticatedRequest,
  unauthenticatedRequest,
} from "./axiosInterceptors";

type RequestPayload = object;

const getRequest = async (request: AxiosInstance, URL: string) => {
  const response = await request.get(`/${URL}`);

  return response;
};

const postRequest = async <T>(
  request: AxiosInstance,
  URL: string,
  payload: RequestPayload,
): Promise<AxiosResponse<T>> => {
  const response = await request.post(URL, payload);

  return response;
};

const patchRequest = async (
  request: AxiosInstance,
  URL: string,
  payload: RequestPayload,
) => {
  const response = await request.patch(`/${URL}`, payload);

  return response;
};

const putRequest = async (
  request: AxiosInstance,
  URL: string,
  payload: RequestPayload,
) => {
  const response = await request.put(`/${URL}`, payload);

  return response;
};

const deleteRequest = async (request: AxiosInstance, URL: string) => {
  const response = await request.delete(`/${URL}`);

  return response;
};

export const authenticatedGetRequest = (URL: string) =>
  getRequest(authenticatedRequest, URL);

export const authenticatedPostRequest = (
  URL: string,
  payload: RequestPayload,
) => postRequest(authenticatedRequest, URL, payload);

export const authenticatedPatchRequest = (
  URL: string,
  payload: RequestPayload,
) => patchRequest(authenticatedRequest, URL, payload);

export const authenticatedPutRequest = (URL: string, payload: RequestPayload) =>
  putRequest(authenticatedRequest, URL, payload);

export const authenticatedDeleteRequest = (URL: string) =>
  deleteRequest(authenticatedRequest, URL);

export const unauthenticatedGetRequest = (URL: string) =>
  getRequest(unauthenticatedRequest, URL);

export const unauthenticatedPostRequest = <T>(
  URL: string,
  payload: RequestPayload,
): Promise<AxiosResponse<T>> =>
  postRequest<T>(unauthenticatedRequest, URL, payload);

export const unauthenticatedPatchRequest = (
  URL: string,
  payload: RequestPayload,
) => patchRequest(unauthenticatedRequest, URL, payload);

export const unauthenticatedPutRequest = (
  URL: string,
  payload: RequestPayload,
) => putRequest(unauthenticatedRequest, URL, payload);

export const unauthenticatedDeleteRequest = (URL: string) =>
  deleteRequest(unauthenticatedRequest, URL);
