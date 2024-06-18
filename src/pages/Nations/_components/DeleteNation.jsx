import React from "react";
import { useQueryClient } from "react-query";
import { useDeleteNation } from "../../../hooks/useNationApi";
import ConfirmDialog from "../../../components/confirm/ConfirmDialog";

const DeleteNation = ({ id, onClose }) => {
  const queryClient = useQueryClient();
  const { isLoading: deleteLoading, mutate } = useDeleteNation(id);
  const OnDelete = () => {
    mutate(undefined, {
      onSuccess: () => {
        queryClient.invalidateQueries("getNationList");
        onClose();
      },
    });
  };
  return (
    <ConfirmDialog
      content={"Bạn chắc chứ?"}
      onConfirmed={OnDelete}
      title={"Xóa quốc gia này"}
      onClose={onClose}
      isLoading={deleteLoading}
    />
  );
};

export default DeleteNation;
