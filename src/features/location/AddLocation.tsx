import { useTranslation } from "react-i18next";

import { yupResolver } from "@hookform/resolvers/yup";

import ReactHookFormProvider from "@/context/ReactHookFormProvider";

import GetCurrentLocationButton from "./components/GetCurrentLocationButton";
import LocationForm from "./components/LocationForm";
import { ADD_LOCATION_DEFAULT_FORM_VALUES } from "./constants/constants";
import { addLocationValidationSchema } from "./validationSchema";

export const AddLocation = () => {
  const { t } = useTranslation();

  return (
    <ReactHookFormProvider
      resolver={yupResolver(addLocationValidationSchema)}
      defaultValues={ADD_LOCATION_DEFAULT_FORM_VALUES}
    >
      <div className="px-9 py-12 shadow-lg">
        <div className="mb-12 flex items-center justify-between">
          <h2 className="text-3xl font-semibold uppercase text-primary-900">
            {t("location.create.heading")}
          </h2>

          <GetCurrentLocationButton />
        </div>

        <LocationForm />
      </div>
    </ReactHookFormProvider>
  );
};

export default AddLocation;
