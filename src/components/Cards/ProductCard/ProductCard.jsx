import { Card, Col } from "antd";
import React from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom";
import "./style.css";
const { Meta } = Card;

<<<<<<< HEAD
const ProductCard = ({ medicines }) => {
  const navigate = useHistory();

  const navigateToProductDetail = () => {
    navigate.push(`/products/${medicines.id}`);
  }

  console.log('navigateToProductDetail', navigateToProductDetail);
=======
const ProductCard = ({ data: product }) => {
  const navigate = useHistory();

  const navigateToProductDetail = () => {
    navigate.push("/products/" + product.id);
  };
>>>>>>> 6dcbf6324d96ad23b5f941f32b3bdac2f418d609

  return (
    <Col
      span={6}
      onClick={navigateToProductDetail}
      style={{ cursor: "pointer" }}
    >
<<<<<<< HEAD
      <Card
        hoverable
        cover={
          <img
            alt={medicines.medicineName}
            src={medicines.image}
            style={{ width: '200px', height: '200px', textAlign: 'center', margin: 'auto' }}
          />
        }
      >
        <Meta
          title={<h3>{medicines.medicineName}</h3>}
          description={
            <>
              <div className="product-info">
                <span className="skin-type">{medicines.specification.detail}</span>
                <span className="skin-type">{medicines.specification.typeName}</span>
              </div>
              <div className="product-origin">
                <span className="origin">{medicines.pharmaceuticalCompanies[0].companyName}</span>
              </div>
=======
      <Card hoverable cover={<img src={product.image} />}>
        <Meta
          title={product.medicineName}
          description={
            <>
              <div className="product-info">
                <span className="volume">
                  {product.specification?.typeName}
                </span>
                <span className="skin-type">
                  {product.specification?.detail}
                </span>
              </div>
              {product.activeIngredients.map((act) => (
                <div className="product-origin" key={act.id}>
                  <span className="origin">{act.ingredientInformation}</span>
                </div>
              ))}
>>>>>>> 6dcbf6324d96ad23b5f941f32b3bdac2f418d609
            </>
          }
        />
      </Card>
    </Col>
  );
};

export default ProductCard;
