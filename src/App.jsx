/* eslint-disable no-unused-vars */

import "./App.css";
import { useState } from "react";
import NEXTHEADER from "./Components/NextHeader";
import { BIGSCREENSTORE } from "./Components/Store/BigScreenStore";
import HOME from "./Components/Home";
import ABOUT from "./Components/About";
// import CONTACT from "./Components/Contact";
import NAVBAR from "./Components/Navbar";

function App() {
  const [selectedTab, setSelectedTab] = useState("Home");
  return (
    <>
      <BIGSCREENSTORE></BIGSCREENSTORE>
      {/* <Footer></Footer> */}
    </>
  );
}

export default App;
