import { useState } from "react";
import NAVBAR from "../Navbar";
// import { BELOWNAVIGATION } from "../shopnv";
import ABOUT from "../About";
import HOME from "../Home";
import CONTACT from "../Contact";
import { Bell } from "../bell";
import { CART } from "../cart";
import { WISHLIST } from "../cart";
import { PROFILE } from "../cart";
<<<<<<< HEAD
import { HOMESTR } from "./Homestore";
=======
// import { HOMESTR } from "./Homestore";
>>>>>>> bd7281c3ad7191d958a0c3891852f82de7cdf6f8
// import { BELOWNAVIGATION } from "../shopnv";
// import { EYEGLASS } from "./ShopProduct";
export const BIGSCREENSTORE = () => {
  const [selectTab, setselectTab] = useState("Home");

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
<<<<<<< HEAD
          <>
            <HOMESTR></HOMESTR>
            {/* <BELOWNAVIGATION></BELOWNAVIGATION> */}
          </>
=======
          <></>
>>>>>>> bd7281c3ad7191d958a0c3891852f82de7cdf6f8
        )}
      </div>
    </>
  );
};
