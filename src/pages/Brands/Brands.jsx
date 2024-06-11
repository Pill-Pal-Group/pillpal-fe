import { Button, Table } from "antd";
import React, { act, useMemo, useState } from "react";
import useDialog from "../../hooks/useDialog";
import AddBrand from "./_components/AddBrand";
import { useGetBrandList } from "../../hooks/useBrandApi";
import DetailBrand from "./_components/DetailBrand";

const Brands = () => {
  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Link",
      dataIndex: "link",
      key: "link",
    },
    {
      title: "Logo",
      dataIndex: "logo",
      key: "logo",
    },
    {
      title: "Active",
      dataIndex: "active",
      key: "active",
    },
  ];

  const { isShow: openAddDialog, toggleDialog: toggleAddDialog } = useDialog();
  const [detailSelected, setDetailSelected] = useState(null);
  const { isLoading, data = [] } = useGetBrandList();

  const dataSource = useMemo(() => {
    return data.map((item) => {
      return {
        ...item,
        name: item.brandCode,
        link: item.brandUrl,
        logo: <img src={item.brandLogo} style={{ width: 70 }} />,
        key: item._id,
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
        Add Branch
      </Button>
      <Table
        dataSource={dataSource}
        columns={columns}
        loading={isLoading}
        onRow={(r) => ({ onClick: () => setDetailSelected(r.id) })}
      />
      {openAddDialog && <AddBrand onClose={toggleAddDialog} />}
      {Boolean(detailSelected) && (
        <DetailBrand
          id={detailSelected}
          onClose={() => setDetailSelected(null)}
        />
      )}
    </div>
  );
};

export default Brands;
