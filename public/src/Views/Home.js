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
import { CreateNewProductInCart, DeleteProductInCart, GetAllProductsInCart } from "../Services/Cart";

const Home = () => {
  const [email, setEmail] = useState("");
  const [userData, setUserData] = useState([]);
  const [dataProduct, setDataProduct] = useState([]);
  const [vendorSelect, setVendorSelect] = useState([]);
  const [currentValue, setCurrentValue] = useState([]);
  const [auth, setAuth] = useState(false);
  const [error, setError] = useState("");
  const [addProduct, setAddProduct] = useState([]);

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

    GetAllProductsInCart()
      .then((result) => {
        setAddProduct(result);
      })
      .catch((error) => {
        throw error;
      });
  }, []);

  const onDeleteProduct = async (id) => {
    try {
      id && (await DeleteProduct(id));
    } catch (error) {
      throw error;
    }
  };

  const onAddProduct = async (product) => {
    try {
      const { name, price, quality, description } = product;
      const newProduct = { name, price, quality, description };
      setAddProduct([...addProduct, newProduct]);
      await CreateNewProductInCart(newProduct);
    } catch (error) {
      throw error;
    }
  };

  const onDeleteCartProduct = async (idProduct) => {
    try {
      idProduct && (await DeleteProductInCart(idProduct));
    } catch (error) {
      throw error;
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
                  userData={userData}
                  setAuth={setAuth}
                  error={error}
                  setError={setError}
                />
                <Main />
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
                  dataProduct={dataProduct}
                  addProduct={addProduct}
                  setAddProduct={setAddProduct}
                  onAddProduct={onAddProduct}
                  onDeleteCartProduct={onDeleteCartProduct}
                />
                <MainConsumer
                  userData={userData}
                  dataProduct={dataProduct}
                  vendorSelect={vendorSelect}
                  currentValue={currentValue}
                  addProduct={addProduct}
                  setAddProduct={setAddProduct}
                  onAddProduct={onAddProduct}
                />
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
                      error={error}
                      setError={setError}
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
