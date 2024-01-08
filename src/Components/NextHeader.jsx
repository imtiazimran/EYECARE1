/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
/* eslint-disable react-refresh/only-export-components */

import ImageHeart from "./Images/Nav/Union.svg";
import ImageCart from "./Images/Nav/Group 2980.svg";
import BellImage from "./Images/Nav/Bell_icon.svg";
import Profile from "./Images/Nav/man.svg";

import Man from "./Images/Slide/Rectangle 2805.png";

import Girl from "./Images/Slide/Rectangle 2807.png";
import { Link } from "react-router-dom";
import { StyleMebtn } from "./Butttons/button";

const NEXTHEADER = () => {
  return (
    <>
      <ul className="flex flex-col  md:p-0 mt-4  w-[45vw] font-medium  rounded-lg md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:-0 md:bg-white  dark:bg-gray-800  md:dark:bg-gray-900 dark:-red-700   sm:hidden  bg-gray-300  float-right  h-[75vh] gap-6 z-40    right-0  fixed BlurSideBar">
        <li className="flex items-center justify-center  ">
          <Link
            to={"/"}
            className="block py-2 px-3  rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-700 hover:bg-blue-600 w-full text-center  hover:text-white"
            aria-current="page"
          >
            Home
          </Link>
        </li>
        <li className="flex items-center justify-center  ">
          <Link
            to={"/"}
            className="block py-2 px-3 text-gray-900 rounded md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:-gray-700
            hover:bg-blue-600 w-full text-center
            hover:text-white"
          >
            <p>About</p>
          </Link>
        </li>
        <li className="flex items-center justify-center  ">
          <Link
            to={"/cantact"}
            className="block py-2 px-3 text-gray-900 rounded md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:-gray-700
            hover:bg-blue-600 w-full text-center
            hover:text-white"
          >
            Contact
          </Link>
        </li>
        <li>
          <Link
            to={"/"}
            className="block py-2 px-3 text-gray-900 rounded md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:-gray-700
            hover:bg-blue-600 w-full text-center
            hover:text-white"
          >
            <div className="flex items-center justify-center ">
              <img
                src={BellImage}
                alt="Description of the image"
                className="h-1/4  "
              />
              <span className="ml-2">Notification</span>
            </div>
          </Link>
        </li>

        <li>
          <Link
            to={""}
            className="block py-2 px-3 text-gray-900 rounded  md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:-gray-700  hover:bg-blue-600 w-full text-center
            hover:text-white"
          >
            <div className="flex items-center justify-center ">
              <img
                src={ImageCart}
                alt="Description of the image"
                className="h-1/2 sm:h-3/4"
              />
              <span className="ml-2">Cart</span>
            </div>
          </Link>
        </li>

        <li>
          <Link
            to={"/"}
            className="block py-2 px-3 text-gray-900 rounded md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:-gray-700
            hover:bg-blue-600 w-full text-center  hover:text-white"
          >
            <div className="flex items-center justify-center ">
              <img
                src={ImageHeart}
                alt="Description of the image"
                className="h-1/2 sm:h-3/4  "
              />
              <span className="ml-2">favorit</span>
            </div>
          </Link>
        </li>
        <li>
          <Link
            href="#"
            className="block py-2 px-3 text-gray-900 rounded md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent  hover:bg-blue-600 w-full text-center  hover:text-white"
          >
            <div className="flex items-center justify-center ">
              <img
                src={Profile}
                alt="Description of the image"
                className="h-1/2 sm:h-3/4"
              />
              <span className="ml-2">Profile</span>
            </div>
          </Link>
        </li>
      </ul>
    </>
  );
};
export default NEXTHEADER;

//   THIS IS OUR HERO IMAGES SECTION WHERE WE IMPUT THREE IMAGES
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
