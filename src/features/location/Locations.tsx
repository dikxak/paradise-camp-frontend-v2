import { useEffect } from "react";

import Loader from "@/components/ui/Loader/Loader";

import { useAppDispatch, useAppSelector } from "@/hooks/reduxHooks";

import { fetchLocations } from "./asyncThunks";
import LocationCard from "./components/LocationCard";

export const Locations = () => {
  const dispatch = useAppDispatch();
  const { status, locations } = useAppSelector((state) => state.location);

  useEffect(() => {
    let getAllLocations = null;

    if (status === "idle") getAllLocations = dispatch(fetchLocations());

    return () => {
      if (status === "pending") getAllLocations?.abort();
    };
  }, [dispatch, status]);

  return (
    <>
      <h2 className="mb-12 text-3xl font-semibold uppercase text-primary-900">
        Locations
      </h2>

      {status === "pending" && <Loader size="3xl" variant="primary" fullPage />}

      {locations.length > 0 && (
        <div className="grid min-h-96 grid-cols-2 gap-10 sm:grid-cols-1 xs:grid-cols-1">
          {locations.map(
            ({ _id: id, name, description, address, imageURL }) => (
              <LocationCard
                key={id}
                id={id}
                name={name}
                description={description}
                address={address}
                imageURL={imageURL}
              />
            ),
          )}
        </div>
      )}
    </>
  );
};

export default Locations;
