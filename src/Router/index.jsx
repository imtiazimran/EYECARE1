/* eslint-disable no-unused-vars */
import HOME from "../Pages/Home.jsx";
import React from "react";
import ABOUT from "../Pages/About/About.jsx";
import CONTACT from "../Pages/Contact/Contact.jsx";
import { Bell } from "../Pages/Bell/bell.jsx";
import { Cart } from "../Pages/Cart/cart.jsx";
import WISHLIST from "../Components/Wishlist/wishList.jsx";
import PROFILE from "../Pages/PROFILE/Profile.jsx";

import Navbar from "../Components/Navbar.jsx";

import TERMANDCONDITION from "../Components/TermAndCondition/TermandCondition.jsx";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { RiH1 } from "react-icons/ri";

import ErrorPage from "../Components/Error/Error.jsx";
function Routers() {
  return (
    <>
      <div>
        <BrowserRouter>
          {/* <NAVBAR></NAVBAR> */}

          <Routes>
            <Route path="/" element={<HOME />} />
            <Route path="/about" element={<ABOUT />} />
            <Route path="/contact" element={<CONTACT />} />

            <Route path="/bell" element={<Bell />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/wishList" element={<WISHLIST />} />
            <Route path="/userProfile" element={<PROFILE />} />
            <Route path="/Condition" element={<TERMANDCONDITION />} />
            <Route path="*" element={<ErrorPage />} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default Routers;
