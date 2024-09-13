import { useTranslation } from "react-i18next";

import { yupResolver } from "@hookform/resolvers/yup";

import Container from "@/components/layout/Container";

import ReactHookFormProvider from "@/context/ReactHookFormProvider";

import AddLocationForm from "./components/AddLocationForm";
import GetCurrentLocationButton from "./components/GetCurrentLocationButton";
import { ADD_LOCATION_DEFAULT_FORM_VALUES } from "./constants/constants";
import locationValidationSchema from "./validationSchema";

export const AddLocation = () => {
  const { t } = useTranslation();

  return (
    <Container>
      <ReactHookFormProvider
        resolver={yupResolver(locationValidationSchema)}
        defaultValues={ADD_LOCATION_DEFAULT_FORM_VALUES}
      >
        <div className="px-9 py-12 shadow-lg">
          <div className="mb-12 flex items-center justify-between">
            <h2 className="rounded text-3xl font-semibold uppercase text-primary-900">
              {t("location.create.heading")}
            </h2>

            <GetCurrentLocationButton />
          </div>

          <AddLocationForm />
        </div>
      </ReactHookFormProvider>
    </Container>
  );
};

export default AddLocation;
