/* eslint-disable no-undef */
/* eslint-disable react-refresh/only-export-components */
import { FaFilter } from "react-icons/fa";
import { CiHeart } from "react-icons/ci";
import "./wishlist.css";
import { BELOWNAVIGATION } from "../shopnv";
// eslint-disable-next-line no-unused-vars
// const imageUrl1 = process.env.PUBLIC_URL + "/images/WishList/image 15.png";
import imageUrl1 from "/images/WishList/image 15.png";
import { AddtoCart } from "../Butttons/button";
const WISHLIST = () => {
  return (
    <>
      <BELOWNAVIGATION></BELOWNAVIGATION>
      <div className=" hidden sm:block">
        <div className=" hidden sm:flex relative">
          <img
            src="https://s3-alpha-sig.figma.com/img/7145/3906/262a27e0902c9ddfcaf7dd793b7b0a80?Expires=1704672000&Signature=gQZTk1QX~xOGMV2Zt185IIyMR3a3o4fKUJ8HMzv2m9m89benU2~hKxSNYbJlIB~T60tu3RSzGikLoS0HAdzzWWIX6s1LPGNq-3DcqtNUblEPh6BdSGgiH5xk-N6bMFpc1mUgbMzDnkhoq29ps9UGshWd3O6ebasToFzUdQ-wAaZvHsX2sY45SWR2PWEWFt7ziy5~-1xBwI7HR6D9770AwIyn1Tl02LflcPvpVgA5FJ-bqvrK7sKVsbfsvuekXmFy0ApNAH17yd0M0d6dOyQ-t1yTrR-rzpB7IoC8C~HnjcgrK2yJ13fdZiK8Dbnci8yJoLpswsEcCc1k0grzP0oAPw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
            alt=""
            className=" w-[33vw]  h-[60vh] Hero"
          />
          <div className="Hero w-[33vw] h-[60vh]  p-8 relative">
            <h1 className=" hero-text  text-center sm:text-3xl  py-9 absolute bottom-[42%] left-[30%]">
              EYE GLASS
            </h1>
            <p className="hero-text  text-center      w-[50%] absolute left-[25%] h-[12%]  bottom-[35%]">
              Discover a world of eyeglasses that reflect your unique
              personality and needs.
            </p>
          </div>
          <div className=" relative ">
            <img
              src="https://s3-alpha-sig.figma.com/img/ffd8/a55c/38f4009d2e037a42180471aacd755914?Expires=1704672000&Signature=ln1BYjzOlHPjZgpcbecbjULKTmnFipgNxEHNfOSyGOem7v1yQvGiYZ7kQSQitjtaBl0HO~OWqe~dPaxFGbQwT9oQeqNct6rHPWt~pyxoRxesDDUzy3BiAnww5F7uq~0WyF1hT-NJxhHhd29FAjbwe5LCo83fjkwVUvEPyMWOqpJ439sChxXT1rVpM6lfnT5RQJkYvXqKFxDJTXQt137rQrJq~qpFKU7kLLVGLUS~7FB8AKsCYw5voDs6pFB0A8Z2SgjmpQa0xQpqCXiGea9Y73wC4S~9IxHR0ujh0Pcyui1wdRV9ySXmpTw-T7ASrnrfSxuxFW2ZfPF6XAGmATvdiA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
              alt=""
              className="Hero w-[33vw] h-[60vh]"
            />
            <img
              src="https://s3-alpha-sig.figma.com/img/eda1/b982/37bd77438186067c4d3d1e562983ad88?Expires=1704672000&Signature=O-37CW4OWyyAb1~7xAEAMPuzIo-FHzadgv4FJPq5HSYTcVpFSzlgobSmEDotrfLZDIWZZjqqzYHy6Dx3dpbS-OdgpRkozZ5L~NbUObPQqgEljjrCiPN5dUQHmycolc3NfWKxjtkLexTV0uCevh9WoK4UPsRwANAQdjEZeeg-gFVE8dFGqmG2x0e6aaoynrHf3Hy-aFFepWxd37mwE2ap5DHXtN~4HoysnjHMJUXoGgPnFeytT1X4TtBr2pzULXD9tfMEf9Te~R02oSpTIeUuorlhf28UhzRh9pvtKClk71lk4gi8AEHpucOEwEETzdpDwqxQCh8l6va4Q7chb4aLag__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
              alt=""
              className="  absolute   bottom-[42%] myObject"
            />
          </div>
        </div>

        <h1 className="   mt-6 w-full text p-[1%]  ">
          Showing results according to your prenscription{" "}
        </h1>
        <div
          className=" mt-[2%] bg-white
       p-[1%] hidden sm:block"
        >
          <button onClick={() => console.log("Short ")} className=" flex">
            <FaFilter /> Short:
          </button>
        </div>
        <div className="WishList-item bg-white  w-[30vw] mt-4 relative hidden sm:block ">
          <img src={imageUrl1} alt="" />
          <p className=" font-semibold">Eye Care Classic</p>
          <p className=" mt-4 ">
            <span className=" text-xl">Size Medium</span>
            <span className=" absolute  right-[5%] text-sm">⭐ 4.5/124</span>
          </p>
          <p className=" mt-2  text-sm">Rs:XXX</p>
          <hr />
          <div className=" flex ">
            <CiHeart className=" w-[50%] flex justify-center  mt-4  hover:text-red-800" />
            <AddtoCart className="w-[50%] absolute" />
          </div>
        </div>
      </div>
    </>
  );
};
export default WISHLIST;
