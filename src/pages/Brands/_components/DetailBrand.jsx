import React from "react";
import { useDeleteBrand, useGetBrandById } from "../../../hooks/useBrandApi";
import Dialog from "../../../components/dialog";
import { Button } from "antd";
import useDialog from "../../../hooks/useDialog";
import ConfirmDialog from "../../../components/confirm/ConfirmDialog";
import { useQueryClient } from "react-query";

const DetailBrand = ({ id, onClose }) => {
  const queryClient = useQueryClient();

  const { isLoading, data } = useGetBrandById(id);
  const { isLoading: deleteLoading, mutate } = useDeleteBrand(id);
  const { isShow: openConfirm, toggleDialog: toggleConfirm } = useDialog();

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
            <Button type="primary" onClick={() => onClose()}>
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
    </Dialog>
  );
};

export default DetailBrand;
