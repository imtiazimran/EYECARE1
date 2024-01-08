/* eslint-disable no-unused-vars */

import "./App.css";
// import { BIGSCREENSTORE } from "./Components/Store/BigScreenStore";
import HOME from "./Pages/Home.jsx";
import React from "react";
// import ABOUT from "./Components/About.jsx";
// import ABOUT from "./Components/About.jsx";
import ABOUT from "./Pages/About.jsx";
import CONTACT from "./Components/Contact/Contact.jsx";
import { Bell } from "./Components/Bell/bell.jsx";
import { Cart } from "./Components/Cart/cart.jsx";
import WISHLIST from "./Components/Wishlist/wishList.jsx";
import PROFILE from "./Components/PROFILE/Profile.jsx";
import NAVBAR from "./Components/Navbar.jsx";
import TERMANDCONDITION from "./Pages/TermandCondition.jsx";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { RiH1 } from "react-icons/ri";
import ErrorPage from "./Pages/Error.jsx";
function App() {
  return (
    <>
      <div>
        <BrowserRouter>
          {/* <NAVBAR></NAVBAR> */}

          <Routes>
            <Route path="/" element={<HOME />} />
            <Route path="/about" element={<ABOUT />} />
            <Route path="/contact" element={<CONTACT />} />
            Navbar are not call HERE
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

export default App;
