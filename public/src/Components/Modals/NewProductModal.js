import React, { useState } from "react";
import { Modal } from "antd";
import { CreateNewProduct } from "../../Services/Products";

const NewProductModal = ({ handleCancel, visible, onOk, userData, email }) => {
  const { id: idUser } = userData.find(user => user.email === email);
  const [formData, setFormData] = useState({
    name: "",
    image: "img",
    description: "",
    price: 0,
    quality: 0,
    sku: 0,
    userId: idUser,
  });
  const [error, setError] = useState("");

  const onClickCreateProduct = async () => {
    try {
      await CreateNewProduct(formData);
      onOk();
    } catch (error) {
      setError("El producto ya existe, intenta de nuevo.");
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onClickCreateProduct();
  };

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
          onClick={onClickCreateProduct}
        >
          Guardar
        </button>,
      ]}
    >
      <div>
        <h2 className="text-dark text-xl font-base">Crea tu nuevo producto:</h2>
        <form
          className="text-dark flex flex-col justify-start"
          onSubmit={handleSubmit}
        >
          <label htmlFor="text" className="block text-dark text-lg font-base">
            Nombre del producto:
          </label>
          <input
            type="text"
            placeholder="Producto"
            className="border rounded w-full py-2 px-3"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
          <label htmlFor="text" className="block text-dark text-lg font-base">
            Describe el Productos:
          </label>
          <input
            type="text"
            placeholder="Escribe sobre el Producto"
            className="border rounded w-full py-2 px-3"
            name="description"
            value={formData.description}
            onChange={handleChange}
          />
          <label htmlFor="number" className="block text-dark text-lg font-base">
            Precio:
          </label>
          <input
            type="number"
            placeholder="Precio"
            className="border rounded w-full py-2 px-3"
            name="price"
            value={formData.price}
            onChange={handleChange}
          />
          <label htmlFor="number" className="block text-dark text-lg font-base">
            Cantidad:
          </label>
          <input
            type="number"
            placeholder="Cantidad"
            className="border rounded w-full py-2 px-3"
            name="quantity"
            value={formData.quality}
            onChange={handleChange}
          />
          <label htmlFor="number" className="block text-dark text-lg font-base">
            Sku:
          </label>
          <input
            type="number"
            placeholder="Sku"
            className="border rounded w-full py-2 px-3"
            name="sku"
            value={formData.sku}
            onChange={handleChange}
          />
          {error && <p className="text-red text-sm font-light pt-3">{error}</p>}
        </form>
      </div>
    </Modal>
  );
};

export default NewProductModal;
