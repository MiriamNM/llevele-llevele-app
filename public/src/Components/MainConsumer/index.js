import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import { Card } from "antd";

const MainConsumer = ({ dataProduct, vendorSelect, userData }) => {
  const [minPrice, setMinPrice] = useState();
  const [maxPrice, setMaxPrice] = useState();

  const { Meta } = Card;
  const location = useLocation();

  const { id: idUser } =
  userData.find(({ email }) => email === vendorSelect.toString()) || [];
  const userProducts =
    dataProduct.filter(({ userId }) => userId === idUser) || [];
  const filterUserProducts =
    userProducts.filter(
      ({ price }) => price >= minPrice && price <= maxPrice
    ) || [];

  return location.pathname === "/admin" ? (
    <main className="flex flex-col p-10">
      <h2 className="text-red font-medium text-5xl">Productos</h2>
      <div className="flex flex-row py-2">
        <label className="pr-2">Rango de precio:</label>
        <input
          type="number"
          value={minPrice}
          style={{ borderColor: "#49BEB7" }}
          className="border rounded w-20 md:w-12 sm:w-12"
          onChange={(e) => setMinPrice(e.target.value)}
        />
        <p className="px-1">-</p>
        <input
          type="number"
          value={maxPrice}
          style={{ borderColor: "#49BEB7" }}
          className="border rounded w-20 md:w-12  sm:w-12"
          onChange={(e) => setMaxPrice(e.target.value)}
        />
      </div>
      <div className="flex items-center justify-center md:pt-8 sm:pt-8">
        {maxPrice && minPrice
          ? filterUserProducts.map((product) => {
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
            })
          : userProducts.map((product) => {
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
  ) : (
    <main className="flex flex-col p-10">
      <h2 className="text-red font-medium text-5xl">Productos</h2>
      <div className="flex flex-row py-2">
        <label className="pr-2">Rango de precio:</label>
        <input
          type="number"
          value={minPrice}
          style={{ borderColor: "#49BEB7" }}
          className="border rounded w-20 md:w-12 sm:w-12"
          onChange={(e) => setMinPrice(e.target.value)}
        />
        <p className="px-1">-</p>
        <input
          type="number"
          value={maxPrice}
          style={{ borderColor: "#49BEB7" }}
          className="border rounded w-20 md:w-12  sm:w-12"
          onChange={(e) => setMaxPrice(e.target.value)}
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
