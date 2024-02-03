/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useState } from "react";
import { StartScanning } from "../../../Components/Butttons/button";
import { IoMdCheckmarkCircle } from "react-icons/io";
const SimpleCard = ({ name, imageUrl, id, handleImageClick, isSelected }) => {
  return (
    <div
      className={`card inline-block cursor-pointer hover:scale-105   ease-in-out duration-300 w-[1/2] m-3 relative ${
        isSelected && "scale-105"
      }`}
    >
      <img
        src={imageUrl}
        alt={name}
        className="curser-pointer"
        onClick={() => handleImageClick(id)}
      />

      {isSelected && (
        <IoMdCheckmarkCircle
          className={`absolute top-0 left-0   mt-1 ml-1 text-white `}
        />
      )}

      <div className="card-content text-center">
        <p className="card-identity text-center relative text-white sm:bottom-9 bottom-1 rounded-xl p-2">
          {name}
        </p>
      </div>
    </div>
  );
};

export default SimpleCard;
export const Features = () => {
  return (
    <>
      <div className=" h-[80vh]  bg-white w-[50%] card-identity-dimension   m-5  p-2">
        <h1 className="StyleFeature font-bold ">Features</h1>
        <div className="   justify-center  items-center  text-center flex h-[90%] ">
          <div className="text-[25px] w-[90%]">
            <p>
              {" "}
              Scan your face to get perfect frame that suits your personality
            </p>
            <a href="#">
              <StartScanning />
            </a>
          </div>
        </div>
      </div>
    </>
  );
};
