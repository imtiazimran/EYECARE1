/* eslint-disable react-refresh/only-export-components */
import Girl from "./Images/Slider/Girl.png";
import Sign from "./Images/Slider/Sign.png";
import Glass from "./Images/Slider/glasses.png";
import RIGHTBTN from "./Images/Slider/right.png";
import LEFTBTN from "./Images/Slider/left.svg";

const SLIDER = () => {
  const imageData = [
    {
      id: 1,
      images: {
        imageUrl1: "./Images/Slider/Girl.png",
        imageUrl2: "./Images/Slider/Sign.png",
        imageUrl3: "./Images/Slider/glasses.png",
        imageUrl4: "./Images/Slider/right.png",
        imageUrl5: "./Images/Slider/left.svg",
      },
    },
  ];

  return (
    <>
      {imageData.map((image) => (
        <div
          className="sm:flex hidden sm:grid-cols-3 Slider-color mt-8 relative"
          key={image.id}
        >
          {/* First Image */}
          <div className="sm:w-1/3 sm:h-1/2 w-full h-1/2 relative">
            {/* Left Button */}
            <img
              src={LEFTBTN}
              alt="Description of the image"
              className="absolute top-0 left-0  mt-24 md:mt-36 lg:mt-40 xl:mt-52"
              onClick={() => {
                console.log("LeftClicked");
              }}
            />

            {/* Image */}
            <img
              src={Girl}
              alt="Description of the image"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Second Image */}
          <div className="sm:w-1/3 sm:h-1/2 w-full relative sm:top-1 text-2xl">
            <img
              src={Sign}
              alt="Description of the image"
              className="w-full h-full object-cover"
            />
            <div className=" bg-red-400  mt-5 px-3 py-2   mr-9 ml-9 rounded-lg hover:bg-green-400 font-bold text-center">
              {" "}
              shop Now
            </div>
          </div>

          {/* Third Image */}
          <div className="sm:w-1/3 sm:h-1/2 w-full h-1/2 relative">
            {/* Right Button */}
            <img
              src={RIGHTBTN}
              alt="Description of the image"
              className="absolute top-0 right-0 mt-24 md:mt-36 lg:mt-40 xl:mt-52"
              onClick={() => {
                console.log("RightClicked");
              }}
            />

            {/* Image */}
            <img
              src={Glass}
              alt="Description of the image"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      ))}
    </>
  );
};

export default SLIDER;
