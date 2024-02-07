/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import { AddtoCart } from "../../Butttons/button";
import { CiHeart } from "react-icons/ci";
// import { Link } from "react-router-dom";
export const Product = ({
  id,
  image,
  name,
  size,
  star,
  review,
  price
}) => {
  return (
    <>
      <div
        className="WishList-item bg-white  w-[30vw] mt-4 relative hidden sm:block border    border-red-300 rounded-lg  "
      >
        <Link to={`/ProductDetail/${id}`}>
        <img src={image} alt="" className="w-[80%] flex justify-center" />
        <p className=" font-semibold addtobagpadding ">{name}</p>
        <p className=" mt-4 ">
          <span className=" text-xl addtobagpadding ">{size}</span>
          <span className=" absolute  right-[5%] text-sm  priceAndrating">
            ⭐{star}/{review}
          </span>
        </p>
        <p className=" mt-2  text-sm  addtobagpadding ">{price}</p>
        <hr />
        <div className=" flex ">
          <CiHeart className=" w-[50%] flex justify-center  mt-4  hover:text-red-800" />
          <AddtoCart className="w-[50%] " />
        </div>
        </Link>
      </div>
    </>
  );
};
