import { Button } from "antd";
import React from "react";
import { useQueryClient } from "react-query";
import ConfirmDialog from "../../../components/confirm/ConfirmDialog";
import Dialog from "../../../components/dialog";
import {
  useDeleteActiveIngredient,
  useGetActiveIngredientById,
} from "../../../hooks/useActiveIngredientApi";
import useDialog from "../../../hooks/useDialog";
import AddActiveIngredient from "./AddActiveIngredient";

const DetailActiveIngredient = ({ id, onClose }) => {
  const queryClient = useQueryClient();

  const { isLoading, data } = useGetActiveIngredientById(id);
  const { isLoading: deleteLoading, mutate } = useDeleteActiveIngredient(id);
  const { isShow: openConfirm, toggleDialog: toggleConfirm } = useDialog();
  const { isShow: openUpdate, toggleDialog: toggleUpdate } = useDialog();

  const OnDelete = () => {
    mutate(undefined, {
      onSuccess: () => {
        queryClient.invalidateQueries("getActiveIngredientList");
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
          <h3 style={{ fontSize: "24px" }}>Detail Active Ingredient</h3>

          <p>Code: {data?.ingredientCode}</p>
          <p>Name: {data?.ingredientName}</p>
          <p>Information: {data?.ingredientInformation}</p>
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
          title={"Delete Active Ingredient"}
          onClose={toggleConfirm}
          isLoading={deleteLoading}
        />
      )}

      {openUpdate && <AddActiveIngredient onClose={toggleUpdate} id={id} />}
    </Dialog>
  );
};

export default DetailActiveIngredient;
