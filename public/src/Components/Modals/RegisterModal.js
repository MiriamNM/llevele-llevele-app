import React from 'react';
import { Modal } from 'antd';

const RegisterModal = ({ handleCancel, visible, onOk }) => {
  return (
    <Modal
      visible={visible}
      onCancel={handleCancel}
      onOk={onOk}
      className="font-poppins text-dark text-xl font-ligth"
      footer={[
        <button
          key="back"
          className="font-poppins text-dark border-water border-5 font-normal text-base rounded px-4 py-2 mr-2 hover:bg-light hover:border-red hover:text-red"
          onClick={handleCancel}
        >
          Cancelar
        </button>,
        <button
          key="submit"
          className="font-poppins text-dark border-water border-5 font-normal text-base rounded px-4 py-2 mr-2 hover:bg-light hover:text-red hover:border-red"
          onClick={onOk}
        >
          Registrarse
        </button>,
      ]}
    >
      <div>
        <h2 className="text-dark text-xl font-base">Ingresa tus datos para registrarte</h2>
        <form className="text-dark flex flex-col justify-start">
          <label
            htmlFor="email"
            id="email"
            className="block text-dark text-lg font-base"
          >
            Correo:
          </label>
          <input
            type="email"
            placeholder="correo@gmail.com"
            className="border rounded w-full py-2 px-3"
          />
          <label
            htmlFor="password"
            id="password"
            className="block text-dark text-lg font-base"
          >
            Contraseña:
          </label>
          <input 
            type="password" 
            placeholder="*******" 
            className="border rounded w-full py-2 px-3"
          />
          <label
            htmlFor="password"
            id="password"
            className="block text-dark text-lg font-base"
          >
            Verifica contraseña:
          </label>
          <input 
            type="password" 
            placeholder="*******" 
            className="border rounded w-full py-2 px-3"
          />
        </form>
      </div>
    </Modal>
  );
};

export default RegisterModal;
