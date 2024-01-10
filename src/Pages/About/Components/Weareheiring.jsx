/* eslint-disable react/prop-types */

export const WeareHeiring = ({ position, opening }) => {
  return (
    <>
      <div className="   font-semibold p-5">
        <div className=" border   border-red-50 bg-white p-4 text-2xl font-semibold rounded-lg   flex w-[30vw] relative">
          <p>{position}</p>
          <p
            className=" text-sm 
               absolute    bottom-[40%] right-0 text-gray-400 flex pr-3"
          >
            {" "}
            {opening} Opening
          </p>
        </div>
      </div>
    </>
  );
};
