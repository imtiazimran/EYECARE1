/* eslint-disable react/prop-types */
const SimpleCard = ({ name, imageUrl }) => {
  return (
    <div className="card sm:m-3  m-1 text-center ">
      <img src={imageUrl} alt={name} className="card-image   " />
      <div className="card-content text-center ">
        <h2 className="card-name   sm:text-2xl text-center font-bold  sm:h-12  bg-white  relative sm:bottom-10   bottom-5 rounded-xl  ">
          {name}
        </h2>
      </div>
    </div>
  );
};
export default SimpleCard;
