/* eslint-disable react-refresh/only-export-components */
// import { FaPen } from "react-icons/fa6";
// import { RiDeleteBin6Line } from "react-icons/ri";
import { IoMdAdd } from "react-icons/io";
import "./Profile.css";
// import Navbar from "../../Components/Navbar";
import Navbar from "../../Components/Header/Navbar";

// import Footer from "../../Components/footer";
import Footer from "../../Components/Footer/footer";
// import ShopNavigation from "../../Components/shopnv";
import ShopNavigation from "../../Components/Shopnav/shopnv";
import UserProfileCard from "./Components/Profilecard";
import UserAddressCard from "./Components/Useradrees";
const PROFILE = () => {
  return (
    <>
      <Navbar />
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
            <li className=" p-4 card-text ">
              <a href="#">My Profile</a>
            </li>
            <hr />

            <li className="p-4 card-text ">
              <a href="#">Whishlist </a>
            </li>
            <hr />
            <li className="p-4 card-text ">
              <a href="#">Offers</a>
            </li>
            <hr />
            <li className="p-4 card-text ">
              <a href="#">Payments</a>
            </li>
            <hr />
            <li className="p-4 card-text ">
              <a href="#">My Orders</a>
            </li>
            <hr />
            <li className="p-4 card-text ">
              <a href="#">Logout</a>
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
                <span className=" flex border border-red-300 justify-center items-center font-semibold text-xl">
                  <IoMdAdd />
                  <p>Add New Address</p>
                </span>
              </div>

              <UserAddressCard />
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};
export default PROFILE;
