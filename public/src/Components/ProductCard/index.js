import React from "react";
import { Card } from "antd";

const ProductCard = ({ product }) => {
  const { Meta } = Card;

  return (
    <>
      <Card
        key={product.id}
        hoverable
        style={{ width: 240 }}
        // cover={
        //   <img
        //     alt="example"
        //     src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
        //   />
        // }
        className="mb-4 mr-4"
      >
        <Meta
          title={product.name}
          description={`${product.description} - $${product.price}`}
        />
      </Card>
    </>
  );
};

export default ProductCard;
