import { Button, Table } from "antd";
import React from "react";
import useDialog from "../../hooks/useDialog";
import AddPharmaceutical from "./_components/AddPharmaceutical";

const Pharmaceuticals = () => {
  const dataSource = [
    {
      key: "1",
      name: "Mike",
      nation: "nation 1",
      active: "x",
    },
    {
      key: "2",
      name: "John",
      nation: "nation 2",
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
      title: "Nation",
      dataIndex: "nation",
      key: "nation",
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
        Add Pharmaceutical
      </Button>
      <Table dataSource={dataSource} columns={columns} />
      {openAddDialog && <AddPharmaceutical onClose={toggleAddDialog} />}
    </div>
  );
};

export default Pharmaceuticals;
