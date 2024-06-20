import React from "react";
import Dialog from "../../../components/dialog";
import { useGetActiveIngredientById } from "../../../hooks/useActiveIngredientApi";

const DetailActiveIngredient = ({ id, onClose }) => {
  const { isLoading, data } = useGetActiveIngredientById(id);

  return (
    <Dialog onClose={onClose}>
      {isLoading ? (
        <p>Đang tải...</p>
      ) : (
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <h3 style={{ fontSize: "24px" }}>CHI TIẾT THÀNH PHẦN HOẠT CHẤT</h3>

          <p>Mã: {data?.ingredientCode}</p>
          <p>Tên: {data?.ingredientName}</p>
          <p>Thông tin: {data?.ingredientInformation}</p>
        </div>
      )}
    </Dialog>
  );
};

export default DetailActiveIngredient;
