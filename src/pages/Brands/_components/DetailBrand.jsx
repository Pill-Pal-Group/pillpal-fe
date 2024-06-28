import React from "react";
import Dialog from "../../../components/dialog";
import { useGetBrandById } from "../../../hooks/useBrandApi";

const DetailBrand = ({ id, onClose }) => {
  const { isLoading, data } = useGetBrandById(id);

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
          <h3 style={{ fontSize: "24px" }}>CHI TIẾT THƯƠNG HIỆU</h3>
          <img
            src={data?.brandLogo}
            style={{ width: 200, borderRadius: "10px", margin: "20px 0px" }}
          />
          <p>URL thương hiệu: {data?.brandUrl}</p>
          <p>Mã thương hiệu: {data?.brandCode}</p>
        </div>
      )}
    </Dialog>
  );
};

export default DetailBrand;
