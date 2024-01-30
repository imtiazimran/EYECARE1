import "./Notification.css";
// import "./buttons.css";

export const Notification = () => {
  return (
    <>
      <ul>
        <li className=" bg-white  p-3 mt-3 Tropology">
          Thank you for your order! Your prescription eyeglasses are on their
          way.
          <a href="#" className="text-blue-500">
            Track your shipment here.
          </a>
        </li>

        <li className=" bg-white  p-3 mt-3 Tropology">
          Your eyewear is out for delivery! Click to track your package to see
          when it will arrive.
        </li>
        <li className=" bg-white  p-3 mt-3 Tropology ">
          {`Don't miss out on our exclusive offer! Get 20% off your next pair of
          sunglasses with code 
          `}
          <a href="#" className="discount-card">{`“SUNNY20”`}</a>
        </li>
        <li className=" bg-white  p-3 mt-3 Explore-New ">
          Explore our latest collection of stylish eyeglasses and sunglasses.
          Check out the newest arrivals now!
        </li>
        <li className=" bg-white  p-3 mt-3 Tropology  mb-[10%]">
          Forgot something in your cart? Complete your purchase now and enjoy
          your eyewear.
        </li>
      </ul>
    </>
  );
};
