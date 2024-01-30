import bell from "./image 41.png";

const EmptyNotification = () => {
  return (
    <>
      <div
        className="  border 
      text-center      p-3 flex justify-center items-center h-[70vh] lg:h-[80vh]  "
      >
        <div className="  text-center  ">
          <img
            src={bell}
            alt=""
            className="w-[70%]   flex justify-center mx-auto"
          />
          <div>No notification yet come back later!</div>
        </div>
      </div>
    </>
  );
};
export default EmptyNotification;
