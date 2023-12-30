import NAVBAR from "../Navbar";
import { Footer } from "../footer";
export const CART = () => {
  return (
    <>
      <NAVBAR></NAVBAR>
      <h1 className="text-3xl text-center  text-red-700 ">
        This is an our Cart Section{" "}
      </h1>
      <Footer></Footer>
    </>
  );
};
