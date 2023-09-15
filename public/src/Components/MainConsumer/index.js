import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import ContainerCard from "../ContainerCard";

const MainConsumer = ({
  dataProduct,
  vendorSelect,
  userData,
  currentValue,
  onDeleteProduct,
  addProduct, 
  setAddProduct,
  onAddProduct
}) => {
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(0);

  const location = useLocation();

  const { id: idUser } =
    userData.find(({ email }) => email === vendorSelect.toString()) || [];

  const userProducts =
    dataProduct.filter(({ userId }) => userId === idUser) || [];

  const filterWithSearch =
    dataProduct.filter(({ name }) => name === currentValue) || [];

  const filterUserProducts = (data) => {
    const dataFilter =
      data.filter(({ price }) => price >= minPrice && price <= maxPrice) || [];
    return dataFilter;
  };

  return location.pathname === "/admin" ? (
    <ContainerCard
      state={vendorSelect}
      data={userProducts}
      minPrice={minPrice}
      setMinPrice={setMinPrice}
      maxPrice={maxPrice}
      setMaxPrice={setMaxPrice}
      filterUserProducts={filterUserProducts}
      dataProduct={dataProduct}
      onDeleteProduct={onDeleteProduct}
    />
  ) : (
    <ContainerCard
      state={currentValue}
      data={filterWithSearch}
      minPrice={minPrice}
      setMinPrice={setMinPrice}
      maxPrice={maxPrice}
      setMaxPrice={setMaxPrice}
      filterUserProducts={filterUserProducts}
      dataProduct={dataProduct}
      addProduct={addProduct}
      setAddProduct={setAddProduct}
      onAddProduct={onAddProduct}
    />
  );
};

export default MainConsumer;
