import { NavLink } from "react-router-dom";

import { LOCATION } from "@/constants/routes";

import getUrlWithId from "@/utils/getUrlWithId";
import truncateString from "@/utils/truncateString";

type LocationProps = {
  id: string;
  name: string;
  description: string;
  address: string;
  imageURL: string;
};

const LocationCard = ({
  id,
  name,
  description,
  address,
  imageURL,
}: LocationProps) => (
  <NavLink to={getUrlWithId(LOCATION.SHOW, id)}>
    <div className="grid grid-cols-2 items-center gap-6 rounded-lg p-4 shadow-lg md:grid-cols-1 xs:grid-cols-1">
      <img src={imageURL} alt={name} className="aspect-3/2 w-full rounded-md" />

      <div className="flex flex-col gap-4 self-center">
        <h3 className="text-xl font-medium text-primary-900">{name}</h3>
        <p className="text-base text-gray-800">{truncateString(description)}</p>
        <span className="text-sm text-gray-700">{address}</span>
      </div>
    </div>
  </NavLink>
);

export default LocationCard;
