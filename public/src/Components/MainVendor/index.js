import React from "react";
import ProductCard from "../ProductCard";

const MainVendor = ({
  email,
  userData,
  dataProduct,
  currentValue,
  onDeleteProduct
}) => {
  const { id } = userData.find((user) => user.email === email) || {};
  const { userId } = dataProduct.find(({ userId }) => userId === id) || {};
  const userDataProducts =
    dataProduct.filter(({ userId }) => userId === id) || {};
  const filterWithSearch =
    userDataProducts.filter(({ name }) => name === currentValue) || [];

  return (
    <main className="flex flex-col p-10">
      {id !== userId ? (
        <h2>No hay producto</h2>
      ) : (
        <>
          <h2 className="text-red font-medium text-5xl pb-6">Productos</h2>
          <div className="flex items-center justify-center flex-wrap md:pt-4 sm-pt-4">
            {currentValue.length
              ? filterWithSearch.map((product) => {
                  return (
                    <ProductCard
                      key={product.id}
                      product={product}
                      onDeleteProduct={onDeleteProduct}
                    />
                  );
                })
              : userDataProducts.map((product) => {
                  return (
                    <ProductCard
                      key={product.id}
                      product={product}
                      onDeleteProduct={onDeleteProduct}
                    />
                  );
                })}
          </div>
        </>
      )}
    </main>
  );
};

export default MainVendor;
