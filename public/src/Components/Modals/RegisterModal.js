import React, { useState } from "react";
import { Modal } from "antd";
import { CreateNewUser } from "../../Services/Users";

const RegisterModal = ({
  handleCancel,
  open,
  onOk,
  userData,
  error,
  setError
}) => {
  const [formData, setFormData] = useState({
    role: "" || "customer",
    email: "",
    password: "",
  });

  const emailExists = userData.some(({ email }) => email === formData.email);

  const onClickCreateUser = async () => {
    try {
      await CreateNewUser(formData);
      onOk();
    } catch (error) {
      emailExists 
      ? setError("El usuario ya existe, intenta de nuevo.")
      : setError("Hay un error interno, vuelve a intentarlo más tarde.")
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
    onClickCreateUser();
  };

  return (
    <Modal
      open={open}
      onCancel={handleCancel}
      onOk={onOk}
      className="font-poppins text-dark text-xl font-light"
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
          onClick={onClickCreateUser}
        >
          Registrarse
        </button>,
      ]}
    >
      <div>
        <h2 className="text-dark text-xl font-base">
          Ingresa tus datos para registrarte
        </h2>
        <form
          className="text-dark flex flex-col justify-start"
          onSubmit={handleSubmit}
        >
          <label htmlFor="email" className="block text-dark text-lg font-base">
            Correo:
          </label>
          <input
            type="email"
            placeholder="correo@gmail.com"
            className="border rounded w-full py-2 px-3"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
          <label
            htmlFor="password"
            className="block text-dark text-lg font-base"
          >
            Contraseña:
          </label>
          <input
            type="password"
            placeholder="*******"
            className="border rounded w-full py-2 px-3"
            name="password"
            value={formData.password}
            onChange={handleChange}
          />
          {error && <p className="text-red text-sm font-light pt-3">{error}</p>}
        </form>
      </div>
    </Modal>
  );
};

export default RegisterModal;
