import React from "react";
import { useLocation } from "react-router-dom";
import { Card } from "antd";
import { CloseCircleOutlined } from "@ant-design/icons";

const ProductCard = ({
  product,
  onDeleteProduct,
  addProduct,
  setAddProduct,
  dataProduct,
  onAddProduct
}) => {
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
        <button
          className="flex pt-4 pl-16 text-water hover:text-red"
          onClick={() => onAddProduct(product)}
        >
          Agregar a Carrito
        </button>
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
