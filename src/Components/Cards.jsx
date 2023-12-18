/* eslint-disable react/prop-types */
const SimpleCard = ({ name, imageUrl }) => {
  return (
    <div className="card m-3 text-center ">
      <img src={imageUrl} alt={name} className="card-image   " />
      <div className="card-content text-center   p-3 ">
        <h2 className="card-name  text-2xl text-center font-bold  h-12  bg-white  relative bottom-10   rounded-xl  ">
          {name}
        </h2>
      </div>
    </div>
  );
};

export default SimpleCard;
