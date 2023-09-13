import React from "react";

const ProductInputs = ({ minPrice, setMinPrice, maxPrice, setMaxPrice }) => {
  return (
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
  );
};

export default ProductInputs;
