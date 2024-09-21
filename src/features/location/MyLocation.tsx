import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

import AlertDialog from "@/components/ui/AlertDialog/AlertDialog";
import Loader from "@/components/ui/Loader/Loader";

import { useAppDispatch, useAppSelector } from "@/hooks/reduxHooks";

import { LOCATION } from "@/constants/routes";

import getUrlWithId from "@/utils/getUrlWithId";

import { deleteLocation, fetchMyLocations } from "./asyncThunks";
import LocationsTable from "./components/LocationsTable";

export const MyLocation = () => {
  const actionIdRef = useRef("");

  const navigate = useNavigate();

  const dispatch = useAppDispatch();
  const { myLocations, status } = useAppSelector((state) => state.location);

  const [columns] = useState([
    { id: "imageURL", name: "Image" },
    { id: "name", name: "Name" },
    { id: "address", name: "Address" },
    { id: "phoneNo", name: "Phone Number", colSpan: 2 },
    { id: "email", name: "Email" },
    { id: "price", name: "Price" },
    { id: "description", name: "Description", className: "w-64" },
    { id: "action", name: "Action" },
  ]);
  const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState(false);

  const handleDeleteDialogOpen = (id: string) => {
    actionIdRef.current = id;
    setIsDeleteDialogOpen(true);
  };

  const handleDeleteDialogClose = () => {
    setIsDeleteDialogOpen(false);
  };

  const handleEditClick = (id: string) => {
    navigate(getUrlWithId(LOCATION.EDIT, id));
  };

  const handleLocationDelete = async () => {
    const resultAction = await dispatch(deleteLocation(actionIdRef.current));

    if (deleteLocation.fulfilled.match(resultAction)) {
      actionIdRef.current = "";
      handleDeleteDialogClose();
    }
  };

  useEffect(() => {
    const getAllLocations = dispatch(fetchMyLocations());

    return () => {
      getAllLocations?.abort();
    };
  }, [dispatch]);

  return (
    <>
      <h2 className="mb-12 text-3xl font-semibold uppercase text-primary-900">
        My Locations
      </h2>

      {status === "pending" ? (
        <Loader size="3xl" variant="primary" fullPage />
      ) : (
        <LocationsTable
          columns={columns}
          data={myLocations}
          onDeleteClick={handleDeleteDialogOpen}
          onEditClick={handleEditClick}
        />
      )}

      <AlertDialog
        isOpen={isDeleteDialogOpen}
        title="Are you sure want to delete this location?"
        description="You are about to permanently delete this item from the system. This action is irreversible and cannot be undone. Please confirm to proceed."
        onDialogClose={handleDeleteDialogClose}
        onDestructiveAction={handleLocationDelete}
        isLoading={status === "pending"}
      />
    </>
  );
};

export default MyLocation;
