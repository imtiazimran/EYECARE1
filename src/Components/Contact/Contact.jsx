/* eslint-disable react-refresh/only-export-components */
import NAVBAR from "../Navbar";
// import { BELOWNAVIGATION } from "../shopnv";
import { Footer } from "../footer";
const CONTACT = () => {
  return (
    <>
      <NAVBAR></NAVBAR>
      {/* <BELOWNAVIGATION></BELOWNAVIGATION> */}
      <h1 className="text-3xl text-center  text-red-700 ">
        This is an our contact Section{" "}
      </h1>
      <Footer></Footer>
    </>
  );
};
export default CONTACT;
