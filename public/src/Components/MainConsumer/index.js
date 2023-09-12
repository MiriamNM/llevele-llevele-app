import React, { useState, useEffect } from "react";
import { Card } from "antd";
import { GetAllProducts } from "../../Services/Products";

const MainConsumer = () => {
  const [dataProduct, setDataProduct] = useState([]);

  useEffect(() => {
    GetAllProducts()
      .then((result) => {
        setDataProduct(result);
      })
      .catch((error) => {
        throw error;
      });
  }, []);

  const { Meta } = Card;
  return (
    <main className="flex flex-col p-10">
      <h2 className="text-red font-medium text-5xl">Productos</h2>
      <div className="flex flex-row py-2">
        <label className="pr-2">Rango de precio:</label>
        <input
          type="number"
          style={{ borderColor: "#49BEB7" }}
          className="border rounded w-20 md:w-12 sm:w-12"
        />
        <p className="px-1">-</p>
        <input
          type="number"
          style={{ borderColor: "#49BEB7" }}
          className="border rounded w-20 md:w-12  sm:w-12"
        />
      </div>
      <div className="flex items-center justify-center md:pt-8 sm:pt-8">
        {dataProduct.map((product) => {
          return (
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
          );
        })}
      </div>
    </main>
  );
};

export default MainConsumer;
