import SimpleCard from "./Cards";

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
