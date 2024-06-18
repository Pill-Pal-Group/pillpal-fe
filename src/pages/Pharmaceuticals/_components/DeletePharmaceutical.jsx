import React from "react";
import { useQueryClient } from "react-query";
import ConfirmDialog from "../../../components/confirm/ConfirmDialog";
import { useDeletePharmaceutical } from "../../../hooks/usePharmaceutialApi";

const DeletePharmaceutical = ({ id, onClose }) => {
  const queryClient = useQueryClient();

  const { isLoading: deleteLoading, mutate } = useDeletePharmaceutical(id);

  const OnDelete = () => {
    mutate(undefined, {
      onSuccess: () => {
        queryClient.invalidateQueries("getPharmaceuticalList");
        onClose();
      },
    });
  };

  return (
    <ConfirmDialog
      content={"Bạn chắc chứ?"}
      onConfirmed={OnDelete}
      title={"Xóa công ty dược phẩm này"}
      onClose={onClose}
      isLoading={deleteLoading}
    />
  );
};

export default DeletePharmaceutical;
