import MobileView from "./images/SmallScreen/image 14.png";

import { StyleMebtn } from "./Butttons/button";
import { POPULARPRODUCTMOBILE } from "./Cards";

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
