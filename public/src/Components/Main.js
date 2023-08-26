import React from 'react';
import phoneImg from '../Assets/phoneImg.png';

const Main = () => {
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
        <button className="text-red  bg-mint font-normal text-base rounded px-4 py-2 mt-4 hover:bg-light hover:border-light hover:text-red">
          Registrate y administra tu inventario
        </button>
      </div>
    </main>
  );
};

export default Main;
