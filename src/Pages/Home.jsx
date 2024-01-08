/* eslint-disable react-refresh/only-export-components */

import BELOWNAVIGATION from "../Components/shopnv";
import { HEROIMAGE } from "../Components/NextHeader";
import { SRK } from "../Components/card";
import Card from "../Components/card";
import { Middle } from "../Components/Cards";
import { SCOCIALMEDIAINFLUNCER } from "../Components/card";
import { TRENDING } from "../Components/card";
import { POPULAR } from "../Components/card";
import { MOBILEPOPULAR } from "../Components/card";
import { MobileStyleMe } from "../Components/card";
import { FooterImage } from "../Components/Cards";
import { Footer } from "../Components/footer";
import ISLIDER from "../Components/Islider";
import NAVBAR from "../Components/Navbar";
const HOME = () => {
  return (
    <>
      <div className="z-0">
        <div>
          <NAVBAR />
          <BELOWNAVIGATION />
          <HEROIMAGE />
          <ISLIDER />
          <Card />
          <Middle />
          <SRK />
          <MobileStyleMe />
          <MOBILEPOPULAR />
          <SCOCIALMEDIAINFLUNCER />
          <TRENDING />
          <POPULAR />
          <FooterImage />
          <Footer />
        </div>
      </div>
    </>
  );
};
export default HOME;
