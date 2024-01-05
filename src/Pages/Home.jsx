/* eslint-disable react-refresh/only-export-components */
// import { BELOWNAVIGATION } from "../Components/shopnv";
import BELOWNAVIGATION from "../Components/shopnv";
import { HEROIMAGE } from "../Components/NextHeader";
//  import  ISLIDER  from""
import { SRK } from "../Components/card";
// import { HOMESTR } from "../Components/Store/Homestore";
import Card from "../Components/card";
import { Middle } from "../Components/Cards";
import { SCOCIALMEDIAINFLUNCER } from "../Components/card";
import { TRENDING } from "../Components/card";
import { POPULAR } from "../Components/card";
import { MOBILEPOPULAR } from "../Components/card";
import { MobileStyleMe } from "../Components/card";
import { FooterImage } from "../Components/Cards";
import ISLIDER from "../Components/Islider";
const HOME = () => {
  return (
    <>
      <div className="z-0">
        <div>
          <BELOWNAVIGATION></BELOWNAVIGATION>
          <HEROIMAGE></HEROIMAGE>
          <ISLIDER></ISLIDER>
          <Card></Card>
          <Middle></Middle>
          <SRK></SRK>
          <MobileStyleMe></MobileStyleMe>
          <MOBILEPOPULAR></MOBILEPOPULAR>
          <SCOCIALMEDIAINFLUNCER></SCOCIALMEDIAINFLUNCER>
          <TRENDING></TRENDING>
          <POPULAR></POPULAR>
          <FooterImage></FooterImage>
          {/* <HOMESTR></HOMESTR> */}
        </div>
      </div>
    </>
  );
};
export default HOME;
