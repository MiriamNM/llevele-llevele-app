import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import Header from '../Components/Header';
import HeaderAdmin from '../Components/HeaderAdmin';
import HeaderCustomer from '../Components/HeaderCustomer';
import HeaderVendor from '../Components/HeaderVendor';
import MainConsumer from '../Components/MainConsumer';
import MainVendor from '../Components/MainVendor';
import Main from '../Components/Main';

const Home = () => {
  return (
    <div className="flex flex-col">
      <HashRouter>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Header />
                <Main />
              </>
            }
          />
          <Route
            path="/vendor"
            element={
              <>
                <HeaderVendor />
                <MainVendor />
              </>
            }
          />
          <Route
            path="/costumer"
            element={
              <>
                <HeaderCustomer />
                <MainConsumer />
              </>
            }
          />
          <Route path="/admin" element={
              <>
                <HeaderAdmin />
                <MainConsumer />
              </>
            } />
        </Routes>
      </HashRouter>
    </div>
  );
};

export default Home;
