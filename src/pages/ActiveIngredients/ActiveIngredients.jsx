import { Button, Table } from "antd";
import React, { useMemo, useState } from "react";
import { useGetActiveIngredientList } from "../../hooks/useActiveIngredientApi";
import useDialog from "../../hooks/useDialog";
import AddActiveIngredient from "./_components/AddActiveIngredient";
import DetailActiveIngredient from "./_components/DetailActiveIngredient";

const columns = [
  {
    title: "Code",
    dataIndex: "ingredientCode",
    key: "ingredientCode",
  },
  {
    title: "Name",
    dataIndex: "ingredientName",
    key: "ingredientName",
  },
  {
    title: "Information",
    dataIndex: "ingredientInformation",
    key: "ingredientInformation",
  },
];
const ActiveIngredients = () => {
  const { isShow: openAddDialog, toggleDialog: toggleAddDialog } = useDialog();
  const [detailSelected, setDetailSelected] = useState(null);
  const { isLoading, data = [] } = useGetActiveIngredientList();

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
        Add Active Ingredient
      </Button>
      <Table
        dataSource={dataSource}
        columns={columns}
        loading={isLoading}
        onRow={(r) => ({ onClick: () => setDetailSelected(r.id) })}
      />
      {openAddDialog && <AddActiveIngredient onClose={toggleAddDialog} />}
      {Boolean(detailSelected) && (
        <DetailActiveIngredient
          id={detailSelected}
          onClose={() => setDetailSelected(null)}
        />
      )}
    </div>
  );
};

export default ActiveIngredients;
