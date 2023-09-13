import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import ProductCard from "../ProductCard";
import ProductInputs from "../ProductInputs";

const MainConsumer = ({
  dataProduct,
  vendorSelect,
  userData,
  currentValue,
}) => {
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(0);

  const location = useLocation();

  const { id: idUser } =
    userData.find(({ email }) => email === vendorSelect.toString()) || [];

  const userProducts =
    dataProduct.filter(({ userId }) => userId === idUser) || [];

  const filterUserProducts =
    userProducts.filter(
      ({ price }) => price >= minPrice && price <= maxPrice
    ) || [];

  const filterWithSearch =
    dataProduct.filter(({ name }) => name === currentValue) || [];

  return location.pathname === "/admin" ? (
    <main className="flex flex-col p-10">
      <h2 className="text-red font-medium text-5xl">Productos</h2>
      {
        <ProductInputs
          minPrice={minPrice}
          setMinPrice={setMinPrice}
          maxPrice={maxPrice}
          setMaxPrice={setMaxPrice}
        />
      }
      <div className="flex items-center justify-center md:pt-8 sm:pt-8">
        {maxPrice && minPrice
          ? filterUserProducts.map((product) => {
              return <ProductCard product={product} />;
            })
          : userProducts.map((product) => {
              return <ProductCard product={product} />;
            })}
      </div>
    </main>
  ) : (
    <main className="flex flex-col p-10">
      <h2 className="text-red font-medium text-5xl">Productos</h2>
      {
        <ProductInputs
          minPrice={minPrice}
          setMinPrice={setMinPrice}
          maxPrice={maxPrice}
          setMaxPrice={setMaxPrice}
        />
      }
      <div className="flex items-center justify-center md:pt-8 sm:pt-8">
        {currentValue
          ? filterWithSearch.map((product) => {
              return <ProductCard product={product} />;
            })
          : dataProduct.map((product) => {
              return <ProductCard product={product} />;
            })}
      </div>
    </main>
  );
};

export default MainConsumer;
