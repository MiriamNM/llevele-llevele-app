import React from "react";
import LogoutButton from "../LogoutButton";
import SearchInput from "../SearchInput";

const HeaderCustomer = () => {
  return (
    <header className="container mx-auto p-8 bg-mint">
      {<SearchInput />}
      <nav className="flex flex-row pt-3 items-center">
        {<LogoutButton />}
      </nav>
    </header>
  );
};

export default HeaderCustomer;
