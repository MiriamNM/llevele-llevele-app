import React, { useState } from "react";
import LogoutButton from "../LogoutButton";
import NewProductModal from "../Modals/NewProductModal";
import SearchInput from "../SearchInput";

const HeaderVendor = ({
  email,
  userData,
  dataProduct,
  setCurrentValue,
  setAuth,
  error,
  setError,
  onClickCreateProduct,
}) => {

  const resetData = () => {
    setError("");
  };

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modal, setModal] = useState(null);

  const showModal = (component) => {
    setModal(component);
    setIsModalOpen(true);
    resetData();
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <header className="container mx-auto p-8 bg-mint">
      {<SearchInput setCurrentValue={setCurrentValue} />}
      <nav className="flex flex-row pt-3 items-center md:flex-wrap sm:flex-wrap">
        <div className="flex space-x-4 md:py-2 sm:py-2">
          <button
            className="font-poppins text-lg md:text-base sm:text-base px-2 border-none hover:text-red hover:bg-transparent"
            onClick={() => showModal("NewProduct")}
          >
            Nuevo Producto
          </button>
        </div>
        {<LogoutButton setAuth={setAuth} dataProduct={dataProduct} />}
      </nav>
      {modal === "NewProduct" && isModalOpen && (
        <NewProductModal
          handleCancel={handleCancel}
          open={isModalOpen}
          onOk={handleOk}
          productData={dataProduct}
          userData={userData}
          email={email}
          error={error}
          setError={setError}
          onClickCreateProduct={onClickCreateProduct}
        />
      )}
    </header>
  );
};

export default HeaderVendor;
