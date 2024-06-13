import { Button, Spin, Table } from "antd";
import React, { useMemo, useState } from "react";
import useDialog from "../../hooks/useDialog";
import AddPharmaceutical from "./_components/AddPharmaceutical";
import { useGetPharmaceuticalList } from "../../hooks/usePharmaceutialApi";
import DetailPharmaceutical from "./_components/DetailPharmaceutical";

const Pharmaceuticals = () => {
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
  ];

  const { isShow: openAddDialog, toggleDialog: toggleAddDialog } = useDialog();
  const [selectedPharmaceutical, setSelectedPharmaceutical] = useState(null);
  const { data = [], isLoading } = useGetPharmaceuticalList();
  const dataSource = useMemo(() => {
    return data.map((item) => ({ ...item, nation: item.nation.nationName }));
  }, [data]);

  return (
    <div>
      <Button
        type="primary"
        style={{ marginBottom: 16 }}
        onClick={toggleAddDialog}
      >
        Add Pharmaceutical
      </Button>
      <Table
        dataSource={dataSource}
        columns={columns}
        loading={{ indicator: <Spin />, spinning: isLoading }}
        onRow={(r) => ({ onClick: () => setSelectedPharmaceutical(r.id) })}
      />
      {Boolean(selectedPharmaceutical) && (
        <DetailPharmaceutical
          id={selectedPharmaceutical}
          onClose={() => setSelectedPharmaceutical(null)}
        />
      )}
      {openAddDialog && <AddPharmaceutical onClose={toggleAddDialog} />}
    </div>
  );
};

export default Pharmaceuticals;
