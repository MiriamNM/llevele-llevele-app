import React from "react";
import ProductCard from "../ProductCard";
import ProductInputs from "../ProductInputs";

const ContainerCard = ({
  state,
  data,
  minPrice,
  setMinPrice,
  maxPrice,
  setMaxPrice,
  filterUserProducts,
  dataProduct,
}) => {
  return (
    <>
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
        <div className="flex items-center justify-center flex-wrap md:pt-4 sm-pt-4">
          {state.length > 0
            ? maxPrice && minPrice
              ? filterUserProducts(data).map((product) => {
                  return <ProductCard key={product.id} product={product} />;
                })
              : data.map((product) => {
                  return <ProductCard key={product.id} product={product} />;
                })
            : maxPrice && minPrice
            ? filterUserProducts(dataProduct).map((product) => {
                return <ProductCard key={product.id} product={product} />;
              })
            : dataProduct.map((product) => {
                return <ProductCard key={product.id} product={product} />;
              })}
        </div>
      </main>
    </>
  );
};

export default ContainerCard;
