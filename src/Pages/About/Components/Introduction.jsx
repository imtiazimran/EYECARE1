/* eslint-disable react/prop-types */
export const INTROOURTEAM = ({ name, imageUrl, profession }) => {
  return (
    <>
      <div className="grid-cols-3">
        <div className="card  m-0.5 sm:m-3 text-center   ">
          <img src={imageUrl} alt={name} className="card-image   " />
          <div className=" text-center   p-3 ">
            <h2>{name}</h2>
            <p className="  sm:text-xl">{profession}</p>
          </div>
        </div>
      </div>
    </>
  );
};
