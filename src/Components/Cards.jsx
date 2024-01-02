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
      <div className="sm:w-full  relative  p-1 sm:pl-3 sm:pt-3 middle-image   hidden sm:block">
        <div>
          <img
            src={Girl}
            alt="Girl"
            className="h-full w-[25%] absolute z-10 bottom-0  "
          />
        </div>
        <div className="  absolute  h-full   right-[25%]  left-[25%] bottom-0 text-center   flex flex-col justify-center items-center italic ">
          <h1
            className="  sm:text-4xl  middletext  text-xl  italic   
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
export const INTROOURTEAM = ({ name, imageUrl, profession }) => {
  return (
    <>
      <div className="grid-cols-3">
        <div className="card  m-0.5 sm:m-3 text-center   ">
          <img src={imageUrl} alt={name} className="card-image   " />
          <div className=" text-center   p-3 ">
            <h2>{name}</h2>
            <p className="  sm:text-xl">{profession}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export const WeareHeiring = ({ position, opening }) => {
  return (
    <>
      <div className="   font-semibold p-5">
        <div className=" border   border-red-50 bg-white p-4 text-2xl font-semibold rounded-lg   flex w-[30vw] relative">
          <p>{position}</p>
          <p
            className=" text-sm 
             absolute    bottom-[40%] right-0 text-gray-400 flex pr-3"
          >
            {" "}
            {opening} Opening
          </p>
        </div>
      </div>
    </>
  );
};

export const Heiring_opper = ({ position, Experience, salary, role }) => {
  return (
    <>
      <div className=" w-[60vw] bg-white rounded-xl p-3  mt-3 h-[45%] border-l-8  ">
        <p className=" flex w-full justify-evenly">
          <span>{position}</span>
          <span>{Experience}</span>
          <span>{salary}</span>
        </p>
        <p className="mt-[5%]  text-xl">{role}</p>
        <p className=" mt-[2%] h-[15%]    flex">
          <span className="flex  m-3 justify-evenly       ">
            <FaMapMarkerAlt style={{ fontSize: "24px" }} />
            Work From Home
          </span>
          <span className="border-r-2"></span>
          <span className="flex  m-3 justify-evenly       ">
            <IoMdTime style={{ fontSize: "24px" }} />
            10:00-05:00
          </span>
        </p>
      </div>
    </>
  );
};

export const AddTobag_item = ({ image, name, size, star, review, price }) => {
  return (
    <>
      <div className="WishList-item bg-white  w-[30vw] mt-4 relative hidden sm:block border    border-red-300 rounded-lg p-2">
        <img src={image} alt="" className="w-[80%] flex justify-center" />
        <p className=" font-semibold">{name}</p>
        <p className=" mt-4 ">
          <span className=" text-xl">{size}</span>
          <span className=" absolute  right-[5%] text-sm">
            ⭐{star}/{review}
          </span>
        </p>
        <p className=" mt-2  text-sm ">{price}</p>
        <hr />
        <div className=" flex ">
          <CiHeart className=" w-[50%] flex justify-center  mt-4  hover:text-red-800" />
          <AddtoCart className="w-[50%] " />
        </div>
      </div>
    </>
  );
};
