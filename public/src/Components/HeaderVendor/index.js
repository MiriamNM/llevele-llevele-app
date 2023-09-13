import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import logo from "../../Assets/llevele-llevele.png";
import NewProductModal from "../Modals/NewProductModal";

const HeaderVendor = ({ email, userData, dataProduct }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modal, setModal] = useState(null);

  const showModal = (component) => {
    setModal(component);
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <header className="container mx-auto p-8 bg-mint">
      <div className="flex items-center justify-between md:flex-wrap">
        <div className="flex items-center">
          <img src={logo} alt="logo" className="mr-4" />
        </div>
        <div className="flex space-x-4 items-center md:mt-3 sm:mt-3">
          <input
            type="search"
            className="rounded border-mintTwo w-80 h-9 md:w-60 sm:w-60"
            placeholder="producto o sku"
          />
          <button className="bg-ligth text-dark border-mintTwo px-4 py-2 md:px-2 sm:px-2 rounded hover:text-red">
            Buscar
          </button>
        </div>
      </div>
      <nav className="flex flex-row pt-3 items-center md:flex-wrap sm:flex-wrap">
        <div className="flex space-x-4 md:py-2 sm:py-2">
          <button
            className="font-poppins text-lg md:text-base sm:text-base px-2 border-none hover:text-red hover:bg-transparent"
            onClick={() => showModal("NewProduct")}
          >
            Nuevo Producto
          </button>
        </div>
        <div className="ml-auto">
          <NavLink
            to="/"
            className="font-poppins text-lg md:text-base sm:text-base px-2 border-none text-red hover:text-dark hover:bg-transparent"
          >
            Cerrar sesión
          </NavLink>
        </div>
      </nav>
      {modal === "NewProduct" && isModalOpen && (
        <NewProductModal
          handleCancel={handleCancel}
          visible={isModalOpen}
          onOk={handleOk}
          productData={dataProduct}
          userData={userData}
          email={email}
        />
      )}
    </header>
  );
};

export default HeaderVendor;
