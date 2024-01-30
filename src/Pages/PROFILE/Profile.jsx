/* eslint-disable react-refresh/only-export-components */
import { NavLink } from "react-router-dom";
import { IoMdAdd } from "react-icons/io";
import "./Profile.css";

import ShopNavigation from "../../Components/Shopnav/shopnv";
import UserProfileCard from "./Components/Profilecard";
import UserAddressCard from "./Components/Useradrees";
const PROFILE = () => {
  return (
    <>
      <ShopNavigation />
      <div
        className=" 
         lg:h-[100vh] h-full p-3"
      >
        <div className="  flex ">
          <ul
            className=" bg-white w-[25%]  mr-3 text-center profile-card   text-xl  
           "
          >
            <li className="  card-text ">
              <NavLink href="#"> My Profile</NavLink>
            </li>
            <hr />

            <li className=" card-text ">
              <NavLink to={"/wishList"}>Whishlist</NavLink>
            </li>
            <hr />
            <li className=" card-text ">
              <NavLink href="#">Offers</NavLink>
            </li>
            <hr />
            <li className=" card-text ">
              <NavLink href="#">Payments</NavLink>
            </li>
            <hr />
            <li className=" card-text ">
              <NavLink href="#">My Orders</NavLink>
            </li>
            <hr />
            <li className=" card-text ">
              <NavLink href="#">Logout</NavLink>
            </li>
          </ul>

          <div className=" w-[85%]">
            <div
              className="profilecard 
             lg:h-[70%]  w-full  flex justify-center  items-center"
            >
              <div className=" h-[70%]   w-[70%]">
                {" "}
                <UserProfileCard />
              </div>
            </div>

            <div
              className=" bg-white
             mt-[2%]   w-full justify-center  items-center   lg:h-[60%] p-2 pl-[5%]"
            >
              <div className="mb-2 flex justify-between">
                <span className="font-semibold text-xl ">My Address</span>
                <span className=" flex justify-center items-center font-semibold text-xl mr-[3%]">
                  <IoMdAdd />
                  <p>Add New Address</p>
                </span>
              </div>

              <UserAddressCard />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default PROFILE;
