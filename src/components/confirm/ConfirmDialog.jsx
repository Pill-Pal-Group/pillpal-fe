import React from "react";
import Dialog from "../dialog";
import { Button } from "antd";

const ConfirmDialog = ({ onClose, title, content, onConfirmed, isLoading }) => {
  return (
    <Dialog onClose={onClose}>
      {title && <h3 className="text-center">{title}</h3>}
      {content && <p className="text-center">{content}</p>}
      <div style={{ display: "flex", gap: "20px", justifyContent: "center" }}>
        <Button type="primary" onClick={onClose}>
          Hủy
        </Button>
        <Button type="danger" onClick={onConfirmed} loading={isLoading}>
          Xóa
        </Button>
      </div>
    </Dialog>
  );
};

export default ConfirmDialog;
