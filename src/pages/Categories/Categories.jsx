import { Button, Spin, Table } from "antd";
import React, { useMemo, useState } from "react";
import { useGetCategoryList } from "../../hooks/useCategoryApi";
import useDialog from "../../hooks/useDialog";
import AddNation from "./_components/AddCategory";
import DetailCategory from "./_components/DetailCategory";

const Categories = () => {
  const columns = [
    {
      title: "Code",
      dataIndex: "categoryCode",
      key: "categoryCode",
    },
    {
      title: "Name",
      dataIndex: "categoryName",
      key: "categoryName",
    },
  ];

  const [selectedDetail, setSelectedDetail] = useState(null);
  const { isShow: openAddDialog, toggleDialog: toggleAddDialog } = useDialog();
  const { data = [], isLoading } = useGetCategoryList();

  const dataSource = useMemo(() => {
    return data.map((item) => ({ ...item }));
  }, [data]);

  return (
    <div>
      <Button
        type="primary"
        style={{ marginBottom: 16 }}
        onClick={toggleAddDialog}
      >
        Add Category
      </Button>
      <Table
        dataSource={dataSource}
        columns={columns}
        loading={{ indicator: <Spin />, spinning: isLoading }}
        onRow={(row) => ({
          onClick: () => setSelectedDetail(row.id),
        })}
      />
      {openAddDialog && <AddNation onClose={toggleAddDialog} />}
      {Boolean(selectedDetail) && (
        <DetailCategory
          id={selectedDetail}
          onClose={() => setSelectedDetail(null)}
        />
      )}
    </div>
  );
};

export default Categories;
