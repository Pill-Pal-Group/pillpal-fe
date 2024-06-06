import { Card, Col } from "antd";
import React from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom";
import "./style.css";
const { Meta } = Card;

const ProductCard = ({ medicines }) => {
  const navigate = useHistory();

  const navigateToProductDetail = () => {
    navigate.push(`/products/${medicines.id}`);
  }

  console.log('navigateToProductDetail', navigateToProductDetail);

  return (
    <Col
      span={6}
      onClick={navigateToProductDetail}
      style={{ cursor: "pointer" }}
    >
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
            </>
          }
        />
      </Card>
    </Col>
  );
};

export default ProductCard;
