import { INTROOURTEAM } from "./Introduction";

export const TeamMember = () => {
  const cardData = [
    {
      id: 1,
      name: "Rajesh Kumar",
      profession: "Founder&CEO",
      imageUrl: "./images/About/1.png",
    },

    {
      id: 2,
      name: "Abhinav Shukla",
      profession: "Head of Opertion ",
      imageUrl: "./images/About/2.png",
    },

    {
      id: 3,
      name: "Shinka Lamba",
      profession: "Fashion And style",
      imageUrl: "./images/About/3.png",
    },
    {
      id: 4,
      name: "Niana Tomar",
      profession: "Marketing and Brands Manager",
      imageUrl: "./images/About/4.png",
    },

    {
      id: 5,
      name: "Amayra Dastur",
      profession: "lead product Designer",
      imageUrl: "./images/About/5.png",
    },

    {
      id: 6,
      name: "Pranav Jain",
      profession: "Finance Manager",
      imageUrl: "./images/About/6.png",
    },
  ];

  return (
    <>
      <div
        className="  sm:mt-9   hidden
        sm:block sm:text-3xl"
      >
        <hr className=" bg-black h-1  mt-[3%]" />

        <p className="font-bold italic text-center mt-[5%] ">
          Our Team Members{" "}
        </p>
        <div className="  grid-cols-3  grid mt-[5%] ">
          {cardData.map((card) => (
            <INTROOURTEAM
              key={card.id}
              name={card.name}
              profession={card.profession}
              imageUrl={card.imageUrl}
            />
          ))}
        </div>
        <hr className=" bg-black h-1  mt-[5%]" />
      </div>
    </>
  );
};
