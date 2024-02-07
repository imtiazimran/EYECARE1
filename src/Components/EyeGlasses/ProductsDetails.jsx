/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import {  useParams } from "react-router-dom";
import axios from "axios";
import { CiHeart } from "react-icons/ci";
import { AddtoCart } from "../Butttons/button";

export const ProductsDetails = () => {

  const { id } = useParams();
  const [product, setProduct] = useState([]);
  
  useEffect(() => {
    
    axios.get("/product.json")
    .then((response) => {
      setProduct(response.data);
    })
    .catch((error) => {
      console.log(error);
    })
  }, []);
  
  const selectedProducts = product?.find((product) => product.id == id);
  
  return (
    <>
      <div className="WishList-item bg-white  w-[30vw] mt-4 relative hidden sm:block border    border-red-300 rounded-lg  ">
        <img
          src={selectedProducts?.imageUrl}
          alt=""
          className="w-[80%] flex justify-center"
        />
        <p className=" font-semibold addtobagpadding ">{selectedProducts?.name}</p>
        <p className=" mt-4 ">
          <span className=" text-xl addtobagpadding ">{selectedProducts?.size}</span>
          <span className=" absolute  right-[5%] text-sm  priceAndrating">
            ⭐{selectedProducts?.star}/{selectedProducts?.review}
          </span>
        </p>
        <p className=" mt-2  text-sm  addtobagpadding ">{selectedProducts?.price}</p>
        <hr />
        <div className=" flex ">
          <CiHeart className=" w-[50%] flex justify-center  mt-4  hover:text-red-800" />
          <AddtoCart className="w-[50%] " />
        </div>
      </div>
    </>
  );
};
