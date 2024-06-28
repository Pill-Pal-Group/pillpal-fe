import React from "react";
import "./style.css";
import ProductCard from "../../components/Cards/ProductCard/ProductCard";
import { Button, Row, Spin } from "antd";
import useDialog from "../../hooks/useDialog";
import AddProduct from "./_components/AddProduct";
<<<<<<< HEAD
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
=======
import { useGetListMedicine } from "../../hooks/useMedicineApi";
import { useGetCategoryList } from "../../hooks/useCategoryApi";
import GradientButton from "../../components/button/GradientButton";

function Products() {
  const { isShow: openAddDialog, toggleDialog: toggleAddDialog } = useDialog();

  const { data = [], isLoading } = useGetListMedicine();

  // API: GET CATEGORIES
  const { data: categoriesData = [], isLoading: isLoadingCategories } =
    useGetCategoryList();

  return (
    <>
      <GradientButton label="Thêm thuốc" onClick={toggleAddDialog} />

      <div className="container">
        {categoriesData.map((category, index) => (
>>>>>>> 6dcbf6324d96ad23b5f941f32b3bdac2f418d609
          <div key={index} className="category">
            <div className="label">{category.categoryName}</div>
          </div>
        ))} */}

        {isLoading && <div>Loading...</div>}
        <div className="product-container">
          <Row gutter={[16, 16]}>
<<<<<<< HEAD
            {data.data.map((medicine, id) => (
              <ProductCard key={id} medicines={medicine} />
            ))}
=======
            {data &&
              data.map((item, index) => (
                <ProductCard key={index} data={item} />
              ))}
>>>>>>> 6dcbf6324d96ad23b5f941f32b3bdac2f418d609
          </Row>
        </div>
      </div>

      {openAddDialog && <AddProduct onClose={toggleAddDialog} />}
    </>
  );
}

export default Products;
