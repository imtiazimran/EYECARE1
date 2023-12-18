/* eslint-disable react-refresh/only-export-components */

import ImageHeart from "./Images/Nav/Union.svg";
import ImageCart from "./Images/Nav/Group 2980.svg";
import BellImage from "./Images/Nav/Bell_icon.svg";
import Profile from "./Images/Nav/man.svg";
import Camera from "./Images/Nav/Group 3154.svg";
import Man from "./Images/Slide/Rectangle 2805.png";
import BUY from "./Images/Slide/Rectangle 2806.png";

import Girl from "./Images/Slide/Rectangle 2807.png";

const NEXTHEADER = () => {
  return (
    <>
      <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white  dark:bg-gray-800  md:dark:bg-gray-900 dark:border-gray-700   sm:hidden ">
        <li className="flex items-center justify-center border bg-blue-700">
          <a
            href="#"
            className="block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500"
            aria-current="page"
          >
            Home
          </a>
        </li>
        <li className="flex items-center justify-center border ">
          <a
            href="#"
            className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
          >
            About
          </a>
        </li>
        <li className="flex items-center justify-center border ">
          <a
            href="#"
            className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
          >
            Contact
          </a>
        </li>
        <li>
          <a
            href="#"
            className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700 text-center"
          >
            <div className="flex items-center justify-center border">
              <img
                src={BellImage}
                alt="Description of the image"
                className="h-1/2 sm:h-3/4"
              />
              <span className="ml-2">Notification</span>
            </div>
          </a>
        </li>

        <li>
          <a
            href="#"
            className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700 text-center"
          >
            <div className="flex items-center justify-center border">
              <img
                src={ImageCart}
                alt="Description of the image"
                className="h-1/2 sm:h-3/4"
              />
              <span className="ml-2">Cart</span>
            </div>
          </a>
        </li>

        <li>
          <a
            href="#"
            className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700 text-center"
          >
            <div className="flex items-center justify-center border">
              <img
                src={ImageHeart}
                alt="Description of the image"
                className="h-1/2 sm:h-3/4"
              />
              <span className="ml-2">favorit</span>
            </div>
          </a>
        </li>
        <li>
          <a
            href="#"
            className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700 text-center"
          >
            <div className="flex items-center justify-center border">
              <img
                src={Profile}
                alt="Description of the image"
                className="h-1/2 sm:h-3/4"
              />
              <span className="ml-2">Profile</span>
            </div>
          </a>
        </li>
      </ul>
    </>
  );
};
export default NEXTHEADER;

export const BELOWNAV = () => {
  return (
    <nav className="  bg-gray-100 p-4">
      <div className="container mx-auto flex justify-between items-center ">
        {/* Hamburger icon for mobile */}

        {/* Navigation links */}
        <div className="">
          <ul className=" grid grid-cols-2 sm:flex space-x-4 gap-2   ">
            <li className=" ml-3 sm:ml-0">
              <a href="#" className="  hover:text-gray-300">
                EYEGLASS
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-300">
                SUNGLASSES
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-300">
                COMPUTER GLASSES
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-300">
                CONTACT LENS
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-300">
                POWERD GLASSES
              </a>
            </li>
            <li>
              <a href="#" className=" hover:text-gray-300">
                ACCESSSORIES
              </a>
            </li>
            <li>
              <a href="#" className=" hover:text-gray-300 font-bold">
                LUXE
              </a>
            </li>
            <li className=" flex">
              <a href="#" className="hover:text-gray-300 flex    w-full">
                <button className=" bg-red-300 px-2   rounded-md   w-auto font-bold">
                  {" "}
                  Try on
                </button>

                <img
                  src={Camera}
                  alt="Description of the image"
                  className=" sm:ml-5 ml-2"
                />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

//   THIS IS OUR HERO IMAGES SECTION WHERE WE IMPUT THREE IMAGES
export const HEROIMAGE = () => {
  return (
    <>
      <div className=" sm:flex   sm:grid-cols-3 hero-color  hidden  ">
        <div className="sm:w-1/3  sm:h-1/2 w-full h-1/2">
          <img src={Man} alt="Description of the image" className=" " />
        </div>
        <div className="sm:w-1/3 sm:h-1/2 w-full   relative sm:top-1  ">
          <img
            src={BUY}
            alt="Description of the image"
            className="w-full h-full object-cover "
          />
          <button
            className="absolute inset-0  text-black items-center  text-center justify-center  text-3xl
           md:text-xl lg:text-2xl xl:text-2xl  "
          >
            <p className=" text-3xl font-semibold"> Limited Period Offer</p>

            <p className="pt-4 sm:text-4xl font-bold">
              {" "}
              BUY TWO AND GET ONE FREE{" "}
            </p>
            <div className=" bg-red-300  mt-5 px-3 py-2   mr-9 ml-9 rounded-lg hover:bg-green-400 font-bold">
              {" "}
              Click Me
            </div>
          </button>
        </div>

        <div className="sm:w-1/3  sm:h-1/2 w-full h-1/2">
          <img src={Girl} alt="Description of the image" className=" " />
        </div>
      </div>
    </>
  );
};
