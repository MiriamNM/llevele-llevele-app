import React from "react";
import { NavLink } from "react-router-dom";

const LogoutButton = ({ setAuth }) => {
  return (
    <div className="ml-auto">
      <NavLink
        to="/"
        className="font-poppins text-lg md:text-base sm:text-base px-2 border-none text-red hover:text-dark hover:bg-transparent"
        onClick={() => setAuth(false)}
      >
        Cerrar sesión
      </NavLink>
    </div>
  );
};

export default LogoutButton;
