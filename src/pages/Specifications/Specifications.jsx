import { Button, Table } from "antd";
import React, { useMemo, useState } from "react";
import useDialog from "../../hooks/useDialog";
import AddSpecification from "./_components/AddSpecification";
import { useGetSpecificationList } from "../../hooks/useSpecificationApi";
import DetailSpecification from "./_components/DetailSpecification";
import DeleteSpecification from "./_components/DeleteSpecification";

const columns = [
  {
    title: "Tên",
    dataIndex: "name",
    key: "name",
  },
  {
    title: "Ghi chú",
    dataIndex: "description",
    key: "description",
  },
  {
    title: "",
    dataIndex: "edit",
    key: "edit",
  },
  {
    title: "",
    dataIndex: "delete",
    key: "delete",
  },
];

const Specifications = () => {
  // Api get specification list
  const { data = [], isLoading } = useGetSpecificationList();

  // dialog state
  const { isShow: openDetail, toggleDialog: toggleDetail } = useDialog();
  const { isShow: openAddDialog, toggleDialog: toggleAddDialog } = useDialog();
  const { isShow: openDelete, toggleDialog: toggleDelete } = useDialog();
  const { isShow: openUpdate, toggleDialog: toggleUpdate } = useDialog();

  const [selectedSpecification, setSelectedSpecification] = useState(null);

  const dataSource = useMemo(() => {
    return data.map((item) => {
      return {
        id: item.id,
        name: item.typeName,
        description: item.detail,
        edit: (
          <Button
            type="primary"
            style={{ background: "#ff9b1e" }}
            onClick={(e) => {
              e.stopPropagation();
              setSelectedSpecification(item.id);
              toggleUpdate();
            }}
          >
            Chỉnh sửa
          </Button>
        ),
        delete: (
          <Button
            type="primary"
            style={{ background: "#fb3030" }}
            onClick={(e) => {
              e.stopPropagation();
              setSelectedSpecification(item.id);
              toggleDelete();
            }}
          >
            Xóa
          </Button>
        ),
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
        Thêm đặc tính
      </Button>
      <Table
        dataSource={dataSource}
        columns={columns}
        loading={isLoading}
        onRow={(r) => ({
          onClick: () => {
            setSelectedSpecification(r.id);
            toggleDetail();
          },
        })}
      />
      {openAddDialog && <AddSpecification onClose={toggleAddDialog} />}
      {openDetail && (
        <DetailSpecification
          id={selectedSpecification}
          onClose={() => {
            setSelectedSpecification(null);
            toggleDetail();
          }}
        />
      )}
      {openUpdate && (
        <AddSpecification
          id={selectedSpecification}
          onClose={() => {
            setSelectedSpecification(null);
            toggleUpdate();
          }}
        />
      )}
      {openDelete && (
        <DeleteSpecification
          id={selectedSpecification}
          onClose={() => {
            toggleDelete();
            setSelectedSpecification(null);
          }}
        />
      )}
    </div>
  );
};

export default Specifications;
