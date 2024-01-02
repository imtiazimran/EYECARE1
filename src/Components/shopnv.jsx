/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
import Camera from "./Images/Nav/Group 3154.svg";
// eslint-disable-next-line no-unused-vars
const BELOWNAVIGATION = () => {
  return (
    <>
      <div className=" bg-yellow-100 buy2get1  h-[7vh]  justify-center mt-3  items-center border sm:hidden flex">
        Buy 2 get 1 FREE{" "}
      </div>
      <nav className="  p-4   hidden sm:block">
        <div className="container mx-auto flex justify-between items-center ">
          <div className="  w-full  ">
            <ul className=" grid grid-cols-2 sm:flex space-x-4 gap-2   justify-evenly  ">
              <li
                className=" ml-3 sm:ml-0"
                onClick={() => {
                  console.log("EYEGLASS");
                }}
              >
                <a href="#" className="  hover:text-gray-300">
                  EYEGLASS
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-gray-300"
                  onClick={() => {
                    console.log("SUNGLASSES");
                  }}
                >
                  SUNGLASSES
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-gray-300"
                  onClick={() => {
                    console.log("COMPUTERGLASS");
                  }}
                >
                  COMPUTER GLASSES
                </a>
              </li>
              <li>
                <a
                  href="#"
                  onClick={() => {
                    console.log("CONTACTLENS");
                  }}
                  className="hover:text-gray-300"
                >
                  CONTACT LENS
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-gray-300"
                  onClick={() => {
                    console.log("POWERDGLASSES");
                  }}
                >
                  POWERD GLASSES
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className=" hover:text-gray-300"
                  onClick={() => {
                    console.log("ACCESSSORIES");
                  }}
                >
                  ACCESSSORIES
                </a>
              </li>
              <li>
                <a href="#" className=" hover:text-gray-300 font-bold">
                  LUXE
                </a>
              </li>
              <li className=" flex">
                <a href="/" className="hover:text-gray-300 flex    w-full">
                  <button
                    className=" bg-red-300 px-2   rounded-md   w-auto font-bold"
                    onClick={() => {
                      console.log("TRYON");
                    }}
                  >
                    {" "}
                    Try on
                  </button>

                  <img
                    src={Camera}
                    alt="Description of the image"
                    className=" sm:ml-5 ml-2"
                  />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};
export default BELOWNAVIGATION;
