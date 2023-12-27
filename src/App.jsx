import "./App.css";
import { useState } from "react";
import NEXTHEADER from "./Components/NextHeader";
import { BIGSCREENSTORE } from "./Components/Store/BigScreenStore";
import HOME from "./Components/Home";
import ABOUT from "./Components/About";
import CONTACT from "./Components/Contact";
import NAVBAR from "./Components/Navbar";
import { BELOWNAV } from "./Components/NextHeader";
import { HEROIMAGE } from "./Components/NextHeader";
import SLIDER from "./Components/Slider";
import Card from "./Components/card";
function App() {
  // eslint-disable-next-line no-unused-vars

  return (
    <>
      <div className=" w-full    ">
        <NAVBAR></NAVBAR>
      </div>
      <BELOWNAV></BELOWNAV>
      <HEROIMAGE></HEROIMAGE>
      <SLIDER></SLIDER>
      <Card></Card>
    </>
  );
}

export default App;
