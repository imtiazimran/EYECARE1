/* eslint-disable react-refresh/only-export-components */
// import { FaPen } from "react-icons/fa6";
// import { RiDeleteBin6Line } from "react-icons/ri";
import NAVBAR from "../Navbar";

import { Footer } from "../footer";
// eslint-disable-next-line no-unused-vars, react/prop-types
const PROFILE = () => {
  return (
    <>
      <NAVBAR />

      <div
        className=" border border-red-300 
      lg:h-[120vh] h-[80vh]"
      >
        <div className="  flex mt-16  border border-gray-400">
          <ul className=" bg-white w-[25%]  mr-3 text-center profile-card   text-xl  border border-red-500 ">
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
          {/* <div className="text-3xl  mr-[5%] relative  mb-5 w-[75%] border border-red-300">
            <div>
              <img
                src="https://s3-alpha-sig.figma.com/img/1b8f/f0a6/4b59293592ac8299382937c4f963ac0a?Expires=1704672000&Signature=hxCBwinhDNyfLvU1uTZrMit1J~ivnOVHcLo7M-I3xdzjCF8w1QDPRwvmVDLvhw207G1BCeSwIvESFO3O8rTZ-~1Qgip7BSsH7LAP4Sy9sS8VR981TEDzyaPVrDImw2J5AEVNxK9wi~sPEf6pnfl-HERLapr9BU7hfu2txkhy2xOS~kjcRQ1m9U991qfYX6GkruucPQfCvNaEJk7GmZks2qjVDBcE-fYwvM~YwHHMRt-JuCEG94xsHbWQVbCxzItcFoQ66b7DhpAkct28caGSWhRUdhen6oh9XXn0VuzMRofVpPFHwo8zgsN98XHgxiGfZPcvtUyhv4XrgmjDNhneLw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
                alt=""
                className=" w-full card-backgrnd  absolute"
              />

              <div
                className=" mx-auto bg-white shadow-lg  overflow-hidden  absolute h-[50%] w-[70%] lg:w-[50%]
        lg:right-[25%] right-[15%]   top-[25%] flex    justify-center   border p-[1%]  rounded-xl text-center  z-50"
              >
                <div className="   p-3 flex  w-full">
                  <img
                    className="   rounded-full w-[45%] lg:w-[35%] bg-slate-400"
                    src="https://th.bing.com/th/id/R.19fa7497013a87bd77f7adb96beaf768?rik=144XvMigWWj2bw&riu=http%3a%2f%2fwww.pngall.com%2fwp-content%2fuploads%2f5%2fUser-Profile-PNG-High-Quality-Image.png&ehk=%2bat%2brmqQuJrWL609bAlrUPYgzj%2b%2f7L1ErXRTN6ZyxR0%3d&risl=&pid=ImgRaw&r=0" // Replace with your user's profile image URL
                    alt="User Profile"
                  />
                  <div className="  lg:w-[65%] w-[55%] ml-2">
                    {" "}
                    <h2 className="text-2xl font-bold text-gray-800">
                      John Doe
                    </h2>
                    <p className="text-sm text-gray-600">
                      Email:john.doe@example.com
                    </p>
                    <p className="text-sm text-gray-600">
                      Phone: +1 (123) 456-7890
                    </p>
                    <p className="text-sm text-gray-600">DOB:00/00/0000</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute">Afzal </div>
          </div> */}
        </div>
      </div>

      <Footer />
    </>
  );
};
export default PROFILE;
