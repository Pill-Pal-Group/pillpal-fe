import React from "react";
import "./style.css";
import ProductCard from "../../components/Cards/ProductCard/ProductCard";
import { Button, Row } from "antd";
import useDialog from "../../hooks/useDialog";
import AddProduct from "./_components/AddProduct";
import { useGetListMedicine } from "../../hooks/useMedicineApi";
import { useGetCategoryList } from "../../hooks/useCategoryApi";

function Products() {
  const { isShow: openAddDialog, toggleDialog: toggleAddDialog } = useDialog();

  const { data = [], isLoading } = useGetListMedicine();

  // API: GET CATEGORIES
  const { data: categoriesData = [], isLoading: isLoadingCategories } =
    useGetCategoryList();

  return (
    <>
      <Button type="primary" onClick={toggleAddDialog}>
        Thêm thuốc
      </Button>

      <div className="container">
        {categoriesData.map((category, index) => (
          <div key={index} className="category">
            <div className="label">{category.categoryName}</div>
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
