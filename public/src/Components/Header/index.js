import React, { useState } from 'react';
import logo from '../../Assets/llevele-llevele.png';
import RegisterModal from '../Modals/RegisterModal';
import LoginModal from '../Modals/LoginModal';

const Header = () => {
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
    <header className="container mx-auto flex items-center justify-between p-8 bg-mint">
      <div className="flex justify-start">
        <img src={logo} alt="logo" />
      </div>
      <nav>
        <ul className="flex space-x-4">
          <li>
            <button
              className="font-poppins text-lg pr-4 md:text-base sm:text-base px-2 border-none hover:text-red hover:bg-transparent"
              onClick={() => showModal('Register')}
            >
              Registrate
            </button>
          </li>
          <li>
            <button
              className="font-poppins text-lg pr-4 md:text-base sm:text-base px-2 border-none hover:text-red hover:bg-transparent"
              onClick={() => showModal('Login')}
            >
              Inicia sesión
            </button>
          </li>
        </ul>
        {modal === 'Register' && isModalOpen && (
          <RegisterModal
            handleCancel={handleCancel}
            visible={isModalOpen}
            onOk={handleOk}
          />
        )}
        {modal === 'Login' && isModalOpen && (
          <LoginModal
            handleCancel={handleCancel}
            visible={isModalOpen}
            onOk={handleOk}
          />
        )}
      </nav>
    </header>
  );
};

export default Header;
