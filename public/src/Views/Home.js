import React, { useState, useEffect } from "react";
import { HashRouter, Routes, Route } from "react-router-dom";
import Header from "../Components/Header";
import HeaderAdmin from "../Components/HeaderAdmin";
import HeaderCustomer from "../Components/HeaderCustomer";
import HeaderVendor from "../Components/HeaderVendor";
import MainConsumer from "../Components/MainConsumer";
import MainVendor from "../Components/MainVendor";
import Main from "../Components/Main";
import {
  CreateNewProduct,
  DeleteProduct,
  GetAllProducts,
} from "../Services/Products";
import { CreateNewUser, GetAllUsers } from "../Services/Users";
import {
  CreateNewProductInCart,
  DeleteProductInCart,
  GetAllProductsInCart,
} from "../Services/Cart";

const Home = () => {
  const [email, setEmail] = useState("");
  const [userData, setUserData] = useState([]);
  const [dataProduct, setDataProduct] = useState([]);
  const [vendorSelect, setVendorSelect] = useState([]);
  const [currentValue, setCurrentValue] = useState([]);
  const [auth, setAuth] = useState(false);
  const [error, setError] = useState("");
  const [addProduct, setAddProduct] = useState();

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
      setDataProduct(dataProduct.filter((product) => product.id!== id));
    } catch (error) {
      throw error;
    }
  };

  const onAddProduct = async (product) => {
    try {
      const { name, price, quality, description } = product;
      const newProduct = { name, price, quality, description };
      await CreateNewProductInCart(newProduct);
      setAddProduct([...addProduct, newProduct]);
    } catch (error) {
      throw error;
    }
  };

  const onDeleteCartProduct = async (idProduct) => {
    try {
      idProduct && (await DeleteProductInCart(idProduct));
      setAddProduct(addProduct.filter((product) => product.id !== idProduct));
    } catch (error) {
      throw error;
    }
  };

  const onClickCreateUser = async (userInfo, onOk) => {
    const emailExists = userData.some(({ email }) => email === userInfo.email);
    try {
      const { role, email, password } = userInfo;
      const newUser = { role, email, password };
      await CreateNewUser(newUser);
      setUserData([...userData, newUser]);
      onOk();
    } catch (error) {
      setError(
        emailExists
          ? "El usuario ya existe, intenta de nuevo."
          : "Hay un error interno, vuelve a intentarlo más tarde."
      );
    }
  };

  const onClickCreateProduct = async (productInfo, onOk) => {
    try {
      const { name, image, price, description, quality, sku, userId } =
        productInfo;
      const newProduct = {
        name,
        image,
        price,
        description,
        quality,
        sku,
        userId,
      };
      await CreateNewProduct(newProduct);
      setDataProduct([...dataProduct, newProduct]);
      onOk();
    } catch (error) {
      error && setError("Hay un problema interno, intenta más tarde");
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
                  onClickCreateUser={onClickCreateUser}
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
                      onClickCreateProduct={onClickCreateProduct}
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
