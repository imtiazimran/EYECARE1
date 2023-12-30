/* eslint-disable react-refresh/only-export-components */

import { BELOWNAVIGATION } from "./shopnv";
import FIRST from "./images/Aboutus/First.png";
import SECOND from "./images/Aboutus/Second.png";

import THIRD from "./images/Aboutus/Third.png";

import FORTH from "./images/Aboutus/Forth.png";
import video from "./images/Aboutus/five.png";
import FIVE from "./images/Aboutus/Rectangle 2959.png";
import SIX from "./images/Aboutus/Rectangle 2960.png";
import SEVEN from "./images/Aboutus/Rectangle 2962.png";
import { TEAMMEMBER } from "./card";
// import { Footer } from "./footer";

import { HEIRING } from "./card";
// import { HEIRING } from "./Cards/card";

import { JOBCATEGORIES } from "./card";
const ABOUT = () => {
  return (
    <>
      <BELOWNAVIGATION></BELOWNAVIGATION>

      <div className=" hidden sm:block ">
        <hr className="  bg-black" />
        <div className="justify-evenly">
          <h1 className=" text-center text-2xl font-bold">About Us </h1>
          <div className=" flex justify-evenly w-full mt-9">
            <img src={FIRST} alt="" className=" w-[22vw]  relative  " />
            <img src={SECOND} alt="" className=" w-[22vw] relative    top-20" />
            <img src={THIRD} alt="" className=" w-[22vw]" />
            <img src={FORTH} alt="" className=" w-[22vw] relative   top-14" />
          </div>
          <div className="   mt-[18%]  ">
            <h1 className=" text-center text-4xl  font-semibold tracking-normal">
              We are building vision health that is stylized and fashionable
            </h1>
            <p className="text-xl p-4 text-center">
              {` Welcome to EyeCare.com, your premier destination for the latest trends in online eyeglasses and sunglasses. We are dedicated to helping you protect your eyes and express your style with a curated collection of eyewear that's not only fashionable but also designed with your vision health in mind. At EyeCare.com, we believe that your eyes deserve the best, and we're here to provide it.`}
            </p>
            <div className="About_back text-white justify-evenly flex p-3">
              <p>
                <span>Year</span>
                <br />
                <span>2024</span>
              </p>

              <p>
                <span>100+</span>
                <br />
                <span>Employees</span>
              </p>
              <p>
                <span>650k</span>
                <br />
                <span>User</span>
              </p>
              <p>
                <span>4.5</span>
                <br />
                <span>Star</span>
              </p>
            </div>
          </div>
        </div>
        <div className=" text-center ">
          <h1 className=" text-4xl font-semibold text-center mt-7">
            {" "}
            Our Story
          </h1>
          <div className=" mt-7  justify-center  flex">
            {" "}
            <img src={video} alt="" />
          </div>
          <h1 className=" text-3xl mt-8  font-semibold">
            Our Journey for eyewear solution
          </h1>
          <p className=" text-xl text-center mt-4">
            EyeCare.com is founded to combine fashion and function in the world
            of eyewear. We understand that your eyes are precious, and your
            eyewear should not only complement your style but also ensure the
            utmost comfort and visual clarity.
          </p>
        </div>
        <hr className="h-1  bg-black mt-[10vh]" />
        <div className=" mt-[5%] mb-[10%]">
          <h1 className=" text-center text-4xl  font-semibold ">
            {" "}
            What Sets Us Apart
          </h1>
          <div className=" flex  justify-evenly flex-col-3 mt-5">
            <img src={FIVE} alt="" className="w-[33vw] h-auto" />

            <img src={SIX} alt="" className=" w-[20vw] " />
            <img src={SEVEN} alt="" className="w-[33vw]" />
          </div>
        </div>
        <TEAMMEMBER></TEAMMEMBER>

        <h1 className="text-center text-3xl border-red-300 mt-[5vh] mb-[5vh]">
          We are Hiring{" "}
        </h1>

        <span className="text-center  ml-[1.3%]  border   border-red-50 bg-white p-4 text-2xl font-semibold rounded-lg   flex w-[30vw] relative ">
          Job Categories
        </span>
        <div className=" flex">
          <HEIRING></HEIRING>
          <JOBCATEGORIES></JOBCATEGORIES>
        </div>
        {/* <Footer></Footer> */}
      </div>
    </>
  );
};
export default ABOUT;

export const TermAndCondition = () => {
  return (
    <>
      <div className=" text-center text-3xl ">
        Term And Condition Are Align here
      </div>
    </>
  );
};
