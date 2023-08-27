import React from 'react';
import { Modal } from 'antd';

const NewProductModal = ({ handleCancel, visible, onOk }) => {
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
          Guardar
        </button>,
      ]}
    >
      <div>
        <h2 className="text-dark text-xl font-base">Crea tu nuevo producto:</h2>
        <form className="text-dark flex flex-col justify-start">
          <label
            htmlFor="text"
            id="text"
            className="block text-dark text-lg font-base"
          >
            Nombre del producto:
          </label>
          <input
            type="text"
            placeholder="Producto"
            className="border rounded w-full py-2 px-3"
          />
          <label
            htmlFor="number"
            id="number"
            className="block text-dark text-lg font-base"
          >
            Sku:
          </label>
          <input
            type="number"
            placeholder="Sku"
            className="border rounded w-full py-2 px-3"
          />
          <label
            htmlFor="number"
            id="number"
            className="block text-dark text-lg font-base"
          >
            Cantidad:
          </label>
          <input
            type="number"
            placeholder="Cantidad"
            className="border rounded w-full py-2 px-3"
          />
          <label
            htmlFor="number"
            id="number"
            className="block text-dark text-lg font-base"
          >
            Precio:
          </label>
          <input
            type="number"
            placeholder="Precio"
            className="border rounded w-full py-2 px-3"
          />
        </form>
      </div>
    </Modal>
  );
};

export default NewProductModal;