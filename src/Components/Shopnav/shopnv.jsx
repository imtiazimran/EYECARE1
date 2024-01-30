/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
import { NavLink } from "react-router-dom";
import Camera from "./Images/Group 3154.svg";
// eslint-disable-next-line no-unused-vars
const ShopNavigation = () => {
  return (
    <>
      <div className=" bg-yellow-100 buy2get1  h-[7vh]  justify-center mt-3  items-center border sm:hidden flex">
        Buy 2 get 1 FREE{" "}
      </div>
      <nav className="  p-4   hidden sm:block">
        <div className="container mx-auto flex justify-between items-center ">
          <div className="  w-full  ">
            <ul className=" grid grid-cols-2 sm:flex space-x-4 gap-2   justify-evenly  ">
              <li
                className=" ml-3 sm:ml-0"
                onClick={() => {
                  console.log("EYEGLASS");
                }}
              >
                <NavLink to={"/Eyeglass"} className="  hover:text-gray-300">
                  EYEGLASS
                </NavLink>
              </li>
              <li>
                <NavLink
                  to={"/Sunglass"}
                  className="hover:text-gray-300"
                  onClick={() => {
                    console.log("SUNGLASSES");
                  }}
                >
                  SUNGLASSES
                </NavLink>
              </li>
              <li>
                <NavLink
                  to={"/ComputerGlasses"}
                  className="hover:text-gray-300"
                  onClick={() => {
                    console.log("COMPUTERGLASS");
                  }}
                >
                  COMPUTER GLASSES
                </NavLink>
              </li>
              <li>
                <NavLink
                  to={"/ContactLens"}
                  onClick={() => {
                    console.log("CONTACTLENS");
                  }}
                  className="hover:text-gray-300"
                >
                  CONTACT LENS
                </NavLink>
              </li>
              <li>
                <NavLink
                  to={"/PowerdGlasses"}
                  className="hover:text-gray-300"
                  onClick={() => {
                    console.log("POWERDGLASSES");
                  }}
                >
                  POWERD GLASSES
                </NavLink>
              </li>
              <li>
                <NavLink
                  to={"/ccessories"}
                  className=" hover:text-gray-300"
                  onClick={() => {
                    console.log("ACCESSSORIES");
                  }}
                >
                  ACCESSSORIES
                </NavLink>
              </li>
              <li>
                <NavLink
                  to={"/luxe"}
                  className=" hover:text-gray-300 font-bold"
                >
                  LUXE
                </NavLink>
              </li>
              <NavLink className=" flex">
                <span
                  href={"TryOn"}
                  className="hover:text-gray-300 flex    w-full"
                >
                  <button
                    className=" bg-red-300 px-2   rounded-md   w-auto font-bold"
                    onClick={() => {
                      console.log("TRYON");
                    }}
                  >
                    {" "}
                    Try on
                  </button>

                  <img
                    src={Camera}
                    alt="Description of the image"
                    className=" sm:ml-5 ml-2"
                  />
                </span>
              </NavLink>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};
export default ShopNavigation;
