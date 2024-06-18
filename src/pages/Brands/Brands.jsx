import { Button, Table } from "antd";
import React, { act, useMemo, useState } from "react";
import useDialog from "../../hooks/useDialog";
import AddBrand from "./_components/AddBrand";
import { useGetBrandList } from "../../hooks/useBrandApi";
import DetailBrand from "./_components/DetailBrand";
import DeleteBrand from "./_components/DeleteBrand";

const columns = [
  {
    title: "Mã",
    dataIndex: "name",
    key: "name",
  },
  {
    title: "URL",
    dataIndex: "link",
    key: "link",
  },
  {
    title: "Logo",
    dataIndex: "logo",
    key: "logo",
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
const Brands = () => {
  // api get brand list
  const { isLoading, data = [] } = useGetBrandList();

  // dialog state
  const { isShow: openDetail, toggleDialog: toggleDetail } = useDialog();
  const { isShow: openAddDialog, toggleDialog: toggleAddDialog } = useDialog();
  const { isShow: openDelete, toggleDialog: toggleDelete } = useDialog();
  const { isShow: openUpdate, toggleDialog: toggleUpdate } = useDialog();

  const [detailSelected, setDetailSelected] = useState(null);

  const dataSource = useMemo(() => {
    return data.map((item) => {
      return {
        ...item,
        name: item.brandCode,
        link: item.brandUrl,
        logo: <img src={item.brandLogo} style={{ width: 70 }} />,
        key: item._id,
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
        Thêm thương hiệu
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
      {openAddDialog && <AddBrand onClose={toggleAddDialog} />}
      {openDetail && (
        <DetailBrand
          id={detailSelected}
          onClose={() => {
            setDetailSelected(null);
            toggleDetail();
          }}
        />
      )}
      {openUpdate && (
        <AddBrand
          onClose={() => {
            setDetailSelected(null);
            toggleUpdate();
          }}
          id={detailSelected}
        />
      )}

      {openDelete && (
        <DeleteBrand
          onClose={() => {
            setDetailSelected(null);
            toggleDelete();
          }}
          id={detailSelected}
        />
      )}
    </div>
  );
};

export default Brands;
