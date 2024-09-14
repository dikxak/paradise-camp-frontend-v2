import {
  authenticatedGetRequest,
  authenticatedPostRequest,
} from "@/lib/api/apiRequests";

import { LocationCreateResponse, LocationFetchResponse } from "../types";

export const URLS = {
  INDEX: "/spots/all",
  CREATE: "/spots/add",
};

export const fetchLocationsRequest = async () => {
  const data = await authenticatedGetRequest<LocationFetchResponse>(URLS.INDEX);

  return data;
};

export const createLocationRequest = async (locationInfo: FormData) => {
  const data = await authenticatedPostRequest<LocationCreateResponse>(
    URLS.CREATE,
    locationInfo,
  );

  return data;
};
