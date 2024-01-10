/* eslint-disable react/prop-types */

import { AddtoCart } from "../../../Components/Butttons/button";
import { CiHeart } from "react-icons/ci";

export const AddTobag_item = ({ image, name, size, star, review, price }) => {
  return (
    <>
      <div className="WishList-item bg-white  w-[30vw] mt-4 relative hidden sm:block border    border-red-300 rounded-lg  ">
        <img src={image} alt="" className="w-[80%] flex justify-center" />
        <p className=" font-semibold addtobagpadding ">{name}</p>
        <p className=" mt-4 ">
          <span className=" text-xl addtobagpadding ">{size}</span>
          <span className=" absolute  right-[5%] text-sm  priceAndrating">
            ⭐{star}/{review}
          </span>
        </p>
        <p className=" mt-2  text-sm  addtobagpadding ">{price}</p>
        <hr />
        <div className=" flex ">
          <CiHeart className=" w-[50%] flex justify-center  mt-4  hover:text-red-800" />
          <AddtoCart className="w-[50%] " />
        </div>
      </div>
    </>
  );
};
