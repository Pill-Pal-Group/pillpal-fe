import { Button } from "antd";
import React from "react";
import { useQueryClient } from "react-query";
import ConfirmDialog from "../../../components/confirm/ConfirmDialog";
import Dialog from "../../../components/dialog";
import { useDeleteBrand, useGetBrandById } from "../../../hooks/useBrandApi";
import useDialog from "../../../hooks/useDialog";
import AddBranch from "./AddBrand";

const DetailBrand = ({ id, onClose }) => {
  const queryClient = useQueryClient();

  const { isLoading, data } = useGetBrandById(id);
  const { isLoading: deleteLoading, mutate } = useDeleteBrand(id);
  const { isShow: openConfirm, toggleDialog: toggleConfirm } = useDialog();
  const { isShow: openUpdate, toggleDialog: toggleUpdate } = useDialog();

  const OnDelete = () => {
    mutate(undefined, {
      onSuccess: () => {
        queryClient.invalidateQueries("getBrandList");
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
          <h3 style={{ fontSize: "24px" }}>Detail Brand</h3>
          <img
            src={data?.brandLogo}
            style={{ width: 200, borderRadius: "10px", margin: "20px 0px" }}
          />
          <p>Brand URL: {data?.brandUrl}</p>
          <p>Brand Code: {data?.brandCode}</p>
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
          title={"Delete Brand"}
          onClose={toggleConfirm}
          isLoading={deleteLoading}
        />
      )}

      {openUpdate && <AddBranch onClose={toggleUpdate} id={id} />}
    </Dialog>
  );
};

export default DetailBrand;
