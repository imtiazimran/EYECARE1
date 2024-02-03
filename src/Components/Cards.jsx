/* eslint-disable react-refresh/only-export-components */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

import { AddtoCart } from "./Butttons/button";
import { FaFilter } from "react-icons/fa";
import { CiHeart } from "react-icons/ci";

import { FaMapMarkerAlt } from "react-icons/fa";
import { IoMdTime } from "react-icons/io";

export const POPULARPRODUCTMOBILE = ({ name, imageUrl, rate }) => {
  return (
    <div className="card  w-[17vw]  bg-white text-center ml-2   hover:bg-red-50 p-2">
      <img src={imageUrl} alt={name} className="card-image " />
      <p className="text-xs">{name}</p>
    </div>
  );
};
