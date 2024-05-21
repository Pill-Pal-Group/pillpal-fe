import { Badge, Card, Col } from "antd";
import React from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom";
import "./style.css";
const { Meta } = Card;

const ProductCard = () => {
  const navigate = useHistory();

  const navigateToProductDetail = () => {
    navigate.push("/products/1");
  };

  return (
    <Col
      span={6}
      onClick={navigateToProductDetail}
      style={{ cursor: "pointer" }}
    >
      <Badge.Ribbon text="-20%" color="red">
        <Card
          hoverable
          cover={
            <img
              alt="Kem La Roche-Posay Effaclar A.I giảm mụn chuyên biệt"
              src="https://cdn.tgdd.vn/Products/Images/2504/174340/laroche-posay-effaclar-purifying-foaming-gel-200ml-070323-050348-600x600.jpg"
            />
          }
        >
          <Meta
            title="Kem La Roche-Posay Effaclar A.I giảm mụn chuyên biệt"
            description={
              <>
                <div className="product-info">
                  <span className="volume">15ml</span>
                  <span className="skin-type">Da dầu</span>
                </div>
                <div className="product-origin">
                  <span className="origin">Nhập khẩu Pháp</span>
                  <span className="benefit">Giảm mụn chuyên dụng</span>
                </div>
                <div className="product-pricing">
                  <span className="price">488.000₫</span>
                  <span className="old-price">610.000₫</span>
                </div>
              </>
            }
          />
        </Card>
      </Badge.Ribbon>
    </Col>
  );
};

export default ProductCard;
