import { useEffect } from "react";
import { useParams } from "react-router-dom";

import {
  faCheckCircle,
  faEnvelope,
  faLocationDot,
  faPhone,
  faUser,
  IconDefinition,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import Loader from "@/components/ui/Loader/Loader";

import { useAppDispatch, useAppSelector } from "@/hooks/reduxHooks";

import { fetchSingleLocation } from "./asyncThunks";
import LocationMap from "./components/LocationMap";

const LocationInfo = ({
  info,
  icon,
}: {
  info: string | number;
  icon: IconDefinition;
}) => (
  <li className="flex items-center gap-3 border-b-[0.0625rem] border-primary-100 py-2">
    <FontAwesomeIcon icon={icon} className="text-primary-700" />
    <span>{info}</span>
  </li>
);

const LocationDetail = () => {
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
      <div className="grid grid-cols-2 gap-8">
        <div className="flex flex-col gap-6 rounded px-6 py-5 shadow-md">
          <img src={location.imageURL} alt={location.name} />

          <div className="flex flex-col gap-3">
            <h2 className="text-4xl font-semibold text-gray-800">
              {location.name}
            </h2>
            <span className="text-gray-700">{`Rs.${location.price}/visit`}</span>
          </div>

          <ul className="flex flex-col gap-2">
            <LocationInfo icon={faLocationDot} info={location.address} />

            <LocationInfo icon={faPhone} info={location.phoneNo} />

            <LocationInfo icon={faEnvelope} info={location.email} />

            <LocationInfo
              icon={faCheckCircle}
              info={`${location.availableSpotNo} Spots`}
            />
          </ul>

          <p>{location.description}</p>

          <div className="flex items-center gap-3">
            <FontAwesomeIcon icon={faUser} className="text-primary-700" />
            Posted by: {location.authorName}
          </div>
        </div>
        <div className="flex flex-col gap-6 rounded px-6 py-5 shadow-md">
          <LocationMap
            address={location.address}
            availableSpotNo={location.availableSpotNo.toString()}
            position={[+location.latitude, +location.longitude]}
          />
        </div>
      </div>
    )
  );
};

export default LocationDetail;
