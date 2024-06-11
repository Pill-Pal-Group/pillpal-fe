import React from "react";
import { useGetBrandById } from "../../../hooks/useBrandApi";
import Dialog from "../../../components/dialog";
import { Button } from "antd";

const DetailBrand = ({ id, onClose }) => {
  const { isLoading, data } = useGetBrandById(id);

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
            <Button type="danger" onClick={() => onClose()}>
              Delete
            </Button>
          </div>
        </div>
      )}
    </Dialog>
  );
};

export default DetailBrand;
