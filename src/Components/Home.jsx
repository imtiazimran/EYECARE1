/* eslint-disable react-refresh/only-export-components */

import { BELOWNAVIGATION } from "./shopnv";
import { HOMESTR } from "./Store/Homestore";
const HOME = () => {
  return (
    <>
      <div className="z-0">
        <BELOWNAVIGATION />
        <HOMESTR></HOMESTR>
      </div>
    </>
  );
};
export default HOME;
