import React from "react";
import Dialog from "../../../components/dialog";
import { useGetSpecificationById } from "../../../hooks/useSpecificationApi";

const DetailSpecification = ({ id, onClose }) => {
  const { isLoading, data } = useGetSpecificationById(id);

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
          <h3 style={{ fontSize: "24px" }}>CHI TIẾT ĐẶC TÍNH</h3>

          <p>Loại: {data?.typeName}</p>
          <p>Ghi chú: {data?.detail}</p>
        </div>
      )}
    </Dialog>
  );
};

export default DetailSpecification;
