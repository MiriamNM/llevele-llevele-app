import React, { useState } from "react";
import logo from "../../Assets/llevele-llevele.png";
import RegisterModal from "../Modals/RegisterModal";
import LoginModal from "../Modals/LoginModal";
import { NavLink } from "react-router-dom";

const Header = ({
  email,
  setEmail,
  userData,
  auth,
  setAuth,
  error,
  setError,
  onClickCreateUser
}) => {

  const resetData = () => {
    setError("");
    setEmail("");
  };

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modal, setModal] = useState(null);
  const [password, setPassword] = useState("");

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
    <header className="container mx-auto flex items-center justify-between p-8 bg-mint md:flex-col sm:flex-col">
      <div className="flex justify-start">
        <img src={logo} alt="logo" />
      </div>
      <nav>
        <ul className="flex space-x-4  md:pt-4 sm:pt-4">
        <li>
            <NavLink
              to="/customer"
              className="font-poppins text-lg pr-4 md:text-base sm:text-base px-2 border-none hover:text-red hover:bg-transparent"
            >
              Comprar
            </NavLink>
          </li>
          <li>
            <button
              className="font-poppins text-lg pr-4 md:text-base sm:text-base px-2 border-none hover:text-red hover:bg-transparent"
              onClick={() => showModal("Register")}
            >
              Registrate
            </button>
          </li>
          <li>
            <button
              className="font-poppins text-lg pr-4 md:text-base sm:text-base px-2 border-none hover:text-red hover:bg-transparent"
              onClick={() => showModal("Login")}
            >
              Inicia sesión
            </button>
          </li>
        </ul>
        {modal === "Register" && isModalOpen && (
          <RegisterModal
            handleCancel={handleCancel}
            open={isModalOpen}
            onOk={handleOk}
            userData={userData}
            error={error}
            setError={setError}
            onClickCreateUser={onClickCreateUser}
          />
        )}
        {modal === "Login" && isModalOpen && (
          <LoginModal
            handleCancel={handleCancel}
            open={isModalOpen}
            onOk={handleOk}
            userData={userData}
            email={email}
            setEmail={setEmail}
            password={password}
            setPassword={setPassword}
            auth={auth}
            setAuth={setAuth}
            error={error}
            setError={setError}
          />
        )}
      </nav>
    </header>
  );
};

export default Header;
