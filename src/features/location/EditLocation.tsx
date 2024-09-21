import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useParams } from "react-router-dom";

import { yupResolver } from "@hookform/resolvers/yup";

import Loader from "@/components/ui/Loader/Loader";

import ReactHookFormProvider from "@/context/ReactHookFormProvider";

import { useAppDispatch, useAppSelector } from "@/hooks/reduxHooks";

import { fetchSingleLocation } from "./asyncThunks";
import GetCurrentLocationButton from "./components/GetCurrentLocationButton";
import LocationForm from "./components/LocationForm";
import { LocationFormValues } from "./types";
import { editLocationValidationSchema } from "./validationSchema";

export const EditLocation = () => {
  const { t } = useTranslation();

  const { id } = useParams();

  const dispatch = useAppDispatch();
  const { location, status } = useAppSelector((state) => state.location);

  useEffect(() => {
    const getSingleLocation = dispatch(fetchSingleLocation(id as string));

    return () => {
      getSingleLocation?.abort();
    };
  }, [id, dispatch]);

  if (status === "pending")
    return <Loader size="3xl" variant="primary" fullPage />;

  return (
    location && (
      <ReactHookFormProvider
        resolver={yupResolver(editLocationValidationSchema)}
        defaultValues={location as unknown as LocationFormValues}
      >
        <div className="px-9 py-12 shadow-lg">
          <div className="mb-12 flex items-center justify-between">
            <h2 className="text-3xl font-semibold uppercase text-primary-900">
              {t("location.edit.heading")}
            </h2>

            <GetCurrentLocationButton />
          </div>

          <LocationForm mode="edit" locationId={id} />
        </div>
      </ReactHookFormProvider>
    )
  );
};

export default EditLocation;
