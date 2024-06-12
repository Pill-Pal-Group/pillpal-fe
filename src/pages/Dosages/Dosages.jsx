import { Button, Spin, Table } from "antd";
import React, { useMemo, useState } from "react";
import useDialog from "../../hooks/useDialog";
import AddDosage from "./_components/AddDosage";
import { useGetDosageList } from "../../hooks/useDosageApi";
import DetailDosage from "./_components/DetailDosage";

const Dosages = () => {
  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Active",
      dataIndex: "active",
      key: "active",
    },
  ];

  const [selectedDetail, setSelectedDetail] = useState(null);
  const { isShow: openAddDialog, toggleDialog: toggleAddDialog } = useDialog();
  const { data = [], isLoading } = useGetDosageList();

  const dataSource = useMemo(() => {
    return data.map((item) => {
      return {
        id: item.id,
        name: item.formName,
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
        Add Dosage
      </Button>
      <Table
        dataSource={dataSource}
        columns={columns}
        loading={{ indicator: <Spin />, spinning: isLoading }}
        onRow={(row) => ({
          onClick: () => setSelectedDetail(row.id),
        })}
      />
      {openAddDialog && <AddDosage onClose={toggleAddDialog} />}
      {Boolean(selectedDetail) && (
        <DetailDosage
          id={selectedDetail}
          onClose={() => setSelectedDetail(null)}
        />
      )}
    </div>
  );
};

export default Dosages;
