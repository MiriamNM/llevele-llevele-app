import React, { useState, useEffect } from "react";
import { Card } from "antd";
import { GetAllProducts } from "../../Services/Products";

const MainVendor = ({ email, userData }) => {
  const [dataProduct, setDataProduct] = useState([]);

  const { Meta } = Card;

  useEffect(() => {
    GetAllProducts()
      .then((result) => {
        setDataProduct(result);
      })
      .catch((error) => {
        throw error;
      });
  }, []);

  const { id } = userData.find((user) => user.email === email) || {};
  const { userId } = dataProduct.find(({ userId }) => userId === id) || {};

  return (
    <main className="flex flex-col p-10">
      {id !== userId ? (
        <h2>No hay producto</h2>
      ) : (
        <>
          <h2 className="text-red font-medium text-5xl">Productos</h2>
          <div className="flex items-center justify-center flex-wrap md:pt-4 sm-pt-4">
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
        </>
      )}
    </main>
  );
};

export default MainVendor;
