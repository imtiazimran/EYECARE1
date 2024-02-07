/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
/* eslint-disable react-refresh/only-export-components */
// import { Link } from "react-router-dom";
import { FaFilter } from "react-icons/fa";
import { useState } from "react";
import "./EyeGlass.css";
import { ResetFilter, ApplyFilter } from "../Butttons/button";
import ShopNavigation from "../Shopnav/shopnv";
import svgpath from "/__.svg";
import { ProductList } from "./Components/ProductList";
import ProductDetails from "./Components/productDetail";
import imageone from "./image/Rectangle 2805 (9).png";
import imagetwo from "./image/image 83.png";
import imageThree from "./image/image 82.png";
import { ProductsDetails } from "./ProductsDetails";
const WISHLIST = () => {
  const [isOpen, setIsOpen] = useState(false);
  const togglefilter = () => {
    setIsOpen(!isOpen);
  };
  // eslint-disable-next-line no-unused-vars
  const [selectedProduct, setSelectedProduct] = useState(null);

  return (
    <>
      <div>
        <ShopNavigation />
        <div className=" hidden sm:block">
          <div className=" hidden sm:flex relative m-[1vw]">
            <img src={imageone} alt="" className=" w-[31vw]   Hero" />
            <div className="Hero w-[33vw]  p-8 relative">
              <h1 className=" hero-text  text-center sm:text-3xl  py-9 absolute bottom-[42%] left-[30%]">
                EYE GLASS
              </h1>
              <p className="hero-text  text-center      w-[50%] absolute left-[25%] h-[12%]  bottom-[35%]">
                Discover a world of eyeglasses that reflect your unique
                personality and needs.
              </p>
            </div>
            <div className=" relative ">
              <img src={imageThree} alt="" className="Hero w-[31vw] " />
              <img
                src={imagetwo}
                alt=""
                className="  absolute   bottom-[20%] myObject"
              />
            </div>
          </div>

          <h1 className="   mt-6 w-[97%] text p-[1%]  ">
            Showing results according to your prenscription{" "}
          </h1>

          <div
            className=" mt-[2%] bg-white
      hidden sm:block w-[97%] "
          >
            <div className=" flex  align   text-2xl justify-evenly  w-full p-3   filter relative ">
              <div className="flex w-[28%]">
                <FaFilter className="short text-[25px]" />
                <p className="text-[20px] Shorting ml-[5%]  short "> Short</p>
                <p className=" lg:text-[20px] lg:ml-6 Recommend ml-3 text-[15px]">
                  {" "}
                  Recommended
                </p>
              </div>
              <div className=" flex h-full filterOpacity  w-[50%]">
                <p className="  lg:text-[18px]  lg:ml-6 low  text-[15px]   flex ml-3 option ">
                  Low To High
                </p>
                <p className=" lg:text-[18px]  ml-3 text-[15px] lg:ml-6 low flex option">
                  High To low
                </p>
                <p className=" lg:text-[18px]  lg:ml-6 low flex text-[15px] ml-3 option">
                  Popularity
                </p>
                <p className=" lg:text-[18px]  lg:ml-6 low flex text-[15px] ml-3 option">
                  New Arrival
                </p>
              </div>
              <div className=" flex    w-[15%]" onClick={togglefilter}>
                <img src={svgpath} alt="Filter SVG" />
                <p className=" lg:ml-[7%]  lg:text-[20px]  ml-3">Filter</p>
              </div>
            </div>

            <div className="   ">
              {/* FILTER IS START HERE  */}
              <div className=" bg-red-500">
                {isOpen && (
                  <div
                    className=" mb-3 absolute z-20 bg-white 
                  right-[4%] w-[50%] 
                  h-[85%]   lg:h-[130%]"
                  >
                    <hr className=" border-black mb-4 p-0" />
                    <ResetFilter />
                    <ApplyFilter />
                    <hr className=" border-black mt-4 p-0  w-full" />

                    <div className=" bg-white h-full">
                      <ul
                        className=" 
                       w-[45%]  filterOption h-full "
                      >
                        <li className=" w-full border border-b-black   text-center filtersingle">
                          Price
                        </li>
                        <li className="  w-full border  border-b-black text-center filtersingle">
                          Gender
                        </li>
                        <li className="  w-full border  border-b-black filtersingle text-center">
                          Brand
                        </li>
                        <li className="  w-full border  border-b-black   text-center filtersingle">
                          Frame size
                        </li>
                        <li className="  w-full border  border-b-black  text-center filtersingle">
                          Frame Color{" "}
                        </li>
                        <li className="  w-full border border-b-black   text-center filtersingle">
                          Shape & Style
                        </li>
                        <li className="  w-full border border-b-black  text-center filtersingle">
                          Material
                        </li>
                        <li className="  w-full border  border-b-black text-center filtersingle ">
                          Weight
                        </li>
                        <li className="  w-full  text-center filtersingle">
                          Collection
                        </li>
                      </ul>
                    </div>
                  </div>
                )}
              </div>
              <ProductList/>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default WISHLIST;
