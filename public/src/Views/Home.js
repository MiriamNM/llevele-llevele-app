import React, { useState } from "react";
import { HashRouter, Routes, Route } from "react-router-dom";
import Header from "../Components/Header";
import HeaderAdmin from "../Components/HeaderAdmin";
import HeaderCustomer from "../Components/HeaderCustomer";
import HeaderVendor from "../Components/HeaderVendor";
import MainConsumer from "../Components/MainConsumer";
import MainVendor from "../Components/MainVendor";
import Main from "../Components/Main";

const Home = () => {
  const [email, setEmail] = useState("");
  const [data, setData] = useState([]);

  return (
    <div className="flex flex-col">
      {console.log(console.log(data))}
      <HashRouter>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Header
                  email={email}
                  setEmail={setEmail}
                  data={data}
                  setData={setData}
                />
                <Main />
              </>
            }
          />
          <Route
            path="/vendor"
            element={
              <>
                <HeaderVendor email={email} />
                <MainVendor email={email} userData={data} />
              </>
            }
          />
          <Route
            path="/customer"
            element={
              <>
                <HeaderCustomer />
                <MainConsumer />
              </>
            }
          />
          <Route
            path="/admin"
            element={
              <>
                <HeaderAdmin />
                <MainConsumer />
              </>
            }
          />
        </Routes>
      </HashRouter>
    </div>
  );
};

export default Home;
