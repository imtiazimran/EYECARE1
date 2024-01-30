/* eslint-disable react-refresh/only-export-components */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

import { AddtoCart } from "./Butttons/button";
import { FaFilter } from "react-icons/fa";
import { CiHeart } from "react-icons/ci";
import Testimonial from "./images/footer/Testimonial.png";
import Girl from "./images/imgae/image 54.png";
// png

import Women from "./images/imgae/image 55.png";
import { FaMapMarkerAlt } from "react-icons/fa";
import { IoMdTime } from "react-icons/io";
//   I AM DESIGN HERE ONLY AN SIMPLE CARD THAT  IT IS ACCESS MOST OF OUR UX DESIGN CARDS
const SimpleCard = ({ name, imageUrl }) => {
  return (
    <div className="card sm:m-3  m-1 text-center ">
      <img src={imageUrl} alt={name} className="card-image   " />
      <div className="card-content text-center ">
        <h2 className="card-name   sm:text-2xl text-center font-bold  sm:h-12  bg-white  relative sm:bottom-10   bottom-5 rounded-xl  ">
          {name}
        </h2>
      </div>
    </div>
  );
};
export default SimpleCard;

export const Middle = () => {
  return (
    <>
      <div
        className="sm:w-full  relative  p-1 sm:pl-3 sm:pt-3 middle-image   hidden 
       sm:block border border-red-700  md:h-[30vh] lg:h-[45vh]
      "
      >
        <div>
          <img
            src={Girl}
            alt="Girl"
            className=" w-[25%] absolute z-10 bottom-0   h-full "
          />
        </div>
        <div className="  absolute  h-full   right-[25%]  left-[25%] bottom-0 text-center   flex flex-col justify-center items-center italic ">
          <h1
            className="  sm:text-3xl  middletext  text-xl  italic   
          sm:w-[70%] font-semibold sm:font-extrabold "
          >
            Unlock Your Unique Style
            <p className="middletext1 text-center font-light  textsm:font-bold mt-0">
              let us help you style according to your personality
            </p>
            <button className="  stylebtn    sm:mt-9   text-sm  sm:px-6 sm:py-3 ">
              {" "}
              Style Me
            </button>
          </h1>
        </div>
        <div>
          <img
            src={Women}
            alt="Girl"
            className="h-full   w-[25%] absolute z-10 bottom-0  right-0 "
          />
        </div>
      </div>
    </>
  );
};
export const POPULATPRODUCT = ({ name, imageUrl, rate }) => {
  return (
    <div className="card  m-0.5 sm:m-3 text-center ">
      <img src={imageUrl} alt={name} className="card-image   " />
      <div className=" text-center   p-3 ">
        <h2>{name}</h2>
        <p className=" sm:text-xl">{rate}</p>
      </div>
    </div>
  );
};
export const POPULARPRODUCTMOBILE = ({ name, imageUrl, rate }) => {
  return (
    <div className="card  w-[17vw]  bg-white text-center ml-2   hover:bg-red-50 p-2">
      <img src={imageUrl} alt={name} className="card-image " />
      <p className="text-xs">{name}</p>
    </div>
  );
};

export const FooterImage = () => {
  return (
    <>
      <div className=" hidden sm:block">
        <img src={Testimonial} alt="" />
      </div>
    </>
  );
};
