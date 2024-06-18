import { Button, Spin, Table } from "antd";
import React, { useMemo, useState } from "react";
import useDialog from "../../hooks/useDialog";
import { useGetDosageList } from "../../hooks/useDosageApi";
import AddDosage from "./_components/AddDosage";
import DeleteDosage from "./_components/DeleteDosage";
import DetailDosage from "./_components/DetailDosage";

const columns = [
  {
    title: "Tên",
    dataIndex: "formName",
    key: "formName",
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

const Dosages = () => {
  // Api get dosage list
  const { data = [], isLoading } = useGetDosageList();

  // dialog state
  const { isShow: openDetail, toggleDialog: toggleDetail } = useDialog();
  const { isShow: openAddDialog, toggleDialog: toggleAddDialog } = useDialog();
  const { isShow: openDelete, toggleDialog: toggleDelete } = useDialog();
  const { isShow: openUpdate, toggleDialog: toggleUpdate } = useDialog();

  const [selectedDetail, setSelectedDetail] = useState(null);

  const dataSource = useMemo(() => {
    return data.map((item) => ({
      ...item,
      edit: (
        <Button
          type="primary"
          style={{ background: "#ff9b1e" }}
          onClick={(e) => {
            e.stopPropagation();
            setSelectedDetail(item.id);
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
            setSelectedDetail(item.id);
            toggleDelete();
          }}
        >
          Xóa
        </Button>
      ),
    }));
  }, [data]);

  return (
    <div>
      <Button
        type="primary"
        style={{ marginBottom: 16 }}
        onClick={toggleAddDialog}
      >
        Thêm liều lượng
      </Button>
      <Table
        dataSource={dataSource}
        columns={columns}
        loading={{ indicator: <Spin />, spinning: isLoading }}
        onRow={(row) => ({
          onClick: () => {
            setSelectedDetail(row.id);
            toggleDetail();
          },
        })}
      />
      {openAddDialog && <AddDosage onClose={toggleAddDialog} />}
      {openDetail && (
        <DetailDosage
          id={selectedDetail}
          onClose={() => {
            setSelectedDetail(null);
            toggleDetail();
          }}
        />
      )}
      {openDelete && (
        <DeleteDosage
          id={selectedDetail}
          onClose={() => {
            toggleDelete();
            setSelectedDetail(null);
          }}
        />
      )}
      {openUpdate && <AddDosage onClose={toggleUpdate} id={selectedDetail} />}
    </div>
  );
};

export default Dosages;
