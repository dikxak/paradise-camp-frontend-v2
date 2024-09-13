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

export interface LocationFetchResponse extends Location {
  imgUrl: string;
}

export interface LocationState {
  locations: LocationFetchResponse[] | [];
  status: ApiStatus;
}

export interface LocationCreateResponse {
  message: string;
}
