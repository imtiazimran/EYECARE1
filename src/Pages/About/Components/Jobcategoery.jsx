import { Heiring_opper } from "./Heiringopen";

export const JobCategories = () => {
  // eslint-disable-next-line no-unused-vars
  const cardData = [
    {
      id: 1,
      position: "Senior UI/UX Designer",
      Experience: "10 yrs Of Experience",
      salary: "Rs XX,XXX-XX,XXX",
      role: ` Are you a visionary in the world of user experience and interface
          design? Join our innovative team as a Senior UX/UI Designer and help
          shape the future of our digital products. collaborate with
          cross-functional teams, turning complex problems into intuitive and
          elegant solutions.`,
    },
    {
      id: 2,
      position: "Graphic Designer",
      Experience: "10 yrs of experience",
      salary: "Rs XX,XXX-XX,XXX",
      role: ` Are you a creative mind with a passion for visual storytelling? We're looking for a Graphic Designer to join our dynamic team. If you're a design enthusiast with an eye for detail, let's create visual magic together.`,
    },
  ];
  return (
    <>
      <div className="">
        {cardData.map((card) => (
          <Heiring_opper
            key={card.id}
            position={card.position}
            Experience={card.Experience}
            salary={card.salary}
            role={card.role}
          />
        ))}
      </div>
    </>
  );
};
