/* eslint-disable no-undef */
/* eslint-disable react/prop-types */
// import { useParams } from "react-router-dom";
import { AddtoCart } from "../../Butttons/button";
import { CiHeart } from "react-icons/ci";
const ProductDetails = ({ product }) => {
  console.log(product);

  return (
    <>
      <div className="WishList-item bg-white  w-[30vw] mt-4 relative hidden sm:block border    border-red-300 rounded-lg  ">
        <img
          src={product.imageUrl}
          alt=""
          className="w-[80%] flex justify-center"
        />
        <p className=" font-semibold addtobagpadding ">{product.name}</p>
        <p className=" mt-4 ">
          <span className=" text-xl addtobagpadding ">{product.size}</span>
          <span className=" absolute  right-[5%] text-sm  priceAndrating">
            ⭐{product.star}/{product.review}
          </span>
        </p>
        <p className=" mt-2  text-sm  addtobagpadding ">{product.price}</p>
        <hr />
        <div className=" flex ">
          <CiHeart className=" w-[50%] flex justify-center  mt-4  hover:text-red-800" />
          <AddtoCart className="w-[50%] " />
        </div>
      </div>
    </>
  );
};

export default ProductDetails;
