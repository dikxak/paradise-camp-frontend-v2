import axios, {
  AxiosError,
  AxiosResponse,
  InternalAxiosRequestConfig,
} from "axios";
import i18next from "i18next";

import displayToaster from "@/utils/displayToaster";

import getApiUrl from "@/config/apiUrl";

const BASE_URL = getApiUrl();

const HEADERS = {
  Accept: "application/json",
};

type ErrorResponseData = {
  message?: string;
};

export const unauthenticatedRequest = axios.create({
  baseURL: BASE_URL,
  timeout: 10000,
  headers: HEADERS,
});

export const authenticatedRequest = axios.create({
  baseURL: BASE_URL,
  timeout: 10000,
  headers: HEADERS,
});

const requestInterceptor = (config: InternalAxiosRequestConfig) => {
  const newConfig = { ...config };

  return newConfig;
};

const authRequestInterceptor = (config: InternalAxiosRequestConfig) => {
  const newConfig = { ...config };

  const token = localStorage.getItem("jwtToken");

  if (token) newConfig.headers.Authorization = `Bearer ${token}`;

  return newConfig;
};

const requestErrorInterceptor = (error: AxiosError) => Promise.reject(error);

const responseInterceptor = <T>(response: AxiosResponse<T>): T => response.data;

const responseErrorInterceptor = (error: AxiosError<ErrorResponseData>) => {
  const { t } = i18next;

  const message = error.response?.data?.message || error.message;

  if (error.code === "ECONNABORTED") {
    displayToaster("error", t("requestError.timedOut"));

    throw new Error(
      "Request took too long. Please check your network or try again later.",
    );
  }

  if (message) displayToaster("error", message);

  if (error.response?.status === 401) {
    const searchParams = new URLSearchParams();
    const redirectTo = searchParams.get("redirectTo") || "/";

    window.location.href = `/auth/login?redirectTo=${redirectTo}`;
    localStorage.clear();
  }

  return Promise.reject(error);
};

authenticatedRequest.interceptors.request.use(
  authRequestInterceptor,
  requestErrorInterceptor,
);

authenticatedRequest.interceptors.response.use(
  responseInterceptor,
  responseErrorInterceptor,
);

unauthenticatedRequest.interceptors.request.use(
  requestInterceptor,
  requestErrorInterceptor,
);

unauthenticatedRequest.interceptors.response.use(
  responseInterceptor,
  responseErrorInterceptor,
);
