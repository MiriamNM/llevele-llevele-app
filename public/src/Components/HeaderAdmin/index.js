import React from "react";
import LogoutButton from "../LogoutButton";
import { Cascader } from "antd";
import logo from "../../Assets/llevele-llevele.png";

const HeaderAdmin = ({ userData, setVendorSelect }) => {
  const VendorUsers = userData.filter(({role}) => role === 'vendor');
  const options = Array.isArray(userData)
    ? VendorUsers.map(({ email }) => ({ value: email, label: email }))
    : [];


  const onChange = (value) => {
    setVendorSelect(value);
  };

  return (
    <header className="container mx-auto p-8 bg-mint">
      <div className="flex items-center justify-between md:flex-wrap">
        <img src={logo} alt="logo" className="mr-4" />
      </div>
      <nav className="flex flex-row pt-3 items-center">
        <div className="flex space-x-4">
          <Cascader options={options} onChange={onChange} />
        </div>
        {<LogoutButton />}
      </nav>
    </header>
  );
};

export default HeaderAdmin;
