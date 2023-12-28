/* eslint-disable react-refresh/only-export-components */
import PROFILE from "./Profile";
import { useState } from "react";
const PROFILEHOME = () => {
  const [selectedTab, setselectTab] = useState("Profile");
  return (
    <>
      <PROFILE selectedTab={setselectTab}></PROFILE>
      {selectedTab === "Profile" ? "" : <div> this is wishlist </div>}
    </>
  );
};
export default PROFILEHOME;
