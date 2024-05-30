import { Button, Table } from "antd";
import React from "react";
import useDialog from "../../hooks/useDialog";
import AddSpecification from "./_components/AddSpecification";

const Specifications = () => {
  const dataSource = [
    {
      key: "1",
      name: "Mike",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      key: "2",
      name: "John",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
  ];
  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Description",
      dataIndex: "description",
      key: "description",
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
        Add Specification
      </Button>
      <Table dataSource={dataSource} columns={columns} />
      {openAddDialog && <AddSpecification onClose={toggleAddDialog} />}
    </div>
  );
};

export default Specifications;
