/* eslint-disable no-unused-vars */

import "./App.css";
import { BIGSCREENSTORE } from "./Components/Store/BigScreenStore";
import React from "react";
import ABOUT from "./Components/About.jsx";
import CONTACT from "./Components/Contact/Contact.jsx";
import { Bell } from "./Components/Bell/bell.jsx";
import { CART } from "./Components/Cart/cart.jsx";
import WISHLIST from "./Components/Wishlist/wishList.jsx";
import PROFILE from "./Components/PROFILE/Profile.jsx";
import NAVBAR from "./Components/Navbar.jsx";

import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <div>
        <BrowserRouter>
          <NAVBAR></NAVBAR>

          <Routes>
            <Route path="/" element={<BIGSCREENSTORE />} />
            <Route path="/about" element={<ABOUT />} />
            <Route path="/contact" element={<CONTACT />} />
            <Route path="/bell" element={<Bell />} />
            <Route path="/cart" element={<CART />} />
            <Route path="/wishList" element={<WISHLIST />} />
            <Route path="/userProfile" element={<PROFILE />} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
