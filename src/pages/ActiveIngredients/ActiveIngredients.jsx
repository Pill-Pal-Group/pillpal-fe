import { Button, Table } from "antd";
import React, { useMemo, useState } from "react";
import { useGetActiveIngredientList } from "../../hooks/useActiveIngredientApi";
import useDialog from "../../hooks/useDialog";
import AddActiveIngredient from "./_components/AddActiveIngredient";
import DetailActiveIngredient from "./_components/DetailActiveIngredient";
import DeleteActiveIngredient from "./_components/DeleteActiveIngredient";

const columns = [
  {
    title: "Mã",
    dataIndex: "ingredientCode",
    key: "ingredientCode",
  },
  {
    title: "Tên hoạt chất",
    dataIndex: "ingredientName",
    key: "ingredientName",
  },
  {
    title: "Thông tin",
    dataIndex: "ingredientInformation",
    key: "ingredientInformation",
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
const ActiveIngredients = () => {
  const [detailSelected, setDetailSelected] = useState(null);

  // api get list
  const { isLoading, data = [] } = useGetActiveIngredientList();

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
            setDetailSelected(item.id);
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
            setDetailSelected(item.id);
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
        Thêm thành phần hoạt chất
      </Button>
      <Table
        dataSource={dataSource}
        columns={columns}
        loading={isLoading}
        onRow={(r) => ({
          onClick: () => {
            setDetailSelected(r.id);
            toggleDetail();
          },
        })}
      />
      {openAddDialog && <AddActiveIngredient onClose={toggleAddDialog} />}
      {openDetail && (
        <DetailActiveIngredient
          id={detailSelected}
          onClose={() => {
            setDetailSelected(null);
            toggleDetail();
          }}
        />
      )}
      {openUpdate && (
        <AddActiveIngredient
          onClose={() => {
            toggleUpdate();
            setDetailSelected(null);
          }}
          id={detailSelected}
        />
      )}
      {openDelete && (
        <DeleteActiveIngredient
          id={detailSelected}
          onClose={() => {
            toggleDelete();
            setDetailSelected(null);
          }}
        />
      )}
    </div>
  );
};

export default ActiveIngredients;
