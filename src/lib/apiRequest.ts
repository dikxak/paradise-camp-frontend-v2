import axios, {
  AxiosError,
  AxiosResponse,
  InternalAxiosRequestConfig,
} from "axios";

import getApiUrl from "@/config/apiUrl";

const BASE_URL = getApiUrl();

const HEADERS = {
  Accept: "application/json",
};

const baseRequest = axios.create({
  baseURL: BASE_URL,
  timeout: 10000,
  headers: HEADERS,
});

type ErrorResponseData = {
  message?: string;
};

export const unauthenticatedRequest = baseRequest;

export const authenticatedRequest = baseRequest;

const authRequestInterceptor = (config: InternalAxiosRequestConfig) => {
  const newConfig = { ...config };

  const token = localStorage.getItem("jwtToken");

  if (token) newConfig.headers.Authorization = `Bearer ${token}`;

  return newConfig;
};

const authRequestErrorInterceptor = (error: AxiosError) =>
  Promise.reject(error);

const authResponseInterceptor = <T>(response: AxiosResponse<T>): T =>
  response.data;

const authResponseErrorInterceptor = (error: AxiosError<ErrorResponseData>) => {
  const message = error.response?.data?.message || error.message;

  // TODO: Implement error toaster by sending error message

  if (error.response?.status === 401) {
    const searchParams = new URLSearchParams();
    const redirectTo = searchParams.get("redirectTo") || "/";

    window.location.href = `/auth/login?redirectTo=${redirectTo}`;
  }

  return Promise.reject(error);
};

authenticatedRequest.interceptors.request.use(
  authRequestInterceptor,
  authRequestErrorInterceptor,
);

authenticatedRequest.interceptors.response.use(
  authResponseInterceptor,
  authResponseErrorInterceptor,
);
