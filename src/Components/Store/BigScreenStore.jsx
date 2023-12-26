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
// import { HOMESTR } from "./Homestore";
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
          <></>
        )}
      </div>
    </>
  );
};
