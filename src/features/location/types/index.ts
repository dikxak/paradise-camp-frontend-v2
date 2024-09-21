import { ApiStatus } from "@/types";

export type LocationType = {
  value: string;
  label: string;
};

export interface Location {
  name: string;
  address: string;
  availableSpotNo: string;
  type: string;
  latitude: string;
  longitude: string;
  phoneNo: string;
  email: string;
  price: string;
  description: string;
}

export interface LocationFormValues extends Location {
  img: File | null;
}

export interface LocationResponse extends Location {
  _id: string;
  imageURL: string;
  userId: string;
  authorName: string;
}

export interface LocationFetchResponse {
  data: LocationResponse[] | [];
}

export interface LocationState {
  locations: LocationResponse[] | [];
  myLocations: Omit<LocationResponse, "authorName">[] | [];
  location: LocationResponse | null;
  status: ApiStatus;
}

export interface LocationCreateResponse {
  message: string;
  data: LocationResponse;
}
