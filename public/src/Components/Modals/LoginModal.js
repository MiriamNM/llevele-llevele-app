import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { Modal } from "antd";

const LoginModal = ({
  handleCancel,
  open,
  onOk,
  userData,
  email,
  setEmail,
  password,
  setPassword,
  setAuth,
  error,
  setError
}) => {
  const [destination, setDestination] = useState("");

  const emailExists = userData.some((user) => user.email === email);
  const { role } = userData.find((user) => user.email === email) || 'customer';

  useEffect(() => {
    setDestination(emailExists ? `/${role}` : "/");
  }, [emailExists, role]);

  const onCheckData = (value) => {
    if (emailExists) {
      onOk();
      setAuth(value);
    } else {
      setAuth(false);
      setError("Aún no estás registrado");
    }
  };

  return (
    <Modal
    open={open}
      onCancel={handleCancel}
      onOk={onOk}
      className="font-poppins text-dark text-xl font-base"
      footer={[
        <NavLink
          to="/"
          key="back"
          className="font-poppins text-dark border-water border-5 font-normal text-base rounded px-4 py-2 mr-2 hover:bg-light hover:border-red hover:text-red"
          onClick={handleCancel}
        >
          Cancelar
        </NavLink>,
        <NavLink
          to={destination}
          key="submit"
          className="font-poppins text-dark border-water border-5 font-normal text-base rounded px-4 py-2 mr-2 hover:bg-light hover:text-red hover:border-red"
          onClick={() => onCheckData(true)}
        >
          Iniciar sesión
        </NavLink>,
      ]}
    >
      <div>
        <h2 className="text-dark text-xl font-base">
          Ingresa datos para iniciar sesión
        </h2>
        <form className="text-dark flex flex-col justify-start">
          <label htmlFor="email" className="block text-dark text-lg font-base">
            Correo:
          </label>
          <input
            type="email"
            placeholder="correo@gmail.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="border rounded w-full py-2 px-3"
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
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="border rounded w-full py-2 px-3"
          />
          {error && <p className="text-red text-sm font-light pt-3">{error}</p>}
        </form>
      </div>
    </Modal>
  );
};

export default LoginModal;
