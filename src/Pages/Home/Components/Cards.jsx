/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import SimpleCard from "./Card";
import { POPULATPRODUCT } from "./Card";
import { SelectionCard } from "./Card";
import React from "react";

const Card = () => {
  const cardData = [
    {
      id: 1,
      name: " Womens",
      imageUrl: "./images/card/Rectangle 2270.png",
    },

    {
      id: 2,
      name: "Mens",
      imageUrl: "./images/card/Rectangle 2271.png",
    },

    {
      id: 3,
      name: "Children",
      imageUrl: "./images/card/Rectangle 2272.png",
    },
  ];

  return (
    <div className="app  flex  mt-6  sm:mt-20 ">
      {cardData.map((card) => (
        <SelectionCard
          key={card.id}
          name={card.name}
          imageUrl={card.imageUrl}
        />
      ))}
    </div>
  );
};
export default Card;

export const Srk = () => {
  const cardData = [
    {
      id: 1,
      name: " Raees",
      imageUrl: "./images/card/Rectangle 2288.png",
    },

    {
      id: 2,
      name: "Phatan",
      imageUrl: "./images/card/Rectangle 2291.png",
    },

    {
      id: 3,
      name: "Jawan",
      imageUrl: "./images/card/Rectangle 2293.png",
    },
    {
      id: 4,
      name: " Ra",
      imageUrl: "./images/card/Rectangle 2288.png",
    },

    {
      id: 5,
      name: "Ph",
      imageUrl: "./images/card/Rectangle 2291.png",
    },

    {
      id: 6,
      name: "Ja",
      imageUrl: "./images/card/Rectangle 2293.png",
    },
  ];

  return (
    <>
      <div className="  sm:mt-9   sm:text-3xl  ">
        <p className="  italic font-bold">SRK MOVIE PICK</p>
        <hr />
        <div className=" relative items-center ">
          <div className="app  h-full   w-full overflow-x-scroll  scroll  whitespace-nowrap scroll-smooth">
            {cardData.map((card) => (
              <SimpleCard
                key={card.id}
                name={card.name}
                imageUrl={card.imageUrl}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export const ScocialMediaInfluncer = () => {
  const cardData = [
    {
      id: 1,
      name: "Kristin Stevts",
      imageUrl: "./images/card/Rectangle2273.png",
    },

    {
      id: 2,
      name: "Ankush Jain",
      imageUrl: "./images/card/Rectangle 2279.png",
    },

    {
      id: 3,
      name: "Rizwan Ahmed",
      imageUrl: "./images/card/Rectangle 2274.png",
    },
    {
      id: 4,
      name: "Kristin ",
      imageUrl: "./images/card/Rectangle2273.png",
    },

    {
      id: 5,
      name: "Ankush ",
      imageUrl: "./images/card/Rectangle 2279.png",
    },

    {
      id: 6,
      name: "Rizwan ",
      imageUrl: "./images/card/Rectangle 2274.png",
    },
  ];

  return (
    <>
      <div className="  sm:mt-9   sm:text-3xl">
        <p className="font-bold italic">INFLUENCER COLLECTION</p>
        <hr />
        <div className=" relative items-center">
          <div className=" app  h-full   w-full overflow-x-scroll  scroll  whitespace-nowrap scroll-smooth  ">
            {cardData.map((card) => (
              <SimpleCard
                key={card.id}
                name={card.name}
                imageUrl={card.imageUrl}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export const Trending = () => {
  const cardData = [
    {
      id: 1,
      name: "Sun Glasses",
      imageUrl: "./images/card/Rectangle 2289.png",
    },

    {
      id: 2,
      name: "Style Statement",
      imageUrl: "./images/card/Rectangle 2724.png",
    },

    {
      id: 3,
      name: "Funky Glasses",
      imageUrl: "./images/card/Rectangle 2725.png",
    },
    {
      id: 4,
      name: "Sun Glasses",
      imageUrl: "./images/card/Rectangle 2289.png",
    },

    {
      id: 5,
      name: "Style Statement",
      imageUrl: "./images/card/Rectangle 2724.png",
    },

    {
      id: 6,
      name: "Funky Glasses",
      imageUrl: "./images/card/Rectangle 2725.png",
    },
  ];

  return (
    <>
      <div className="  sm:mt-9     sm:text-3xl">
        <p className="font-bold italic">TRENDING COLLECTION</p>
        <hr />
        <div className=" relative items-center">
          <div className=" app  h-full   w-full overflow-x-scroll  scroll  whitespace-nowrap scroll-smooth  ">
            {cardData.map((card) => (
              <SimpleCard
                key={card.id}
                name={card.name}
                imageUrl={card.imageUrl}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export const Popular = () => {
  const cardData = [
    {
      id: 1,
      name: "TImeless Charm",
      rate: "Rs 999",
      imageUrl: "./images/card/image 56.png",
    },

    {
      id: 2,
      name: "Urban Chic",
      rate: "Rs 999",
      imageUrl: "./images/card/image 57.png",
    },

    {
      id: 3,
      name: "Nostaigia Nova",
      rate: "Rs 999",
      imageUrl: "./images/card/image 58.png",
    },
    {
      id: 4,
      name: "TImeless ",
      rate: "Rs 999",
      imageUrl: "./images/card/image 56.png",
    },

    {
      id: 5,
      name: "Urban",
      rate: "Rs 999",
      imageUrl: "./images/card/image 57.png",
    },

    {
      id: 6,
      name: "Nostaigia ",
      rate: "Rs 999",
      imageUrl: "./images/card/image 58.png",
    },
  ];

  return (
    <>
      <div
        className="  sm:mt-9
      sm:text-3xl hidden sm:block"
      >
        <p className="font-bold italic">POPULAR PRODUCTS </p>
        <hr />
        <div className=" relative items-center">
          <div className=" app  h-full   w-full overflow-x-scroll  scroll  whitespace-nowrap scroll-smooth  ">
            {cardData.map((card) => (
              <SimpleCard
                key={card.id}
                name={card.name}
                imageUrl={card.imageUrl}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};
