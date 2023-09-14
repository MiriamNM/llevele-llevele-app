import React, { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { Space } from 'antd';
import { ShoppingCartOutlined } from "@ant-design/icons";
import ModalCar from "../Modals/ModalCar";

const LogoutButton = ({ setAuth }) => {
  const [open, setOpen] = useState(false);
  const [placement, setPlacement] = useState('right');

  const location = useLocation();

  const showDrawer = () => {
    setOpen(true);
  };
  const onChange = (e) => {
    setPlacement(e.target.value);
  };
  const onClose = () => {
    setOpen(false);
  };

  if (location.pathname === "/customer") {
    return (
      <div className="ml-auto flex items-center">
      <Space>
        <ShoppingCartOutlined className="text-red hover:text-dark text-xl pr-3" onClick={showDrawer} />
      </Space>
      <NavLink
        to="/"
        className="font-poppins text-lg md:text-base sm:text-base px-2 border-none text-red hover:text-dark hover:bg-transparent"
        onClick={() => setAuth(false)}
      >
        Cerrar sesión
      </NavLink>
      {open && <ModalCar placement={placement} onClose={onClose} open={open} />}
    </div>
    );
  }

  return (
    <div className="ml-auto">
      <NavLink
        to="/"
        className="font-poppins text-lg md:text-base sm:text-base px-2 border-none text-red hover:text-dark hover:bg-transparent"
        onClick={() => setAuth(false)}
      >
        Cerrar sesión
      </NavLink>
      {open && <ModalCar placement={placement} onClose={onClose} open={open} />}
    </div>
  );
};

export default LogoutButton;
