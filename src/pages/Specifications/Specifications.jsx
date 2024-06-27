import React, { useMemo, useState } from "react";
import GradientButton from "../../components/button/GradientButton";
import CustomTable from "../../components/table";
import useDialog from "../../hooks/useDialog";
import { useGetSpecificationList } from "../../hooks/useSpecificationApi";
import AddSpecification from "./_components/AddSpecification";
import DeleteSpecification from "./_components/DeleteSpecification";
import DetailSpecification from "./_components/DetailSpecification";

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
    width: 100,
  },
  {
    title: "",
    dataIndex: "delete",
    key: "delete",
    width: 100,
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
          <GradientButton
            label={"Chỉnh sửa"}
            type={"warning"}
            onClick={(e) => {
              e.stopPropagation();
              setSelectedSpecification(item.id);
              toggleUpdate();
            }}
          />
        ),
        delete: (
          <GradientButton
            label={"Xóa"}
            type={"danger"}
            onClick={(e) => {
              e.stopPropagation();
              setSelectedSpecification(item.id);
              toggleDelete();
            }}
          />
        ),
      };
    });
  }, [data]);
  return (
    <div>
      <GradientButton
        label={"Thêm đặc tính"}
        onClick={toggleAddDialog}
        style={{ marginBottom: "20px" }}
      />
      <CustomTable
        columns={columns}
        data={dataSource}
        isLoading={isLoading}
        onRowClick={(r) => {
          setSelectedSpecification(r.id);
          toggleDetail();
        }}
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
