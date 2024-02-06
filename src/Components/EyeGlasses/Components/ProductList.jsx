/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useState } from "react";
import { Product } from "./Product";
import ProductDetails from "./productDetail";
import { Link } from "react-router-dom";
import { cardData } from "../DummyData/DummyApi";
export const ProductList = ({ onProductClick }) => {
  return (
    <>
      <div className="  grid  justify-evenly  grid-cols-3">
        {cardData.map((card) => (
          <Product
            id={card.id}
            key={card.id}
            image={card.imageUrl}
            name={card.name}
            size={card.size}
            star={card.star}
            review={card.review}
            price={card.price}
            onClick={() => onProductClick(card)}
          />
        ))}
      </div>
    </>
  );
};
