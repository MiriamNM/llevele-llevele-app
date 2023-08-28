import React, { useState } from 'react';
import RegisterModal from '../Modals/RegisterModal';
import phoneImg from '../../Assets/phoneImg.png';

const Main = () => {
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
    <main className="flex flex-wrap items-center justify-center">
      <div>
        <img
          src={phoneImg}
          alt="phoneImg"
          className="w-85 md:w-64 mb-4 md:mb-0 pr-8"
        />
      </div>
      <div className="flex flex-col">
        <h2 className="text-red font-medium text-5xl">Crea tu producto</h2>
        <p className="text-dark font-medium text-3xl text-justify">
          Registrate y organiza de <br />manera profesional  <br />tu inventario.
        </p>
        <button
          onClick={() => showModal('Register')} 
          className="text-red  bg-mint font-normal text-base rounded px-4 py-2 mt-4 hover:bg-red hover:border-light hover:text-ligth"
        >
          Registrate y administra tu inventario
        </button>
      </div>
      {modal === 'Register' && isModalOpen && (
          <RegisterModal
            handleCancel={handleCancel}
            visible={isModalOpen}
            onOk={handleOk}
          />
        )}
    </main>
  );
};

export default Main;
