import React, { useState, useEffect } from "react";
import { HashRouter, Routes, Route } from "react-router-dom";
import Header from "../Components/Header";
import HeaderAdmin from "../Components/HeaderAdmin";
import HeaderCustomer from "../Components/HeaderCustomer";
import HeaderVendor from "../Components/HeaderVendor";
import MainConsumer from "../Components/MainConsumer";
import MainVendor from "../Components/MainVendor";
import Main from "../Components/Main";
import { DeleteProduct, GetAllProducts } from "../Services/Products";
import { GetAllUsers } from "../Services/Users";

const Home = () => {
  const [email, setEmail] = useState("");
  const [userData, setUserData] = useState([]);
  const [dataProduct, setDataProduct] = useState([]);
  const [vendorSelect, setVendorSelect] = useState([]);
  const [currentValue, setCurrentValue] = useState([]);
  const [auth, setAuth] = useState(false);

  useEffect(() => {
    GetAllUsers()
      .then((result) => {
        setUserData(result);
      })
      .catch((error) => {
        throw error;
      });

    GetAllProducts()
      .then((result) => {
        setDataProduct(result);
      })
      .catch((error) => {
        throw error;
      });
  }, []);

  const onDeleteProduct = async (id) => {
    try {
      await DeleteProduct(id);
    } catch (error) {
      console.log(error)
    }
  };

  return (
    <div className="flex flex-col">
      <HashRouter>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Header
                  email={email}
                  setEmail={setEmail}
                  data={userData}
                  setAuth={setAuth}
                />
                <Main />
              </>
            }
          />
          {auth && (
            <>
              <Route
                path="/vendor"
                element={
                  <>
                    <HeaderVendor
                      email={email}
                      userData={userData}
                      dataProduct={dataProduct}
                      setCurrentValue={setCurrentValue}
                      setAuth={setAuth}
                    />
                    <MainVendor
                      email={email}
                      userData={userData}
                      dataProduct={dataProduct}
                      currentValue={currentValue}
                      onDeleteProduct={onDeleteProduct}
                    />
                  </>
                }
              />
              <Route
                path="/customer"
                element={
                  <>
                    <HeaderCustomer
                      setCurrentValue={setCurrentValue}
                      setAuth={setAuth}
                    />
                    <MainConsumer
                      userData={userData}
                      dataProduct={dataProduct}
                      vendorSelect={vendorSelect}
                      currentValue={currentValue}
                    />
                  </>
                }
              />
              <Route
                path="/admin"
                element={
                  <>
                    <HeaderAdmin
                      userData={userData}
                      setVendorSelect={setVendorSelect}
                      setAuth={setAuth}
                    />
                    <MainConsumer
                      userData={userData}
                      dataProduct={dataProduct}
                      vendorSelect={vendorSelect}
                      onDeleteProduct={onDeleteProduct}
                    />
                  </>
                }
              />
            </>
          )}
        </Routes>
      </HashRouter>
    </div>
  );
};

export default Home;
