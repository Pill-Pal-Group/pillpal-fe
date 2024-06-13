import { Button, Spin, Table } from "antd";
import React, { useMemo, useState } from "react";
import useDialog from "../../hooks/useDialog";
import { useGetNationList } from "../../hooks/useNationApi";
import DetailNation from "./_components/DetailNation";
import AddNation from "./_components/AddNation";

const Nations = () => {
  const columns = [
    {
      title: "Code",
      dataIndex: "nationCode",
      key: "nationCode",
    },
    {
      title: "Name",
      dataIndex: "nationName",
      key: "nationName",
    },
  ];

  const [selectedDetail, setSelectedDetail] = useState(null);
  const { isShow: openAddDialog, toggleDialog: toggleAddDialog } = useDialog();
  const { data = [], isLoading } = useGetNationList();

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
        Add Nation
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
        <DetailNation
          id={selectedDetail}
          onClose={() => setSelectedDetail(null)}
        />
      )}
    </div>
  );
};

export default Nations;
