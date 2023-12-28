import { useState } from "react";
import NAVBAR from "../Navbar";
// import { BELOWNAVIGATION } from "../shopnv";
import ABOUT from "../About";
import HOME from "../Home";
import CONTACT from "../Contact";
import { Bell } from "../Bell/bell";
import { CART } from "../Cart/cart";
import WISHLIST from "../Wishlist/wishList";

import PROFILE from "../PROFILE/Profile";
import { Footer } from "../footer";

export const BIGSCREENSTORE = () => {
  const [selectTab, setselectTab] = useState("Heart");
  return (
    <>
      {/*   IT IS AN COMPLE LOGIC FOR OUR NAVBAR SECTION */}
      <div>
        <NAVBAR selectTab={setselectTab}></NAVBAR>

        {selectTab === "Home" ? (
          <>
            <HOME></HOME>
          </>
        ) : selectTab === "Profile" ? (
          <>
            <PROFILE></PROFILE>
          </>
        ) : selectTab === "About" ? (
          <>
            <ABOUT></ABOUT>
          </>
        ) : selectTab === "Contact" ? (
          <>
            <CONTACT></CONTACT>
          </>
        ) : selectTab === "Bell" ? (
          <>
            <Bell></Bell>
          </>
        ) : selectTab === "Heart" ? (
          <>
            <WISHLIST></WISHLIST>
          </>
        ) : selectTab === "Cart" ? (
          <>
            <CART></CART>
          </>
        ) : (
          <></>
        )}
        <Footer></Footer>
      </div>
    </>
  );
};
