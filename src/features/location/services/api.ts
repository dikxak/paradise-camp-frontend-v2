import getUrlWithId from "@/utils/getUrlWithId";

import {
  authenticatedGetRequest,
  authenticatedPostRequest,
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

export const createLocationRequest = async (locationInfo: FormData) => {
  const data = await authenticatedPostRequest<LocationCreateResponse>(
    URLS.CREATE,
    locationInfo,
  );

  return data;
};
