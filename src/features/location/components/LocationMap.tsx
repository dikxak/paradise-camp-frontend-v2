import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";

type LocationMapProps = {
  address: string;
  availableSpotNo: string;
  position: [number, number];
};

const LocationMap = ({
  address,
  availableSpotNo,
  position,
}: LocationMapProps) => {
  return (
    <div className="h-[25rem]">
      <MapContainer
        center={position}
        zoom={15}
        scrollWheelZoom
        className="h-full"
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={position}>
          <Popup>
            <div className="flex flex-col gap-1">
              <span className="text-base">{address}</span>
              <span>Available spots: {availableSpotNo}</span>
            </div>
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};

export default LocationMap;
