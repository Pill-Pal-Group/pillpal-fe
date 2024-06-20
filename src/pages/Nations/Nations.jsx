import { Button, Spin, Table } from "antd";
import React, { useMemo, useState } from "react";
import useDialog from "../../hooks/useDialog";
import { useGetNationList } from "../../hooks/useNationApi";
import AddNation from "./_components/AddNation";
import DeleteNation from "./_components/DeleteNation";
import DetailNation from "./_components/DetailNation";

const columns = [
  {
    title: "Mã",
    dataIndex: "nationCode",
    key: "nationCode",
  },
  {
    title: "Tên quốc gia",
    dataIndex: "nationName",
    key: "nationName",
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
const Nations = () => {
  // api get list
  const { data = [], isLoading } = useGetNationList();

  const [selectedDetail, setSelectedDetail] = useState(null);

  // dialog state
  const { isShow: openDetail, toggleDialog: toggleDetail } = useDialog();
  const { isShow: openAddDialog, toggleDialog: toggleAddDialog } = useDialog();
  const { isShow: openDelete, toggleDialog: toggleDelete } = useDialog();
  const { isShow: openUpdate, toggleDialog: toggleUpdate } = useDialog();

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
        Thêm quốc gia{" "}
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
      {openAddDialog && <AddNation onClose={toggleAddDialog} />}
      {openDetail && (
        <DetailNation
          id={selectedDetail}
          onClose={() => {
            setSelectedDetail(null);
            toggleDetail();
          }}
        />
      )}
      {openUpdate && (
        <AddNation
          id={selectedDetail}
          onClose={() => {
            setSelectedDetail(null);
            toggleUpdate();
          }}
        />
      )}
      {openDelete && (
        <DeleteNation
          id={selectedDetail}
          onClose={() => {
            setSelectedDetail(null);
            toggleDelete();
          }}
        />
      )}
    </div>
  );
};

export default Nations;
