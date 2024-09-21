import { useFormContext } from "react-hook-form";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

import { faFloppyDisk } from "@fortawesome/free-solid-svg-icons";

import Button from "@/components/ui/Button/Button";
import ReactHookForm from "@/components/ui/Form/ReactHookForm";
import ReactHookInput from "@/components/ui/Form/ReactHookInput";
import ReactHookSelect from "@/components/ui/Form/ReactHookSelect";
import ReactHookTextarea from "@/components/ui/Form/ReactHookTextArea";
import UploadedImage from "@/components/ui/UploadedImage/UploadedImage";

import { useAppDispatch, useAppSelector } from "@/hooks/reduxHooks";

import { LOCATION } from "@/constants/routes";

import getUrlWithId from "@/utils/getUrlWithId";

import { createLocation, editLocation } from "../asyncThunks";
import { LOCATION_TYPES } from "../constants/constants";
import { LocationFormValues } from "../types";

type LocationFormProps = {
  locationId?: string;
  mode?: "add" | "edit";
};

const LocationForm = ({ mode = "add", locationId = "" }: LocationFormProps) => {
  const { t } = useTranslation();

  const navigate = useNavigate();

  const { watch, setValue, reset } = useFormContext<LocationFormValues>();
  const { img } = watch();

  const dispatch = useAppDispatch();
  const { status } = useAppSelector((state) => state.location);

  let imgSrc = "";
  if (img) imgSrc = URL.createObjectURL(img);

  const handleLocationCreate = async (data: LocationFormValues) => {
    const locationFormData = new FormData();

    Object.entries(data).forEach(([key, value]) => {
      locationFormData.append(key, value as string | Blob);
    });

    const resultAction = await dispatch(createLocation(locationFormData));

    if (createLocation.fulfilled.match(resultAction)) {
      reset();
      navigate(LOCATION.INDEX);
    }
  };

  const handleLocationEdit = async (data: LocationFormValues) => {
    const locationFormData = new FormData();

    Object.entries(data).forEach(([key, value]) => {
      locationFormData.append(key, value as string | Blob);
    });

    const resultAction = await dispatch(
      editLocation({ id: locationId, locationInfo: locationFormData }),
    );

    if (editLocation.fulfilled.match(resultAction)) {
      reset();
      navigate(getUrlWithId(LOCATION.SHOW_MY, locationId));
    }
  };

  const handleImageDelete = () => {
    setValue("img", null, { shouldValidate: true });

    URL.revokeObjectURL(imgSrc);
  };

  const handleSubmit = async (data: LocationFormValues) => {
    if (mode === "add") await handleLocationCreate(data);
    else await handleLocationEdit(data);
  };

  const isLoading = status === "pending";

  return (
    <ReactHookForm<LocationFormValues>
      onSubmit={handleSubmit}
      className="w-full"
    >
      <div className="grid grid-cols-3 gap-x-8 gap-y-4">
        <ReactHookInput
          id="name"
          htmlFor="name"
          name="name"
          label={t("location.label.name")}
          placeholder="Kanyam"
        />

        <ReactHookInput
          id="address"
          htmlFor="address"
          name="address"
          label={t("location.label.address")}
          placeholder="Kanyam,Ilam"
        />

        <ReactHookInput
          id="availableSpotNo"
          htmlFor="availableSpotNo"
          name="availableSpotNo"
          label={t("location.label.availableSpotNo")}
          placeholder="200"
          type="number"
        />

        <ReactHookSelect
          id="type"
          name="type"
          htmlFor="type"
          options={LOCATION_TYPES}
          label="Select Location Type"
          placeholder="Select type..."
        />

        <ReactHookInput
          id="latitude"
          htmlFor="latitude"
          name="latitude"
          label={t("location.label.latitude")}
          placeholder="27.6974"
          type="number"
          step="any"
        />

        <ReactHookInput
          id="longitude"
          htmlFor="longitude"
          name="longitude"
          label={t("location.label.longitude")}
          placeholder="85.3318"
          type="number"
          step="any"
        />

        <ReactHookInput
          id="phoneNo"
          htmlFor="phoneNo"
          name="phoneNo"
          label={t("location.label.phoneNo")}
          placeholder="9815000000"
        />

        <ReactHookInput
          id="email"
          htmlFor="email"
          name="email"
          label={t("location.label.email")}
          placeholder="info@kanyam.com.np"
          type="email"
        />

        <ReactHookInput
          id="price"
          htmlFor="price"
          name="price"
          label={t("location.label.price")}
          placeholder="2000"
          type="number"
        />

        <ReactHookTextarea
          id="description"
          htmlFor="description"
          name="description"
          label={t("location.label.description")}
          placeholder="Add location description..."
          containerClassName="col-span-3"
        />

        <ReactHookInput
          id="locationImg"
          htmlFor="locationImg"
          name="img"
          label={t("location.label.uploadLocationImg")}
          type="file"
          containerClassName="col-span-3"
          accept="image/jpg,image/png,image/jpeg"
        />

        <UploadedImage
          img={img}
          imgSrc={imgSrc}
          onImageDelete={handleImageDelete}
        />

        <Button
          variant="primary"
          type="submit"
          className="col-span-3 justify-self-end xs:col-span-1"
          size="lg"
          icon={faFloppyDisk}
          iconPosition="start"
          isLoading={isLoading}
          disabled={isLoading}
        >
          {mode === "add" ? "Save" : "Edit"} Location
        </Button>
      </div>
    </ReactHookForm>
  );
};

export default LocationForm;
