import getUrlWithId from "@/utils/getUrlWithId";

import {
  authenticatedDeleteRequest,
  authenticatedGetRequest,
  authenticatedPostRequest,
  authenticatedPutRequest,
} from "@/lib/api/apiRequests";

import {
  LocationCreateResponse,
  LocationFetchResponse,
  LocationResponse,
} from "../types";

export const URLS = {
  INDEX: "/spots/all",
  CREATE: "/spots/add",
  SHOW: "/spots/:id",
  SHOW_MY: "/spots/get/me",
  DELETE: "/spots/delete/:id",
  EDIT: "/spots/update/:id",
};

export const fetchLocationsRequest = async () => {
  const data = await authenticatedGetRequest<LocationFetchResponse>(URLS.INDEX);

  return data;
};

export const fetchSingleLocationRequest = async (id: string) => {
  const data = await authenticatedGetRequest<{ spotData: LocationResponse }>(
    getUrlWithId(URLS.SHOW, id),
  );

  return data.spotData;
};

export const fetchMyLocationsRequest = async () => {
  const data = await authenticatedGetRequest<{
    data: Omit<LocationResponse, "authorName">[];
  }>(URLS.SHOW_MY);

  return data.data;
};

export const deleteLocationRequest = async (id: string) => {
  const data = await authenticatedDeleteRequest<{ message: string }>(
    getUrlWithId(URLS.DELETE, id),
  );

  return data;
};

export const createLocationRequest = async (locationInfo: FormData) => {
  const data = await authenticatedPostRequest<LocationCreateResponse>(
    URLS.CREATE,
    locationInfo,
  );

  return data;
};

export const editLocationRequest = async (
  id: string,
  locationInfo: FormData,
) => {
  const data = await authenticatedPutRequest<{ message: string }>(
    getUrlWithId(URLS.EDIT, id),
    locationInfo,
  );

  return data;
};
