import { Button, Table } from "antd";
import React, { useMemo, useState } from "react";
import useDialog from "../../hooks/useDialog";
import AddSpecification from "./_components/AddSpecification";
import { useGetSpecificationList } from "../../hooks/useSpecificationApi";
import DetailSpecification from "./_components/DetailSpecification";

const Specifications = () => {
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

  const [selectedSpecification, setSelectedSpecification] = useState(null);
  const { isShow: openAddDialog, toggleDialog: toggleAddDialog } = useDialog();

  const { data = [], isLoading } = useGetSpecificationList();

  const dataSource = useMemo(() => {
    return data.map((item) => {
      return {
        id: item.id,
        name: item.typeName,
        description: item.detail,
      };
    });
  }, [data]);
  return (
    <div>
      <Button
        type="primary"
        style={{ marginBottom: 16 }}
        onClick={toggleAddDialog}
      >
        Add Specification
      </Button>
      <Table
        dataSource={dataSource}
        columns={columns}
        loading={isLoading}
        onRow={(r) => ({ onClick: () => setSelectedSpecification(r.id) })}
      />
      {openAddDialog && <AddSpecification onClose={toggleAddDialog} />}
      {Boolean(selectedSpecification) && (
        <DetailSpecification
          id={selectedSpecification}
          onClose={() => setSelectedSpecification(null)}
        />
      )}
    </div>
  );
};

export default Specifications;
