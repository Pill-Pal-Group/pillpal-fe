import React from "react";
import "./style.css";
import ProductCard from "../../components/Cards/ProductCard/ProductCard";
import { Button, Row, Spin } from "antd";
import useDialog from "../../hooks/useDialog";
import AddProduct from "./_components/AddProduct";
import { useMedicinesApi } from "../../hooks/useMedicinesApi";

function Products() {

  const { isShow: openAddDialog, toggleDialog: toggleAddDialog } = useDialog();

  const { data, error, isLoading } = useMedicinesApi();
  if (isLoading)
    return <div style={{ textAlign: 'center', margin: '0 auto' }}>
      <Spin size="large" />
    </div>;
  if (error) return <div>An error occurred: {error.message}</div>;

  return (
    <>
      <Button type="primary" style={{ left: '90%' }} onClick={toggleAddDialog}>
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
            {data.data.map((medicine, id) => (
              <ProductCard key={id} medicines={medicine} />
            ))}
          </Row>
        </div>
      </div>

      {openAddDialog && <AddProduct onClose={toggleAddDialog} />}
    </>
  );
}

export default Products;
