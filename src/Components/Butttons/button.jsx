import "./buttons.css";
import { Link } from "react-router-dom";
export const StyleMebtn = () => {
  return (
    <>
      <Link to={"Eyeglass"}>
        <button className="stylebtn hover:bg-brown-700 mt-6 ml-4 w-[44%]  h-10">
          Shop Now
        </button>
      </Link>
    </>
  );
};
export const AddtoCart = () => {
  return (
    <>
      <button className="addCart text-white rounded-lg "> Add to bag </button>
    </>
  );
};

export const BuyNow = () => {
  return (
    <>
      <button className="stylemebtn"> Style me </button>
    </>
  );
};
export const ResetFilter = () => {
  return (
    <>
      <button className=" resetbtn p-5 border  w-[45%] ml-[2.5%] ">
        {" "}
        Reset Filter{" "}
      </button>
    </>
  );
};
export const ApplyFilter = () => {
  return (
    <>
      <button className=" p-5 applyBtn resetbtn   text-white   w-[45%] ml-[5%]">
        {" "}
        Reset Filter{" "}
      </button>
    </>
  );
};

export const StartScanning = () => {
  return (
    <>
      <button className="Scanningbtn text-white px-10  py-2 rounded-full mt-3">
        Start
      </button>
    </>
  );
};
