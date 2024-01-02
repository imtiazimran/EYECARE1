/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import { useState } from "react";
import ImageHeart from "./Images/Nav/Union.svg";
import ImageCart from "./Images/Nav/Group 2980.svg";
import BellImage from "./Images/Nav/Bell_icon.svg";
import Profile from "./Images/Nav/man.svg";
import NEXTHEADER from "./NextHeader";

const NAVBAR = () => {
  const [showComponent, setshowComponent] = useState(false);
  const handleClicked = () => {
    setshowComponent(!showComponent);
  };

  return (
    <>
      <div className=" bg-white">
        <nav className="   w-full dark:bg-gray-900   ">
          <div className=" flex flex-wrap  justify-between    sm:p-4  ">
            {/*  HERE   AND OUR LOGO DESIGNED  */}
            <a
              href="https://flowbite.com/"
              className="flex items-center space-x-3 rtl:space-x-reverse"
            >
              <img
                src="https://flowbite.com/docs/images/logo.svg"
                className="h-8"
                alt="Flowbite Logo"
              />
              <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
                Logo
              </span>
            </a>

            {/*  HERE SEARCH ICON BUTTON AND HAMBURGER BUTTON ARE STARTED */}
            <div className="flex md:order-1     sm:w-1/3 ">
              <button
                type="button"
                data-collapse-toggle="navbar-search"
                aria-controls="navbar-search"
                aria-expanded="false"
                className="md:hidden text-gray-500 
                 
              dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-2.5 me-1 "
                onClick={() => handleClicked()}
              >
                <svg
                  className="w-5 h-5"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 20 20"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                  />{" "}
                </svg>
                <span className="sr-only">Search</span>
              </button>
              <div className="relative hidden md:block w-full sm:rounded-xl ">
                <div className="absolute inset-y-0 start-0 flex items-center ps-3  cursor-pointer     ">
                  <svg
                    className=" w-4 h-4   hover:cursor-pointer
                    text-gray-500 dark:text-gray-400"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 20 20"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                    />
                  </svg>
                  <span className="sr-only ">Search icon</span>
                </div>
                <input
                  type="text"
                  id="search-navbar"
                  className="block w-full p-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Search..."
                />
              </div>
              <button
                data-collapse-toggle="navbar-search"
                type="button"
                className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700  border  border-red-300 
                 dark:focus:ring-gray-600"
                aria-controls="navbar-search"
                aria-expanded="false"
                onClick={() => handleClicked()}
              >
                <span className="sr-only">Open main menu</span>
                <svg
                  className="w-5 h-5"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 17 14"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M1 1h15M1 7h15M1 13h15"
                  />
                </svg>
              </button>
            </div>
            <div
              className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
              id="navbar-search"
            >
              <div className="relative mt-3 md:hidden  sm:w-1/3">
                <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none"></div>
                <input
                  type="text"
                  id="search-navbar"
                  className="block sm:w-full w-11 p-2 ps-10 text-sm text-gray-900 border border-red-300 rounded-lgfocus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 bg-red-300  "
                  placeholder="Search..."
                />
              </div>
              <ul
                className="flex flex-col p-4 md:p-0 mt-4 font-medium border rounded-lg  md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0  dark:bg-gray-800  md:dark:bg-gray-900 dark:border-gray-700 float-right
               "
              >
                <li className=" ">
                  <Link
                    to="/"
                    className="block py-2 px-3 rounded md:bg-transparent  md:p-0  
                     hover:text-blue-700"
                    aria-current="page"
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    to="/About"
                    className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                  >
                    About
                  </Link>
                </li>
                <li onClick={() => console.log("contact")}>
                  <Link
                    to="/contact"
                    className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                  >
                    Contact
                  </Link>
                </li>
                <li className=" ">
                  <Link
                    to="/bell"
                    className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                  >
                    <img
                      src={BellImage}
                      alt="Description of the image"
                      className="     text-center  h-1/2 sm:h-3/4 "
                    />{" "}
                  </Link>
                </li>

                <li>
                  <Link
                    to="/cart"
                    className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                  >
                    <img
                      src={ImageCart}
                      alt="Description of the image"
                      className="     text-center  h-1/2 sm:h-3/4 "
                    />{" "}
                  </Link>
                </li>
                <li>
                  <Link
                    to="/wishList"
                    className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                  >
                    <img
                      src={ImageHeart}
                      alt="Description of the image"
                      className="     text-center  h-1/2 sm:h-3/4 "
                    />{" "}
                  </Link>
                </li>
                <li>
                  <Link
                    to="/userProfile"
                    className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                  >
                    <img
                      src={Profile}
                      alt="Description of the image"
                      className="     text-center  h-1/2 sm:h-3/4 "
                    />{" "}
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          {showComponent && <NEXTHEADER></NEXTHEADER>}
        </nav>
      </div>
    </>
  );
};
export default NAVBAR;
