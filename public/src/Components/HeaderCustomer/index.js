import React from "react";
import LogoutButton from "../LogoutButton";
import SearchInput from "../SearchInput";

const HeaderCustomer = ({ setCurrentValue, setAuth }) => {
  return (
    <header className="container mx-auto p-8 bg-mint">
      {<SearchInput setCurrentValue={setCurrentValue} />}
      <nav className="flex flex-row pt-3 items-center">
        <LogoutButton setAuth={setAuth} />
      </nav>
    </header>
  );
};

export default HeaderCustomer;
