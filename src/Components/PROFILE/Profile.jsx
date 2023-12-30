/* eslint-disable react-refresh/only-export-components */
import { FaPen } from "react-icons/fa6";
import { RiDeleteBin6Line } from "react-icons/ri";

import { Footer } from "../footer";
// eslint-disable-next-line no-unused-vars, react/prop-types
const PROFILE = () => {
  return (
    <>
      <div className=" flex mt-16">
        <ul className=" bg-white w-[15%]  mr-3 text-center profile-card   text-xl  ">
          <li className=" p-4 card-text ">
            <a
              href="#"
              onClick={() => {
                console.log("this is my profile section");
              }}
            >
              My Profile
            </a>
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

        <div className="text-3xl  w-full mr-[5%] relative mb-5">
          <img
            src="https://s3-alpha-sig.figma.com/img/1b8f/f0a6/4b59293592ac8299382937c4f963ac0a?Expires=1704672000&Signature=hxCBwinhDNyfLvU1uTZrMit1J~ivnOVHcLo7M-I3xdzjCF8w1QDPRwvmVDLvhw207G1BCeSwIvESFO3O8rTZ-~1Qgip7BSsH7LAP4Sy9sS8VR981TEDzyaPVrDImw2J5AEVNxK9wi~sPEf6pnfl-HERLapr9BU7hfu2txkhy2xOS~kjcRQ1m9U991qfYX6GkruucPQfCvNaEJk7GmZks2qjVDBcE-fYwvM~YwHHMRt-JuCEG94xsHbWQVbCxzItcFoQ66b7DhpAkct28caGSWhRUdhen6oh9XXn0VuzMRofVpPFHwo8zgsN98XHgxiGfZPcvtUyhv4XrgmjDNhneLw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
            alt=""
            className=" w-full card-backgrnd  absolute"
          />

          <div
            className=" mx-auto bg-white shadow-lg  overflow-hidden absolute
            left-[15%]  bottom-[15%]
          right-[18%]   flex    justify-center w-[60%]    border pt-[1%] pb-[1%] rounded-xl "
          >
            <img
              className="   object-cover rounded-full profile-img  w-[10%]  bg-slate-400  -ml-9"
              src="https://s3-alpha-sig.figma.com/img/2469/d293/c6b5d0f76af6f394fbe501c76b567cc2?Expires=1704672000&Signature=A0szUqKu3bseXH5W74Of9waJSMe8hl4ly-lEwMhgTIeg6NQGGjXZ9W6UoV8lOqoHNZy6CTdac6UWfRiRDgZvunFZXN0GytPmpaHJm15f~JluX66uKNkOpgRtcs6jEdWqvVxVS7dL6D3pCt9VLl0Mvq27So9LsbWjNO2~eMMi2Q8~RDPTuYl5S5TihkFXH4n4K4PRdiIscE3gSYTUktWmMB2ybh4zCej4UG5DU3SyC75uu1RjaIVykFxYwreqou3cGR3onqJWIL97fIdiFFAeKSAvk0Ah-~sgkQD0EMw0UaLUu-7WG9hG~XSu-OdesS4IzBYEk9UH4NNcaI4ztBlB1w__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" // Replace with your user's profile image URL
              alt="User Profile"
            />
            <div className="p-6">
              <h2 className="text-2xl font-bold text-gray-800">John Doe</h2>
              <p className="text-sm text-gray-600">
                Email:john.doe@example.com
              </p>
              <p className="text-sm text-gray-600">Phone: +1 (123) 456-7890</p>
              <p className="text-sm text-gray-600">DOB:00/00/0000</p>
            </div>
          </div>
        </div>
      </div>

      {/*   THIS is an our ADDRESS  CARD  */}
      <div
        className="  bg-white
      ml-[22%] h-[50vh] relative mr-[6%] card-backgrnd  mt-[5vh]  border "
      >
        <button
          className="  absolute top-1 right-0 p-3"
          onClick={() => {
            console.log("this is an button for add our new address ");
          }}
        >
          {" "}
          + Add new Adddres{" "}
        </button>
        <div
          className="mx-auto bg-white shadow-lg rounded-xl
      addres-card  absolute  left-[5vw]
       top-[20%] "
        >
          <div className="p-6 h-[60%]">
            <h2 className="text-2xl font-bold text-gray-800">John Doe</h2>
            <p className="text-sm text-gray-600">
              Address: 123 Main Street, Cityville, State, ZIP
            </p>
            <p className="text-sm text-gray-600">
              Mobile Number: +1 (123) 456-7890
            </p>

            <div
              className="flex   relative  p-4    mt-[12%] mb-[5%]
            "
            >
              <button className="  font-bold py-2 px-4 mr-2 rounded  absolute    top-[50%] right-[30%] flex ">
                <FaPen
                  className="text-2xl p-1"
                  onClick={() => {
                    console.log("All content from here is Edit ");
                  }}
                />
                Edit
              </button>
              <button
                className=" text-red-500 font-bold py-2 px-4 ml-4
              hover:text-red-700 rounded  absolute   top-[50%] right-[10%] flex"
                onClick={() => {
                  console.log("this is button for delete the address ");
                }}
              >
                <RiDeleteBin6Line className="text-red-500 cursor-pointer  text-2xl" />
                Delete
              </button>
            </div>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </>
  );
};
export default PROFILE;
