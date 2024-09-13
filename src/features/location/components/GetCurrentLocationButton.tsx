import { useFormContext } from "react-hook-form";
import { useTranslation } from "react-i18next";

import { faLocation } from "@fortawesome/free-solid-svg-icons";

import Button from "@/components/ui/Button/Button";

import { Location } from "../types";
import getCurrentLocation from "../utils/getCurrentLocation";

const GetCurrentLocationButton = () => {
  const { t } = useTranslation();

  const { setValue } = useFormContext<Location>();

  const handleGeolocationSuccess = (latitude: string, longitude: string) => {
    setValue("latitude", latitude, {
      shouldValidate: true,
    });

    setValue("longitude", longitude, {
      shouldValidate: true,
    });
  };

  const handleGetCurrentLocation = () => {
    getCurrentLocation(handleGeolocationSuccess);
  };

  return (
    <Button
      size="md"
      variant="secondary"
      onClick={handleGetCurrentLocation}
      icon={faLocation}
    >
      {t("location.button.getCurrentLocation")}
    </Button>
  );
};

export default GetCurrentLocationButton;
