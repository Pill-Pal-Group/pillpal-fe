import { Button } from "antd";
import React from "react";
import { useQueryClient } from "react-query";
import ConfirmDialog from "../../../components/confirm/ConfirmDialog";
import Dialog from "../../../components/dialog";
import useDialog from "../../../hooks/useDialog";
import { useDeleteNation, useGetNationById } from "../../../hooks/useNationApi";
import AddNation from "./AddNation";

const DetailNation = ({ id, onClose }) => {
  const queryClient = useQueryClient();

  const { isLoading, data } = useGetNationById(id);
  const { isLoading: deleteLoading, mutate } = useDeleteNation(id);
  const { isShow: openConfirm, toggleDialog: toggleConfirm } = useDialog();
  const { isShow: openUpdate, toggleDialog: toggleUpdate } = useDialog();

  const OnDelete = () => {
    mutate(undefined, {
      onSuccess: () => {
        queryClient.invalidateQueries("getNationList");
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
          <h3 style={{ fontSize: "24px" }}>Detail Nation</h3>
          <p>Code: {data?.nationCode}</p>
          <p>Nation: {data?.nationName}</p>

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
          title={"Delete Nation"}
          onClose={toggleConfirm}
          isLoading={deleteLoading}
        />
      )}

      {openUpdate && <AddNation onClose={toggleUpdate} id={id} />}
    </Dialog>
  );
};

export default DetailNation;
