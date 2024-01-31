/* eslint-disable react/prop-types */
import "./Style.css";
// import "./Profile.css";
const SimpleCard = ({ name, imageUrl }) => {
  return (
    <div
      className="card sm:m-3  m-1 
    inline-block  p-3 cursor-pointer hover:scale-105 ease-in-out duration-300   "
    >
      <img src={imageUrl} alt={name} className="card-image  " />
      <div className="card-content text-center ">
        <h2 className="card-name   sm:text-2xl text-center font-bold  sm:h-12  bg-white  relative sm:bottom-10   bottom-5 rounded-xl  ">
          {name}
        </h2>
      </div>
    </div>
  );
};
export default SimpleCard;

export const POPULATPRODUCT = ({ name, imageUrl, rate }) => {
  return (
    <div className="card  m-0.5 sm:m-3 text-center ">
      <img src={imageUrl} alt={name} className="card-image   " />
      <div className=" text-center   p-3 ">
        <h2>{name}</h2>
        <p className=" sm:text-xl">{rate}</p>
      </div>
    </div>
  );
};

export const SelectionCard = ({ name, imageUrl }) => {
  return (
    <div
      className=" sm:m-3  m-1 
    inline-block  p-3 cursor-pointer hover:scale-105 ease-in-out duration-300   "
    >
      <img src={imageUrl} alt={name} className="card-image  " />
      <div className="card-content text-center ">
        <h2 className="card-name   sm:text-2xl text-center font-bold  sm:h-12  bg-white  relative sm:bottom-10   bottom-5 rounded-xl  ">
          {name}
        </h2>
      </div>
    </div>
  );
};
