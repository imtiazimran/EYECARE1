import SimpleCard from "./Cards";
import { INTROOURTEAM } from "./Cards";
import { POPULATPRODUCT } from "./Cards";
import { WeareHeiring } from "./Cards";
import { Heiring_opper } from "./Cards";
import MobileView from "./images/SmallScreen/image 14.png";
import { StyleMebtn } from "./button";
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
export const SRK = () => {
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
export const SCOCIALMEDIAINFLUNCER = () => {
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
export const TRENDING = () => {
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
export const POPULAR = () => {
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
export const MOBILEPOPULAR = () => {
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

//  IN ABOUT SECTION TEAMMMEMBER INTRO  HERE
export const TEAMMEMBER = () => {
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
        <div className="app   grid-cols-3  grid mt-[5%] ">
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
//  THIS IS OUR ABOUT HEIRING CARD
export const HEIRING = () => {
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
//  THIS IS ALSO
export const JOBCATEGORIES = () => {
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
