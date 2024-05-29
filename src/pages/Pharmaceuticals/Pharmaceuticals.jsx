import { Button, Table } from "antd";
import React from "react";
import useDialog from "../../hooks/useDialog";
import AddPharmaceutical from "./_components/AddPharmaceutical";

const Pharmaceuticals = () => {
  const dataSource = [
    {
      key: "1",
      name: "Mike",
      age: 32,
      address: "10 Downing Street",
    },
    {
      key: "2",
      name: "John",
      age: 42,
      address: "10 Downing Street",
    },
  ];
  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Age",
      dataIndex: "age",
      key: "age",
    },
    {
      title: "Address",
      dataIndex: "address",
      key: "address",
    },
  ];

  const { isShow: openAddDialog, toggleDialog: toggleAddDialog } = useDialog();

  return (
    <div>
      <Button
        type="primary"
        style={{ marginBottom: 16 }}
        onClick={toggleAddDialog}
      >
        Add Pharmaceutical
      </Button>
      <Table dataSource={dataSource} columns={columns} />
      {openAddDialog && <AddPharmaceutical onClose={toggleAddDialog} />}
    </div>
  );
};

export default Pharmaceuticals;
