/* eslint-disable react-refresh/only-export-components */
import { BELOWNAVIGATION } from "../Components/shopnv";
// import { BELOWNAVIGATION } from "./shopnv";
// import { HOMESTR } from "./Store/Homestore";
import { HOMESTR } from "../Components/Store/Homestore";
// import { Footer } from "./footer";
const HOME = () => {
  return (
    <>
      <div className="z-0">
        <div>
          <BELOWNAVIGATION></BELOWNAVIGATION>
          <HOMESTR></HOMESTR>
        </div>
      </div>
    </>
  );
};
export default HOME;
