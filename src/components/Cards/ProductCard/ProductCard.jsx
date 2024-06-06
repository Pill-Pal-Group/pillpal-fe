import { Badge, Card, Col } from "antd";
import React from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom";
import "./style.css";
const { Meta } = Card;

const ProductCard = ({ data: product }) => {
  const navigate = useHistory();

  const navigateToProductDetail = () => {
    navigate.push("/products/" + product.id);
  };

  return (
    <Col
      span={6}
      onClick={navigateToProductDetail}
      style={{ cursor: "pointer" }}
    >
      <Badge.Ribbon text="-20%" color="red">
        <Card hoverable cover={<img src={product.image} />}>
          <Meta
            title={product.medicineName}
            description={
              <>
                <div className="product-info">
                  <span className="volume">
                    {product.specification.typeName}
                  </span>
                  <span className="skin-type">
                    {product.specification.detail}
                  </span>
                </div>
                {product.activeIngredients.map((act) => (
                  <div className="product-origin" key={act.id}>
                    <span className="origin">{act.ingredientInformation}</span>
                  </div>
                ))}
              </>
            }
          />
        </Card>
      </Badge.Ribbon>
    </Col>
  );
};

export default ProductCard;
