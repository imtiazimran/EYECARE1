/* eslint-disable no-unused-vars */
import MainLayout from "../Layout/MainLayout.jsx";
import HOME from "../Pages/Home.jsx";

import React from "react";
import ABOUT from "../Pages/About/About.jsx";
import CONTACT from "../Pages/Contact/Contact.jsx";
import { Bell } from "../Pages/Bell/bell.jsx";
import { Cart } from "../Pages/Cart/cart.jsx";
import WISHLIST from "../Pages/Wishlist/wishList.jsx";
import PROFILE from "../Pages/PROFILE/Profile.jsx";

import TERMANDCONDITION from "../Components/TermAndCondition/TermandCondition.jsx";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { RiH1 } from "react-icons/ri";

import ErrorPage from "../Components/Error/Error.jsx";
import EyeGlass from "../Components/EyeGlasses/EyeGlass.jsx";
import { StyleMe } from "../service/StyleMe/StyleMe.jsx";
function Routers() {
  return (
    <>
      <div>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<MainLayout />}>
              <Route path="/" element={<HOME />} />
              <Route path="/about" element={<ABOUT />} />
              <Route path="/contact" element={<CONTACT />} />
              <Route path="/bell" element={<Bell />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/wishList" element={<WISHLIST />} />
              <Route path="/userProfile" element={<PROFILE />} />
              <Route path="/Condition" element={<TERMANDCONDITION />} />
              <Route path="/Eyeglass" element={<EyeGlass />} />
              <Route path="/StyleMe" element={<StyleMe />} />
            </Route>

            <Route path="*" element={<ErrorPage />} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default Routers;
