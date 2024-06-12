import { Button } from "antd";
import React from "react";
import { useQueryClient } from "react-query";
import ConfirmDialog from "../../../components/confirm/ConfirmDialog";
import Dialog from "../../../components/dialog";
import useDialog from "../../../hooks/useDialog";
import { useDeleteDosage, useGetDosageById } from "../../../hooks/useDosageApi";
import AddDosage from "./AddDosage";

const DetailDosage = ({ id, onClose }) => {
  const queryClient = useQueryClient();

  const { isLoading, data } = useGetDosageById(id);
  const { isLoading: deleteLoading, mutate } = useDeleteDosage(id);
  const { isShow: openConfirm, toggleDialog: toggleConfirm } = useDialog();
  const { isShow: openUpdate, toggleDialog: toggleUpdate } = useDialog();

  const OnDelete = () => {
    mutate(undefined, {
      onSuccess: () => {
        queryClient.invalidateQueries("getDosageList");
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
          <h3 style={{ fontSize: "24px" }}>Detail Dosage Form</h3>

          <p>Form name: {data?.formName}</p>

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
          title={"Delete Dosage Form"}
          onClose={toggleConfirm}
          isLoading={deleteLoading}
        />
      )}

      {openUpdate && <AddDosage onClose={toggleUpdate} id={id} />}
    </Dialog>
  );
};

export default DetailDosage;
