import React, { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { Space } from "antd";
import { ShoppingCartOutlined } from "@ant-design/icons";
import ModalCar from "../Modals/ModalCar";

const LogoutButton = ({
  setAuth,
  addProduct,
  onDeleteCartProduct,
  onAddProduct,
}) => {
  const [open, setOpen] = useState(false);

  const location = useLocation();

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  if (location.pathname === "/customer") {
    return (
      <div className="ml-auto flex items-center">
        <Space>
          <ShoppingCartOutlined
            className="text-red hover:text-dark text-xl pr-3"
            onClick={showDrawer}
          />
        </Space>
        <NavLink
          to="/"
          className="font-poppins text-lg md:text-base sm:text-base px-2 border-none text-red hover:text-dark hover:bg-transparent"
          onClick={() => setAuth(false)}
        >
          Cerrar sesión
        </NavLink>
        {open && (
          <ModalCar
            onClose={onClose}
            open={open}
            addProduct={addProduct}
            onAddProduct={onAddProduct}
            onDeleteCartProduct={onDeleteCartProduct}
          />
        )}
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
    </div>
  );
};

export default LogoutButton;
