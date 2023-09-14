import React from "react";
import LogoutButton from "../LogoutButton";
import SearchInput from "../SearchInput";

const HeaderCustomer = ({
  setCurrentValue,
  setAuth,
  addProduct,
  onAddProduct,
  onDeleteCartProduct,
}) => {
  return (
    <header className="container mx-auto p-8 bg-mint">
      {<SearchInput setCurrentValue={setCurrentValue} />}
      <nav className="flex flex-row pt-3 items-center">
        <LogoutButton
          setAuth={setAuth}
          addProduct={addProduct}
          onAddProduct={onAddProduct}
          onDeleteCartProduct={onDeleteCartProduct}
        />
      </nav>
    </header>
  );
};

export default HeaderCustomer;
