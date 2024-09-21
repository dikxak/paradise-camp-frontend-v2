import type { LocationFormValues, LocationType } from "../types";

export const LOCATION_TYPES: LocationType[] = [
  { value: "picnic", label: "Picnic" },
  { value: "camping", label: "Camping" },
];

export const ADD_LOCATION_DEFAULT_FORM_VALUES: LocationFormValues = {
  name: "",
  address: "",
  availableSpotNo: "",
  type: "",
  latitude: "",
  longitude: "",
  phoneNo: "",
  email: "",
  price: "",
  description: "",
  img: null,
};

export const ADD_REVIEW_DEFAULT_FORM_VALUE = {
  review: "",
};
