/* eslint-disable no-undef */
/* eslint-disable react-refresh/only-export-components */
import { FaFilter } from "react-icons/fa";
import { useState } from "react";
// import Navbar from "../../Components/Navbar";
import Navbar from "../../Components/Header/Navbar";
import "./wishlist.css";
import { ResetFilter, ApplyFilter } from "../../Components/Butttons/button";
// import ShopNavigation from "../../Components/shopnv";
import ShopNavigation from "../../Components/Shopnav/shopnv";
// import Footer from "../../Components/footer";
import Footer from "../../Components/Footer/footer";
import svgpath from "/__.svg";

// import { AddToBag } from "../../Components/card";
import { AddToBag } from "./Components/AddToBag";
const WISHLIST = () => {
  const [isOpen, setIsOpen] = useState(false);
  const togglefilter = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div>
        <Navbar />
        <ShopNavigation />
        <div className=" hidden sm:block">
          <div className=" hidden sm:flex relative m-[1vw]">
            <img
              src="https://s3-alpha-sig.figma.com/img/7145/3906/262a27e0902c9ddfcaf7dd793b7b0a80?Expires=1704672000&Signature=gQZTk1QX~xOGMV2Zt185IIyMR3a3o4fKUJ8HMzv2m9m89benU2~hKxSNYbJlIB~T60tu3RSzGikLoS0HAdzzWWIX6s1LPGNq-3DcqtNUblEPh6BdSGgiH5xk-N6bMFpc1mUgbMzDnkhoq29ps9UGshWd3O6ebasToFzUdQ-wAaZvHsX2sY45SWR2PWEWFt7ziy5~-1xBwI7HR6D9770AwIyn1Tl02LflcPvpVgA5FJ-bqvrK7sKVsbfsvuekXmFy0ApNAH17yd0M0d6dOyQ-t1yTrR-rzpB7IoC8C~HnjcgrK2yJ13fdZiK8Dbnci8yJoLpswsEcCc1k0grzP0oAPw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
              alt=""
              className=" w-[31vw]   Hero"
            />
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
              <img
                src="https://s3-alpha-sig.figma.com/img/ffd8/a55c/38f4009d2e037a42180471aacd755914?Expires=1704672000&Signature=ln1BYjzOlHPjZgpcbecbjULKTmnFipgNxEHNfOSyGOem7v1yQvGiYZ7kQSQitjtaBl0HO~OWqe~dPaxFGbQwT9oQeqNct6rHPWt~pyxoRxesDDUzy3BiAnww5F7uq~0WyF1hT-NJxhHhd29FAjbwe5LCo83fjkwVUvEPyMWOqpJ439sChxXT1rVpM6lfnT5RQJkYvXqKFxDJTXQt137rQrJq~qpFKU7kLLVGLUS~7FB8AKsCYw5voDs6pFB0A8Z2SgjmpQa0xQpqCXiGea9Y73wC4S~9IxHR0ujh0Pcyui1wdRV9ySXmpTw-T7ASrnrfSxuxFW2ZfPF6XAGmATvdiA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
                alt=""
                className="Hero w-[31vw] "
              />
              <img
                src="https://s3-alpha-sig.figma.com/img/eda1/b982/37bd77438186067c4d3d1e562983ad88?Expires=1704672000&Signature=O-37CW4OWyyAb1~7xAEAMPuzIo-FHzadgv4FJPq5HSYTcVpFSzlgobSmEDotrfLZDIWZZjqqzYHy6Dx3dpbS-OdgpRkozZ5L~NbUObPQqgEljjrCiPN5dUQHmycolc3NfWKxjtkLexTV0uCevh9WoK4UPsRwANAQdjEZeeg-gFVE8dFGqmG2x0e6aaoynrHf3Hy-aFFepWxd37mwE2ap5DHXtN~4HoysnjHMJUXoGgPnFeytT1X4TtBr2pzULXD9tfMEf9Te~R02oSpTIeUuorlhf28UhzRh9pvtKClk71lk4gi8AEHpucOEwEETzdpDwqxQCh8l6va4Q7chb4aLag__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
                alt=""
                className="  absolute   bottom-[42%] myObject"
              />
            </div>
          </div>

          <h1 className="   mt-6 w-[97%] text p-[1%]  ">
            Showing results according to your prenscription{" "}
          </h1>

          <div
            className=" mt-[2%] bg-white
      hidden sm:block w-[97%]"
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
              <div className="">
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
              <AddToBag />
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};
export default WISHLIST;
