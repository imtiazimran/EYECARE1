/* eslint-disable react/prop-types */

import { FaMapMarkerAlt } from "react-icons/fa";
import { IoMdTime } from "react-icons/io";
export const Heiring_opper = ({ position, Experience, salary, role }) => {
  return (
    <>
      <div className=" w-[60vw] bg-white rounded-xl p-3  mt-3 h-[45%] border-l-8  ">
        <p className=" flex w-full justify-evenly">
          <span>{position}</span>
          <span>{Experience}</span>
          <span>{salary}</span>
        </p>
        <p className="mt-[5%]  text-xl">{role}</p>
        <p className=" mt-[2%] h-[15%]    flex">
          <span className="flex  m-3 justify-evenly       ">
            <FaMapMarkerAlt style={{ fontSize: "24px" }} />
            Work From Home
          </span>
          <span className="border-r-2"></span>
          <span className="flex  m-3 justify-evenly       ">
            <IoMdTime style={{ fontSize: "24px" }} />
            10:00-05:00
          </span>
        </p>
      </div>
    </>
  );
};
