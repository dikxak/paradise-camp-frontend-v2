import { authenticatedPostRequest } from "@/lib/api/apiRequests";

import { LocationCreateResponse } from "../types";

export const URLS = {
  CREATE: "/spots/add",
};

export const createLocationRequest = async (locationInfo: FormData) => {
  const data = await authenticatedPostRequest<LocationCreateResponse>(
    URLS.CREATE,
    locationInfo,
  );

  return data;
};
