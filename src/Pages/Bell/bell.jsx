import { useState } from "react";

import ShopNavigation from "../../Components/Shopnav/shopnv";
// import bell from "./image 41.png";
import EmptyNotification from "./Components/Nonotification";
import { Notification } from "./Components/Notification";
export const Bell = () => {
  // eslint-disable-next-line no-unused-vars
  const [isOpen, setIsOpen] = useState(true);

  return (
    <>
      <ShopNavigation />

      <hr className="  h-[2px] bg-gray-500 blur-[1px]" />
      <div
        className=" 
p-2"
      >
        {isOpen ? <EmptyNotification /> : <Notification />}
      </div>
    </>
  );
};
