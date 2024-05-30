import { Button, Table } from "antd";
import React, { act } from "react";
import useDialog from "../../hooks/useDialog";
import AddBranch from "./_components/AddBranch";

const Branches = () => {
  const dataSource = [
    {
      key: "1",
      name: "Mike",
      link: "http://abc.com",
      logo: "http://abc.com",
      active: "x",
    },
    {
      key: "2",
      name: "John",
      link: "http://abc.com",
      logo: "http://abc.com",
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
      title: "Link",
      dataIndex: "link",
      key: "link",
    },
    {
      title: "Logo",
      dataIndex: "logo",
      key: "logo",
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
        Add Branch
      </Button>
      <Table dataSource={dataSource} columns={columns} />
      {openAddDialog && <AddBranch onClose={toggleAddDialog} />}
    </div>
  );
};

export default Branches;
