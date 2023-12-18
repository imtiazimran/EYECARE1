import "./App.css";
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
