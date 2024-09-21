import ActionButtons from "@/components/ui/ActionButtons/ActionButtons";
import Table from "@/components/ui/Table/Table";
import TableBody from "@/components/ui/Table/TableBody";
import TableContainer from "@/components/ui/Table/TableContainer";
import TableData from "@/components/ui/Table/TableData";
import TableHead from "@/components/ui/Table/TableHead";
import TableHeading from "@/components/ui/Table/TableHeading";
import TableRow from "@/components/ui/Table/TableRow";

import truncateString from "@/utils/truncateString";

import { LocationResponse } from "../types";

type TableActionProps = {
  onDeleteClick: (arg: string) => void;
  onEditClick: (arg: string) => void;
};

type LocationTableProps = TableActionProps & {
  columns: {
    id: string;
    name: string;
    colSpan?: number;
    className?: string;
  }[];
  data: Omit<LocationResponse, "authorName">[];
};

type TableDataContentProps = TableActionProps & {
  id: string;
  locationId: string;
  location: Omit<LocationResponse, "authorName">;
};

const TableDataContent = ({
  id,
  location,
  locationId,
  onDeleteClick,
  onEditClick,
}: TableDataContentProps) => {
  if (id === "description") return truncateString(location[id], 80);

  if (id === "imageURL")
    return <img src={location[id]} alt={location.name} className="h-16 w-24" />;

  if (id === "action")
    return (
      <ActionButtons
        onDeleteClick={() => onDeleteClick(locationId)}
        onEditClick={() => onEditClick(locationId)}
      />
    );

  return location[id as keyof typeof location];
};

const LocationsTable = ({
  columns,
  data,
  onDeleteClick,
  onEditClick,
}: LocationTableProps) => {
  return (
    <TableContainer className="max-h-[32rem]">
      <Table>
        <TableHead>
          <TableRow>
            {columns.map(({ id, name, colSpan, className }) => (
              <TableHeading key={id} colSpan={colSpan} className={className}>
                {name}
              </TableHeading>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map(({ _id: locationId, ...location }) => (
            <TableRow key={locationId}>
              {columns.map(({ id, colSpan, className }) => (
                <TableData key={id} colSpan={colSpan} className={className}>
                  <TableDataContent
                    id={id}
                    locationId={locationId}
                    location={{ ...location, _id: locationId }}
                    onDeleteClick={onDeleteClick}
                    onEditClick={onEditClick}
                  />
                </TableData>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default LocationsTable;
