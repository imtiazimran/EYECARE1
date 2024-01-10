import { WeareHeiring } from "./Weareheiring";

export const Hering = () => {
  const cardData = [
    {
      id: 1,
      name: "IT",
      heiring: "1",
    },

    {
      id: 2,
      name: "Marketing",
      heiring: "4",
    },

    {
      id: 3,
      name: "Sales",
      heiring: "1",
    },
    {
      id: 4,
      name: "Finace",
      heiring: "7",
    },
    {
      id: 5,
      name: "HR",
      heiring: "2",
    },
    {
      id: 6,
      name: "Design",
      heiring: "2",
    },
  ];

  return (
    <>
      <div className="w-[35vw]">
        {cardData.map((card) => (
          <WeareHeiring
            position={card.name}
            key={card.id}
            opening={card.heiring}
          />
        ))}
      </div>
    </>
  );
};
