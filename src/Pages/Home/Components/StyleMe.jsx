import Girl from "./imgae/image 54.png";
import Women from "./imgae/image 55.png";
import { Link } from "react-router-dom";
import "./Style.css";

export const Style = () => {
  return (
    <>
      <div
        className="sm:w-full  relative  p-5 sm:pl-3 sm:pt-3  Style  middle-image   hidden 
         sm:block border border-red-700  md:h-[40vh] lg:h-[50vh] 
        "
      >
        <div>
          <img
            src={Girl}
            alt="Girl"
            className=" w-[25%] absolute z-10 bottom-0   h-full "
          />
        </div>
        <div className="  absolute  h-full   right-[25%]  left-[25%] bottom-0 text-center   flex flex-col justify-center items-center italic ">
          <h1
            className="  sm:text-3xl  middletext  text-xl  italic   
            sm:w-[70%] font-semibold sm:font-extrabold "
          >
            Unlock Your Unique Style
            <p className="middletext1 text-center font-light  textsm:font-bold mt-0">
              let us help you style according to your personality
            </p>
            <button className="  stylebtn    sm:mt-9   text-sm  sm:px-6 sm:py-3 ">
              {" "}
              <Link to={"Styleme"}> Style Me</Link>
            </button>
          </h1>
        </div>
        <div>
          <img
            src={Women}
            alt="Girl"
            className="h-full   w-[25%] absolute z-10 bottom-0  right-0 "
          />
        </div>
      </div>
    </>
  );
};
