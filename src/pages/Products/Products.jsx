import React from "react";
import "./style.css";
import ProductCard from "../../components/Cards/ProductCard/ProductCard";
import { Button, Row } from "antd";
import useDialog from "../../hooks/useDialog";
import AddProduct from "./_components/AddProduct";
import { useMedicinesApi } from "../../hooks/useMedicinesApi";

function Products() {
  // const categories = [
  //   {
  //     icon: "https://cdn.tgdd.vn//content/my-pham-86x86-86x86.png",
  //     label: "Dược mỹ phẩm",
  //   },
  //   {
  //     icon: "https://cdn.tgdd.vn//content/my-pham-86x86-86x86.png",
  //     label: "Vitamin và khoáng chất",
  //   },
  //   {
  //     icon: "https://cdn.tgdd.vn//content/my-pham-86x86-86x86.png",
  //     label: "Kem chống nắng",
  //   },
  //   {
  //     icon: "https://cdn.tgdd.vn//content/my-pham-86x86-86x86.png",
  //     label: "Bao cao su",
  //   },
  //   {
  //     icon: "https://cdn.tgdd.vn//content/my-pham-86x86-86x86.png",
  //     label: "Tăng sinh lý, bổ thận",
  //   },
  //   {
  //     icon: "https://cdn.tgdd.vn//content/my-pham-86x86-86x86.png",
  //     label: "Chăm sóc cá nhân",
  //   },
  // ];

  const { isShow: openAddDialog, toggleDialog: toggleAddDialog } = useDialog();

  const { data, error, isLoading } = useMedicinesApi();
  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>An error occurred: {error.message}</div>;

  return (
    <>
      <Button type="primary" onClick={toggleAddDialog}>
        Add Medicine
      </Button>

      <div className="container">
        {/* {categories.map((category, index) => (
          <div key={index} className="category">
            <img src={category.icon} alt={category.label} className="icon" />
            <div className="label">{category.label}</div>
          </div>
        ))} */}

        <div className="product-container">
          <Row gutter={[16, 16]}>
            {data.data.map((medicine, index) => (
              <ProductCard key={index} medicines={medicine} />
            ))}
          </Row>
        </div>
      </div>

      {openAddDialog && <AddProduct onClose={toggleAddDialog} />}
    </>
  );
}

export default Products;
