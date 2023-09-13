import React from "react";
import logo from "../../Assets/llevele-llevele.png";

const SearchInput = ({ setCurrentValue }) => {
  const onChange = (value) => {
    setCurrentValue(value);
  };

  return (
    <div className="flex items-center justify-between md:flex-wrap">
        <div className="flex items-center">
          <img src={logo} alt="logo" className="mr-4" />
        </div>
        <div className="flex space-x-4 items-center md:mt-3 sm:mt-3">
          <input
            type="search"
            className="rounded border-mintTwo w-80 h-9 md:w-60 sm:w-60"
            placeholder="Busca el producto"
            onChange={(e) => onChange(e.target.value)}
          />
        </div>
      </div>
  );
};

export default SearchInput;
