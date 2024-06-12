import { Button } from "antd";
import React from "react";
import { useQueryClient } from "react-query";
import ConfirmDialog from "../../../components/confirm/ConfirmDialog";
import Dialog from "../../../components/dialog";
import useDialog from "../../../hooks/useDialog";
import {
  useDeleteSpecification,
  useGetSpecificationById,
} from "../../../hooks/useSpecificationApi";
import AddSpecification from "./AddSpecification";

const DetailSpecification = ({ id, onClose }) => {
  const queryClient = useQueryClient();

  const { isLoading, data } = useGetSpecificationById(id);
  const { isLoading: deleteLoading, mutate } = useDeleteSpecification(id);
  const { isShow: openConfirm, toggleDialog: toggleConfirm } = useDialog();
  const { isShow: openUpdate, toggleDialog: toggleUpdate } = useDialog();

  const OnDelete = () => {
    mutate(undefined, {
      onSuccess: () => {
        queryClient.invalidateQueries("getSpecificationList");
        onClose();
      },
    });
  };

  return (
    <Dialog onClose={onClose}>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <h3 style={{ fontSize: "24px" }}>Detail Specification</h3>

          <p>Type: {data?.typeName}</p>
          <p>Description: {data?.detail}</p>
          <div style={{ display: "flex", gap: "20px" }}>
            <Button type="primary" onClick={toggleUpdate}>
              Update
            </Button>
            <Button type="danger" onClick={toggleConfirm}>
              Delete
            </Button>
          </div>
        </div>
      )}
      {openConfirm && (
        <ConfirmDialog
          content={"Are you sure?"}
          onConfirmed={OnDelete}
          title={"Delete Specification"}
          onClose={toggleConfirm}
          isLoading={deleteLoading}
        />
      )}

      {openUpdate && <AddSpecification onClose={toggleUpdate} id={id} />}
    </Dialog>
  );
};

export default DetailSpecification;
