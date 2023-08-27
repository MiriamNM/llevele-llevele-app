import React from 'react';
import { NavLink } from "react-router-dom";
import { Cascader } from 'antd';
import logo from '../../Assets/llevele-llevele.png';

const HeaderAdmin = () => {
    const options = [
        {
            value: 'vendors',
            label: 'vendors',
        },
        {
            value: 'vendors',
            label: 'vendors',
        },
    ];

    const onChange = (value) => {
        console.log(value);
      };

  return (
    <header className="container mx-auto p-8 bg-mint">
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <img src={logo} alt="logo" className="mr-4" />
        </div>
        <div className="flex space-x-4 items-center">
          <input type="search" className="rounded border-mintTwo w-80 h-9" />
          <button className="bg-ligth text-dark border-mintTwo px-4 py-2 rounded hover:text-red">
            Buscar
          </button>
        </div>
      </div>
      <nav className="flex flex-row pt-3 items-center">
        <div className="flex space-x-4">
            <Cascader options={options} onChange={onChange} />
        </div>
        <div className="ml-auto">
          <NavLink
          to="/"
            className="font-poppins text-lg md:text-base sm:text-base px-2 border-none text-red hover:text-dark hover:bg-transparent"
          >
            Cerrar sesión
          </NavLink>
        </div>
      </nav>
    </header>
  );
};

export default HeaderAdmin;