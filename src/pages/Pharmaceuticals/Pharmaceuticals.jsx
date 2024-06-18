import { Button, Spin, Table } from "antd";
import React, { useMemo, useState } from "react";
import useDialog from "../../hooks/useDialog";
import AddPharmaceutical from "./_components/AddPharmaceutical";
import { useGetPharmaceuticalList } from "../../hooks/usePharmaceutialApi";
import DetailPharmaceutical from "./_components/DetailPharmaceutical";
import DeletePharmaceutical from "./_components/DeletePharmaceutical";

const columns = [
  {
    title: "Company Name",
    dataIndex: "companyName",
    key: "companyName",
  },
  {
    title: "Nation",
    dataIndex: "nation",
    key: "nation",
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
const Pharmaceuticals = () => {
  const [selectedPharmaceutical, setSelectedPharmaceutical] = useState(null);

  // Api get pharmaceutical list
  const { data = [], isLoading } = useGetPharmaceuticalList();

  // dialog state
  const { isShow: openDetail, toggleDialog: toggleDetail } = useDialog();
  const { isShow: openAddDialog, toggleDialog: toggleAddDialog } = useDialog();
  const { isShow: openDelete, toggleDialog: toggleDelete } = useDialog();
  const { isShow: openUpdate, toggleDialog: toggleUpdate } = useDialog();

  const dataSource = useMemo(() => {
    return data.map((item) => ({
      ...item,
      nation: item.nation.nationName,
      edit: (
        <Button
          type="primary"
          style={{ background: "#ff9b1e" }}
          onClick={(e) => {
            e.stopPropagation();
            setSelectedPharmaceutical(item.id);
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
            setSelectedPharmaceutical(item.id);
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
        Thêm công ty dược phẩm
      </Button>
      <Table
        dataSource={dataSource}
        columns={columns}
        loading={{ indicator: <Spin />, spinning: isLoading }}
        onRow={(r) => ({
          onClick: () => {
            setSelectedPharmaceutical(r.id);
            toggleDetail();
          },
        })}
      />
      {openDetail && (
        <DetailPharmaceutical
          id={selectedPharmaceutical}
          onClose={() => {
            setSelectedPharmaceutical(null);
            toggleDetail();
          }}
        />
      )}
      {openAddDialog && <AddPharmaceutical onClose={toggleAddDialog} />}
      {openUpdate && (
        <AddPharmaceutical
          id={selectedPharmaceutical}
          onClose={() => {
            toggleUpdate();
            setSelectedPharmaceutical(null);
          }}
        />
      )}
      {openDelete && (
        <DeletePharmaceutical
          id={selectedPharmaceutical}
          onClose={() => {
            toggleDelete();
            setSelectedPharmaceutical(null);
          }}
        />
      )}
    </div>
  );
};

export default Pharmaceuticals;
