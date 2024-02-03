/* eslint-disable react/prop-types */
export const INTROOURTEAM = ({ name, imageUrl, profession }) => {
  return (
    <>
      <div className="grid-cols-3 ">
        <div
          className="  m-0.5 sm:m-3 text-center    
    inline-block  p-3 cursor-pointer hover:scale-105 ease-in-out duration-300"
        >
          <img src={imageUrl} alt={name} className=" " />
          <div className=" text-center   p-3 ">
            <h2>{name}</h2>
            <p className="  sm:text-xl">{profession}</p>
          </div>
        </div>
      </div>
    </>
  );
};
