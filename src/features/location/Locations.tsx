import { useEffect } from "react";
import { NavLink } from "react-router-dom";

import Container from "@/components/layout/Container";
import Loader from "@/components/ui/Loader/Loader";

import { useAppDispatch, useAppSelector } from "@/hooks/reduxHooks";

import truncateString from "@/utils/truncateString";

import { fetchLocations } from "./asyncThunks";

type LocationProps = {
  name: string;
  description: string;
  address: string;
  imageURL: string;
};

const Location = ({ name, description, address, imageURL }: LocationProps) => {
  return (
    <NavLink to="/">
      <div className="grid grid-cols-2 items-center gap-6 rounded-lg p-4 shadow-lg md:grid-cols-1 xs:grid-cols-1">
        <img
          src={imageURL}
          alt={name}
          className="aspect-3/2 w-full rounded-md"
        />

        <div className="flex flex-col gap-4 self-center">
          <h3 className="text-xl font-medium text-primary-900">{name}</h3>
          <p className="text-base text-gray-800">
            {truncateString(description)}
          </p>
          <span className="text-sm text-gray-700">{address}</span>
        </div>
      </div>
    </NavLink>
  );
};

export const Locations = () => {
  const dispatch = useAppDispatch();
  const { status, locations } = useAppSelector((state) => state.location);

  useEffect(() => {
    const getAllLocations = dispatch(fetchLocations());

    return () => {
      if (status === "pending") getAllLocations.abort();
    };
  }, [status, dispatch]);

  return (
    <Container>
      <div>
        <h2 className="mb-12 text-3xl font-semibold uppercase text-primary-900">
          Locations
        </h2>

        {status === "pending" && (
          <div className="flex h-96 w-full items-center justify-center">
            <Loader size="3xl" variant="primary" />
          </div>
        )}

        <div className="grid min-h-96 grid-cols-2 gap-10 sm:grid-cols-1 xs:grid-cols-1">
          {locations.map(
            ({ _id: id, name, description, address, imageURL }) => {
              return (
                <Location
                  key={id}
                  name={name}
                  description={description}
                  address={address}
                  imageURL={imageURL}
                />
              );
            },
          )}
        </div>
      </div>
    </Container>
  );
};

export default Locations;
