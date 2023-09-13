import React from "react";
import { useLocation } from "react-router-dom";
import { Card } from "antd";
import { CloseCircleOutlined } from "@ant-design/icons";

const ProductCard = ({ product, onDeleteProduct }) => {
  const { Meta } = Card;
  const location = useLocation();

  if (location.pathname === "/customer") {
    return (
      <Card
        key={product.id}
        hoverable
        style={{ width: 240 }}
        className="mb-4 mr-4"
      >
        <Meta
          title={product.name}
          description={`${product.description} - $${product.price}`}
        />
      </Card>
    );
  }

  return (
    <Card
      key={product.id}
      hoverable
      style={{ width: 240 }}
      className="mb-4 mr-4"
    >
      <div className="flex justify-between">
        <Meta
          title={product.name}
          description={`${product.description} - $${product.price}`}
        />
        <CloseCircleOutlined onClick={() => onDeleteProduct(product.id)} />
      </div>
    </Card>
  );
};

export default ProductCard;
