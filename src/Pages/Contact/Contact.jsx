/* eslint-disable react-refresh/only-export-components */

// import { BELOWNAVIGATION } from "../shopnv";
// import { Footer } from "../footer";
// import Footer from "../footer";
import Navbar from "../../Components/Navbar";
// import Navbar from "../Navbar";
import Footer from "../../Components/footer";
// import { Footer } from "../../Pages/footer";
const CONTACT = () => {
  return (
    <>
      {/* <BELOWNAVIGATION></BELOWNAVIGATION> */}
      <Navbar />
      <h1 className="text-3xl text-center  text-red-700 ">
        This is an our contact Section{" "}
      </h1>
      <Footer />
    </>
  );
};
export default CONTACT;
