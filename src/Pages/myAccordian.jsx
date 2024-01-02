/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import { useState } from "react";
import { IoMdAdd } from "react-icons/io";
import { RiSubtractFill } from "react-icons/ri";
export const MYACCORDIAN = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <div
        className={`w-[97%] p-3 bg-white  flex relative mt-3 ${
          isOpen ? "open" : ""
        } `}
        onClick={toggleAccordion}
      >
        {question}
        <p className=" absolute right-[3px]">
          {isOpen ? <RiSubtractFill /> : <IoMdAdd />}
        </p>
      </div>
      {isOpen && <div className="w-[97%] p-3 bg-white  mb-3">{answer}</div>}
    </>
  );
};
