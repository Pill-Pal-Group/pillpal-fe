import React, { useMemo, useState } from "react";
import GradientButton from "../../components/button/GradientButton";
import CustomTable from "../../components/table";
import { useGetBrandList } from "../../hooks/useBrandApi";
import useDialog from "../../hooks/useDialog";
import AddBrand from "./_components/AddBrand";
import DeleteBrand from "./_components/DeleteBrand";
import DetailBrand from "./_components/DetailBrand";

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
    width: 100,
  },
  {
    title: "",
    dataIndex: "delete",
    key: "delete",
    width: 100,
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
          <GradientButton
            label={"Chỉnh sửa"}
            type={"warning"}
            onClick={(e) => {
              e.stopPropagation();
              setDetailSelected(item.id);
              toggleUpdate();
            }}
          />
        ),
        delete: (
          <GradientButton
            label={"Xóa"}
            type={"danger"}
            onClick={(e) => {
              e.stopPropagation();
              setDetailSelected(item.id);
              toggleDelete();
            }}
          />
        ),
      };
    });
  }, [data]);

  return (
    <div>
      <GradientButton
        label={"Thêm thương hiệu"}
        onClick={toggleAddDialog}
        style={{ marginBottom: "20px" }}
      />
      <CustomTable
        columns={columns}
        data={dataSource}
        isLoading={isLoading}
        onRowClick={(r) => {
          setDetailSelected(r.id);
          toggleDetail();
        }}
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
