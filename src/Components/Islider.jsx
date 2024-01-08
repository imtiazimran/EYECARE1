/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable react-refresh/only-export-components */
/* eslint-disable no-unused-vars */

import React, { useEffect, useState } from "react";
import FIRST from "./images/Slider/first.png";
import SECOND from "./images/Slider/Second.png";

import THIRD from "./images/Slider/third.png";

const Isslider = () => {
  const [allImages, setallImages] = useState([FIRST, SECOND, THIRD]);
  const [selectedImage, setSelectedImage] = useState(0);

  useEffect(() => {
    setInterval(() => {
      setSelectedImage((selectedImage) =>
        selectedImage >= 2 ? 0 : selectedImage + 1
      );
    }, 3000);
  });
  return (
    <div className="   hidden sm:block ">
      {/* <button
        onClick={() => {
          if (selectedImage > 0) setSelectedImage(selectedImage - 1);
        }}
        className="w-[32vw]  absolute z-20    h-full  left-0"
      ></button> */}
      <img
        src={allImages[selectedImage]}
        alt="image are  ot load"
        width={1400}
        height={576}
        className=" z-0 w-full"
      />
      {/* <button
        onClick={() => {
          if (selectedImage < allImages.length - 1)
            setSelectedImage(selectedImage + 1);
        }}
        className="w-[32vw]  absolute z-20  right-0   h-full"
      ></button> */}
    </div>
  );
};

export default Isslider;
