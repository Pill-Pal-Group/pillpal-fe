import { Button, Spin, Table } from "antd";
import React, { useMemo, useState } from "react";
import { useGetCategoryList } from "../../hooks/useCategoryApi";
import useDialog from "../../hooks/useDialog";
import AddNation from "./_components/AddCategory";
import DetailCategory from "./_components/DetailCategory";
import AddCategory from "./_components/AddCategory";
import DeleteCategory from "./_components/DeleteCategory";

const columns = [
  {
    title: "Mã",
    dataIndex: "categoryCode",
    key: "categoryCode",
  },
  {
    title: "Tên danh mục",
    dataIndex: "categoryName",
    key: "categoryName",
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

const Categories = () => {
  const [selectedDetail, setSelectedDetail] = useState(null);
  const { data = [], isLoading } = useGetCategoryList();

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
        Thêm danh mục
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
        <DetailCategory
          id={selectedDetail}
          onClose={() => {
            setSelectedDetail(null);
            toggleDetail();
          }}
        />
      )}
      {openUpdate && (
        <AddCategory
          id={selectedDetail}
          onClose={() => {
            toggleUpdate();
            setSelectedDetail(null);
          }}
        />
      )}
      {openDelete && (
        <DeleteCategory
          id={selectedDetail}
          onClose={() => {
            toggleDelete();
            setSelectedDetail(null);
          }}
        />
      )}
    </div>
  );
};

export default Categories;
