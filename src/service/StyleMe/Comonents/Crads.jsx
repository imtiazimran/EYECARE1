import SimpleCard from "./Card";
import { useState } from "react";
export const Identity = () => {
  const cardData = [
    {
      id: 1,
      name: "Artist",
      imageUrl: "./images/StyleMe/Rectangle 2298.png",
    },

    {
      id: 2,
      name: "Designer",
      imageUrl: "./images/StyleMe/Rectangle 2300.png",
    },

    {
      id: 3,
      name: "Photographer",
      imageUrl: "./images/StyleMe/Rectangle 2301.png",
    },
    {
      id: 4,
      name: " Traveller",
      imageUrl: "./images/StyleMe/Rectangle 2304.png",
    },

    {
      id: 5,
      name: "Entrepeneur",
      imageUrl: "./images/StyleMe/Rectangle 2313.png",
    },

    {
      id: 6,
      name: "Musician",
      imageUrl: "./images/StyleMe/Rectangle 2316.png",
    },
    {
      id: 7,
      name: "Artist",
      imageUrl: "./images/StyleMe/Rectangle 2298.png",
    },

    {
      id: 8,
      name: "Designer",
      imageUrl: "./images/StyleMe/Rectangle 2300.png",
    },

    {
      id: 9,
      name: "Photographer",
      imageUrl: "./images/StyleMe/Rectangle 2301.png",
    },
    {
      id: 10,
      name: "Photographer",
      imageUrl: "./images/StyleMe/Rectangle 2301.png",
    },
    {
      id: 11,
      name: " Traveller",
      imageUrl: "./images/StyleMe/Rectangle 2304.png",
    },

    {
      id: 12,
      name: "Entrepeneur",
      imageUrl: "./images/StyleMe/Rectangle 2313.png",
    },
  ];

  const [selectedImageId, setSelectedImageId] = useState(null);

  const handleImageClick = (id) => {
    setSelectedImageId(id === selectedImageId ? null : id);
  };
  return (
    <>
      <div className=" relative items-center flex  w-[50%]">
        <div className=" overflow-y-auto  bg-white overflow-x-hidden h-[80vh]     ">
          {cardData.map((card) => (
            <SimpleCard
              key={card.id}
              name={card.name}
              imageUrl={card.imageUrl}
              id={card.id}
              isSelected={card.id === selectedImageId}
              handleImageClick={handleImageClick}
            />
          ))}
        </div>
      </div>
    </>
  );
};
