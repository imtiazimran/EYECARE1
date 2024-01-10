/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
/* eslint-disable react-refresh/only-export-components */

import Man from "./Images/Slide/Rectangle 2805.png";

import Girl from "./Images/Slide/Rectangle 2807.png";
import { Link } from "react-router-dom";
import { StyleMebtn } from "./Butttons/button";

export const HeroImage = () => {
  return (
    <>
      <div className=" sm:flex   sm:grid-cols-3 hero-color  hidden ">
        <div className="sm:w-1/3  sm:h-1/2 w-full h-1/2">
          <img src={Man} alt="Description of the image" className="w-[33vw]" />
        </div>

        <div className=" flex items-center justify-center text-center w-[33vw]">
          <div>
            <p className="text-2xl  font-semibold">Limited Period Offer</p>

            <p className="pt-4  font-bold">BUY TWO AND GET ONE FREE</p>
            <StyleMebtn />
          </div>
        </div>

        <div className="sm:w-1/3  sm:h-1/2 w-full h-1/2">
          <img
            src={Girl}
            alt="Description of the image"
            className=" w-[33vw]"
          />
        </div>
      </div>
    </>
  );
};
