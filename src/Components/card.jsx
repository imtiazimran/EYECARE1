import SimpleCard from "./Cards";

import { POPULATPRODUCT } from "./Cards";

// import { Heiring_opper } from "./Cards";
import MobileView from "./images/SmallScreen/image 14.png";
// import { AddTobag_item } from "./Cards";

import { StyleMebtn } from "./Butttons/button";
import { POPULARPRODUCTMOBILE } from "./Cards";
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
        <SimpleCard key={card.id} name={card.name} imageUrl={card.imageUrl} />
      ))}
    </div>
  );
};
export default Card;

//  ALL SRK MOVIE PICK CARD HERE
//  HERE ALL SCREEN IS SPECIFICLY FOR LAPTOPS

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
  ];

  return (
    <>
      <div className="  sm:mt-9   sm:text-3xl">
        <p className="  italic font-bold">SRK MOVIE PICK</p>
        <hr />
        <div className="app  flex mt-1    ">
          {cardData.map((card) => (
            <SimpleCard
              key={card.id}
              name={card.name}
              imageUrl={card.imageUrl}
            />
          ))}
        </div>
      </div>
    </>
  );
};
export const MobileStyleMe = () => {
  return (
    <>
      <div className="w-full   sm:hidden MobileStle   relative mt-9  justify-center ">
        <img src={MobileView} alt="" className=" absolute  bottom-0 right-0" />
        <p className=" w-[70%] textStyle">
          Let us help you style according to your personality
        </p>
        <StyleMebtn></StyleMebtn>
      </div>
    </>
  );
};
// ALL INFLUENCER  PICK ACRD HERE
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
  ];

  return (
    <>
      <div className="  sm:mt-9   sm:text-3xl">
        <p className="font-bold italic">INFLUENCER COLLECTION</p>
        <hr />
        <div className="app  flex mt-1   ">
          {cardData.map((card) => (
            <SimpleCard
              key={card.id}
              name={card.name}
              imageUrl={card.imageUrl}
            />
          ))}
        </div>
      </div>
    </>
  );
};

// TRENDING COLLECTIONS
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
  ];

  return (
    <>
      <div className="  sm:mt-9     sm:text-3xl">
        <p className="font-bold italic">TRENDING COLLECTION</p>
        <hr />
        <div className="app  flex mt-1   ">
          {cardData.map((card) => (
            <SimpleCard
              key={card.id}
              name={card.name}
              imageUrl={card.imageUrl}
            />
          ))}
        </div>
      </div>
    </>
  );
};

//   POPULAR PRODUCT HERE
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
  ];

  return (
    <>
      <div
        className="  sm:mt-9
      sm:text-3xl hidden sm:block"
      >
        <p className="font-bold italic">POPULAR PRODUCTS </p>
        <hr />
        <div className="app  flex mt-1   ">
          {cardData.map((card) => (
            <POPULATPRODUCT
              key={card.id}
              name={card.name}
              rate={card.rate}
              imageUrl={card.imageUrl}
            />
          ))}
        </div>
      </div>
    </>
  );
};
//
//   POPULAR PRODUCT HERE FOR MOBILE SCREEN
export const MobilePopular = () => {
  const cardData = [
    {
      id: 1,
      name: "Eye Glass",
      imageUrl: "./images/card/image 56.png",
    },

    {
      id: 2,
      name: "Sun Glass",
      imageUrl: "./images/card/image 57.png",
    },

    {
      id: 3,
      name: "Computer Glass",
      imageUrl: "./images/card/image 58.png",
    },
    {
      id: 4,
      name: "Contact lens",
      imageUrl: "./images/card/image 56.png",
    },
    {
      id: 5,
      name: "Accessories",
      imageUrl: "./images/card/image 57.png",
    },
  ];

  return (
    <>
      <hr />
      <div className=" flex  mt-4 mb-4  sm:hidden">
        {cardData.map((card) => (
          <POPULARPRODUCTMOBILE
            key={card.id}
            name={card.name}
            imageUrl={card.imageUrl}
          />
        ))}
      </div>
    </>
  );
};
