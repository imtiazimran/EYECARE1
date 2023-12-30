/* eslint-disable react-refresh/only-export-components */
import { BELOWNAVIGATION } from "../Components/shopnv";

import { HOMESTR } from "../Components/Store/Homestore";

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
