import i18next from "i18next";

import displayToaster from "@/utils/displayToaster";

const { t } = i18next;

const getCurrentLocation = (
  onGeolocationSuccess: (lat: string, lng: string) => void,
) => {
  const handleGeolocationSuccess = (position: GeolocationPosition) => {
    const {
      coords: { latitude, longitude },
    } = position;

    onGeolocationSuccess(latitude.toString(), longitude.toString());
  };

  const handleGeolocationError = () => {
    displayToaster("error", t("geolocation.error"));
  };

  const geolocationOptions = {
    enableHighAccuracy: true,
    maximumAge: 30000,
    timeout: 27000,
  };

  if ("geolocation" in navigator) {
    navigator.geolocation.watchPosition(
      handleGeolocationSuccess,
      handleGeolocationError,
      geolocationOptions,
    );
  } else {
    displayToaster("error", t("geolocation.notAvailable"));
  }
};

export default getCurrentLocation;
