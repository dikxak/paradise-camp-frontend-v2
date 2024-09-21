import type { LocationFormValues, LocationType } from "../types";

export const LOCATION_TYPES: LocationType[] = [
  { value: "Picnic", label: "Picnic" },
  { value: "Camping", label: "Camping" },
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
