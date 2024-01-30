/* eslint-disable no-undef */
/* eslint-disable react-refresh/only-export-components */

import "./wishlist.css";

import ShopNavigation from "../../Components/Shopnav/shopnv";

const WISHLIST = () => {
  return (
    <>
      <div>
        <ShopNavigation />
        <h1 className="text-3xl text-center  text-red-700 ">
          {" "}
          This Is Our WishList section
        </h1>
      </div>
    </>
  );
};
export default WISHLIST;
