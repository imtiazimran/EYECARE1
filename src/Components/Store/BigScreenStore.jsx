import { useState } from "react";
import NAVBAR from "../Navbar";

import ABOUT from "../About";
import HOME from "../Home";
import CONTACT from "../Contact";

export const BIGSCREENSTORE = () => {
  const [selectTab, setselectTab] = useState("Home");
  return (
    <>
      <div>
        <NAVBAR selectTab={setselectTab}></NAVBAR>
        {selectTab === "Home" ? (
          <>
            <HOME></HOME>
          </>
        ) : selectTab === "About" ? (
          <>
            <ABOUT></ABOUT>
          </>
        ) : (
          <>
            <CONTACT></CONTACT>
          </>
        )}
      </div>
    </>
  );
};
