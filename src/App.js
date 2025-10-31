import "./App.css";
import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate} from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./Stores";
import axios from "axios";

import { Header, Footer } from "./components";

import {
  About,
  Restaurant,
  Contact,
  Services,
  Home,
  SignIn,
  SignUp,
  Shop,
  Cart,
  Wallet,
  MyPurchase,
  MyAccount,
} from "./Pages";
import Dashboard from "./Dashboard/Dashboard";

function App() {

  axios.defaults.withCredentials = true;
  const [showHeader] = useState(false);
  useEffect(() => {
   function redirectToHome() {
     if (localStorage.getItem('auth_username') !== "") {
      <Navigate to={'/home'} />
     }
   }
   redirectToHome();
  }, []);





  return (
    <Provider store={store}>
      <Router>
        {!showHeader ? <Header /> : null}
        <Routes>
          <Route exact path="/">
            <Route path="/" element={<Home />} />
          </Route>
          <Route exact path="/home">
            <Route path="/home" element={<Home />} />
          </Route>
          <Route exact path="/signin">
            <Route path="/signin" element={<SignIn />} />
          </Route>
          <Route exact path="/signup">
            <Route path="/signup" element={<SignUp />} />
          </Route>
          <Route exact path="/dashboard">
            <Route path="/dashboard" element={<Dashboard />} />
          </Route>

          <Route exact path="/about">
            <Route path="/about" element={<About />} />
          </Route>
          <Route exact path="/restaurant">
            <Route path="/restaurant" element={<Restaurant />} />
          </Route>
          <Route exact path="/contact">
            <Route path="/contact" element={<Contact />} />
          </Route>
          <Route exact path="/services">
            <Route path="/services" element={<Services />} />
          </Route>

          {/* PAGES */}
          <Route exact path="/shop">
            <Route path="/shop" element={<Shop />} />
          </Route>
          <Route exact path="/cart">
            <Route path="/cart" element={<Cart />} />
          </Route>
          <Route exact path="/shop">
            <Route path="/shop" element={<Shop />} />
          </Route>
          <Route exact path="/wallet">
            <Route path="/wallet" element={<Wallet />} />
          </Route>
          <Route exact path="/mypurchase">
            <Route path="/mypurchase" element={<MyPurchase />} />
          </Route>
          <Route exact path="/myaccount">
            <Route path="/myaccount" element={<MyAccount />} />
          </Route>
        </Routes>
        <Footer />
      </Router>
    </Provider>
  );
}

export default App;
