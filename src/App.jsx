/* eslint-disable no-unused-vars */
import { useState } from "react";
import "./App.css";
import NEXTHEADER from "./Components/NextHeader";
import { BIGSCREENSTORE } from "./Components/Store/BigScreenStore";
import HOME from "./Components/Home";
import ABOUT from "./Components/About";
import CONTACT from "./Components/Contact";
import NAVBAR from "./Components/Navbar";
function App() {
  const [mobileSelectedTab, setMobileSelectedTab] = useState("Home");
  return (
    <>
      <BIGSCREENSTORE></BIGSCREENSTORE>

      <div>
        <NEXTHEADER MobileselectTab={setMobileSelectedTab}></NEXTHEADER>
        {mobileSelectedTab === "Home" ? (
          <>
            <BIGSCREENSTORE></BIGSCREENSTORE>
            {/* <CONTACT></CONTACT>
            <HOME></HOME> */}
          </>
        ) : mobileSelectedTab === "About" ? (
          <>
            <ABOUT></ABOUT>
          </>
        ) : (
          <></>
        )}
      </div>
    </>
  );
}

export default App;
