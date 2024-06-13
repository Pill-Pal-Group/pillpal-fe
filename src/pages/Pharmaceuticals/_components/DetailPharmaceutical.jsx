import { Button } from "antd";
import React from "react";
import { useQueryClient } from "react-query";
import ConfirmDialog from "../../../components/confirm/ConfirmDialog";
import Dialog from "../../../components/dialog";
import useDialog from "../../../hooks/useDialog";
import {
  useDeletePharmaceutical,
  useGetPharmaceuticalById,
} from "../../../hooks/usePharmaceutialApi";
import AddPharmaceutical from "./AddPharmaceutical";

const DetailPharmaceutical = ({ id, onClose }) => {
  const queryClient = useQueryClient();

  const { isLoading, data } = useGetPharmaceuticalById(id);
  const { isLoading: deleteLoading, mutate } = useDeletePharmaceutical(id);
  const { isShow: openConfirm, toggleDialog: toggleConfirm } = useDialog();
  const { isShow: openUpdate, toggleDialog: toggleUpdate } = useDialog();

  const OnDelete = () => {
    mutate(undefined, {
      onSuccess: () => {
        queryClient.invalidateQueries("getPharmaceuticalList");
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
          <h3 style={{ fontSize: "24px" }}>Detail Pharmaceutical Company</h3>
          <p>Company: {data?.companyName}</p>
          <p>Nation: {data?.nation.nationName}</p>

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
          title={"Delete Pharmaceutical Company"}
          onClose={toggleConfirm}
          isLoading={deleteLoading}
        />
      )}

      {openUpdate && <AddPharmaceutical onClose={toggleUpdate} id={id} />}
    </Dialog>
  );
};

export default DetailPharmaceutical;
