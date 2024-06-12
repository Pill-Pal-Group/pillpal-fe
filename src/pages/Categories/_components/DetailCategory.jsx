import { Button } from "antd";
import React from "react";
import { useQueryClient } from "react-query";
import ConfirmDialog from "../../../components/confirm/ConfirmDialog";
import Dialog from "../../../components/dialog";
import {
  useDeleteCategory,
  useGetCategoryById,
} from "../../../hooks/useCategoryApi";
import useDialog from "../../../hooks/useDialog";
import AddCategory from "./AddCategory";

const DetailCategory = ({ id, onClose }) => {
  const queryClient = useQueryClient();

  const { isLoading, data } = useGetCategoryById(id);
  const { isLoading: deleteLoading, mutate } = useDeleteCategory(id);
  const { isShow: openConfirm, toggleDialog: toggleConfirm } = useDialog();
  const { isShow: openUpdate, toggleDialog: toggleUpdate } = useDialog();

  const OnDelete = () => {
    mutate(undefined, {
      onSuccess: () => {
        queryClient.invalidateQueries("getCategoryList");
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
          <h3 style={{ fontSize: "24px" }}>Detail Category</h3>
          <p>Code: {data?.categoryCode}</p>
          <p>Category: {data?.categoryName}</p>

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
          title={"Delete Category"}
          onClose={toggleConfirm}
          isLoading={deleteLoading}
        />
      )}

      {openUpdate && <AddCategory onClose={toggleUpdate} id={id} />}
    </Dialog>
  );
};

export default DetailCategory;
