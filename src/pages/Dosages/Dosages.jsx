import { Button, Table } from "antd";
import React from "react";
import useDialog from "../../hooks/useDialog";
import AddDosage from "./_components/AddDosage";

const Dosages = () => {
  const dataSource = [
    {
      key: "1",
      name: "Mike",
      active: "x",
    },
    {
      key: "2",
      name: "John",
      active: "x",
    },
  ];
  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Active",
      dataIndex: "active",
      key: "active",
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
        Add Dosage
      </Button>
      <Table dataSource={dataSource} columns={columns} />
      {openAddDialog && <AddDosage onClose={toggleAddDialog} />}
    </div>
  );
};

export default Dosages;
