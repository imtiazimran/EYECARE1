/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
/* eslint-disable react-refresh/only-export-components */

import ImageHeart from "./Images/Nav/Union.svg";
import ImageCart from "./Images/Nav/Group 2980.svg";
import BellImage from "./Images/Nav/Bell_icon.svg";
import Profile from "./Images/Nav/man.svg";

import Man from "./Images/Slide/Rectangle 2805.png";
import BUY from "./Images/Slide/Rectangle 2806.png";

import Girl from "./Images/Slide/Rectangle 2807.png";

const NEXTHEADER = ({ MobileselectTab }) => {
  console.log("MobileselectTab:", MobileselectTab);
  console.log("MobileselectTab type is", typeof MobileselectTab);

  return (
    <>
      <ul className="flex flex-col  md:p-0 mt-4  w-[45vw] font-medium  rounded-lg md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:-0 md:bg-white  dark:bg-gray-800  md:dark:bg-gray-900 dark:-red-700   sm:hidden  bg-gray-300  float-right  h-[75vh] gap-6 z-40    right-0  fixed BlurSideBar">
        <li className="flex items-center justify-center  ">
          <a
            href="#"
            className="block py-2 px-3  rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-700 hover:bg-blue-600 w-full text-center  hover:text-white"
            aria-current="page"
            onClick={() => {
              console.log("MobileselectTab type:", typeof MobileselectTab);
              MobileselectTab("Home");
              console.log("Rizvi");
              console.log("mobile Home");
            }}
          >
            Home
          </a>
        </li>
        <li className="flex items-center justify-center  ">
          <a
            href="#"
            className="block py-2 px-3 text-gray-900 rounded md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:-gray-700 
            hover:bg-blue-600 w-full text-center
            hover:text-white"
            onClick={() => {
              // MobileselectTab("About");
              console.log("mobile About");
            }}
          >
            <p>About</p>
          </a>
        </li>
        <li className="flex items-center justify-center  ">
          <a
            href="#"
            className="block py-2 px-3 text-gray-900 rounded md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:-gray-700
            hover:bg-blue-600 w-full text-center
            hover:text-white"
            onClick={() => {
              // MobileselectTab("Contact");
              console.log("Mobile Contact");
            }}
          >
            Contact
          </a>
        </li>
        <li>
          <a
            href="#"
            className="block py-2 px-3 text-gray-900 rounded md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:-gray-700 
            hover:bg-blue-600 w-full text-center
            hover:text-white"
            onClick={() => {
              // MobileselectTab("Notification");
              console.log("Mobile Notification");
            }}
          >
            <div className="flex items-center justify-center ">
              <img
                src={BellImage}
                alt="Description of the image"
                className="h-1/4  "
              />
              <span className="ml-2">Notification</span>
            </div>
          </a>
        </li>

        <li>
          <a
            href="#"
            className="block py-2 px-3 text-gray-900 rounded  md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:-gray-700  hover:bg-blue-600 w-full text-center
            hover:text-white"
            onClick={() => {
              // MobileselectTab("Cart");
              console.log("Mobile Cart");
            }}
          >
            <div className="flex items-center justify-center ">
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
            className="block py-2 px-3 text-gray-900 rounded md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:-gray-700
            hover:bg-blue-600 w-full text-center  hover:text-white"
            onClick={() => {
              // MobileselectTab("favorit");
              console.log("Mobile favorit");
            }}
          >
            <div className="flex items-center justify-center ">
              <img
                src={ImageHeart}
                alt="Description of the image"
                className="h-1/2 sm:h-3/4  "
              />
              <span className="ml-2">favorit</span>
            </div>
          </a>
        </li>
        <li>
          <a
            href="#"
            className="block py-2 px-3 text-gray-900 rounded md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent  hover:bg-blue-600 w-full text-center  hover:text-white"
            onClick={() => {
              // MobileselectTab("Profile");
              console.log("Mobile Profile");
            }}
          >
            <div className="flex items-center justify-center ">
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

//

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
