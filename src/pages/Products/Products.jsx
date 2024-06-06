import React from "react";
import "./style.css";
import ProductCard from "../../components/Cards/ProductCard/ProductCard";
import { Button, Row } from "antd";
import useDialog from "../../hooks/useDialog";
import AddProduct from "./_components/AddProduct";
import { useGetListMedicine } from "../../hooks/useMedicineApi";

function Products() {
  const categories = [
    {
      icon: "https://cdn.tgdd.vn//content/my-pham-86x86-86x86.png",
      label: "Dược mỹ phẩm",
    },
    {
      icon: "https://cdn.tgdd.vn//content/my-pham-86x86-86x86.png",
      label: "Vitamin và khoáng chất",
    },
    {
      icon: "https://cdn.tgdd.vn//content/my-pham-86x86-86x86.png",
      label: "Kem chống nắng",
    },
    {
      icon: "https://cdn.tgdd.vn//content/my-pham-86x86-86x86.png",
      label: "Bao cao su",
    },
    {
      icon: "https://cdn.tgdd.vn//content/my-pham-86x86-86x86.png",
      label: "Tăng sinh lý, bổ thận",
    },
    {
      icon: "https://cdn.tgdd.vn//content/my-pham-86x86-86x86.png",
      label: "Chăm sóc cá nhân",
    },
  ];

  const { isShow: openAddDialog, toggleDialog: toggleAddDialog } = useDialog();

  const { data = [], error, isLoading } = useGetListMedicine();

  return (
    <>
      <Button type="primary" onClick={toggleAddDialog}>
        Add Medicine
      </Button>

      <div className="container">
        {categories.map((category, index) => (
          <div key={index} className="category">
            <img src={category.icon} alt={category.label} className="icon" />
            <div className="label">{category.label}</div>
          </div>
        ))}

        {isLoading && <div>Loading...</div>}
        <div className="product-container">
          <Row gutter={[16, 16]}>
            {data &&
              data.map((item, index) => (
                <ProductCard key={index} data={item} />
              ))}
          </Row>
        </div>
      </div>

      {openAddDialog && <AddProduct onClose={toggleAddDialog} />}
    </>
  );
}

export default Products;
