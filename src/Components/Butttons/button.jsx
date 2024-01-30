import "./buttons.css";

export const StyleMebtn = () => {
  return (
    <>
      <button className="stylebtn hover:bg-brown-700 mt-6 ml-4 w-[44%]  h-10">
        Shop Now
      </button>
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
