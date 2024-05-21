import React from "react";
import "./style.css";
import ProductCard from "../../components/Cards/ProductCard/ProductCard";
import { Row } from "antd";

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

  return (
    <div className="container">
      {categories.map((category, index) => (
        <div key={index} className="category">
          <img src={category.icon} alt={category.label} className="icon" />
          <div className="label">{category.label}</div>
        </div>
      ))}

      <div className="product-container">
        <Row gutter={[16, 16]}>
          {[0, 1, 2, 3, 4, 5].map((i) => (
            <ProductCard key={i} />
          ))}
        </Row>
      </div>
    </div>
  );
}

export default Products;
