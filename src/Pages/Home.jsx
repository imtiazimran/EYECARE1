/* eslint-disable react-refresh/only-export-components */

import ShopNavigation from "../Components/shopnv";
import { HeroImage } from "../Components/NextHeader";
import { Srk } from "../Components/card";
import Card from "../Components/card";
import { Middle } from "../Components/Cards";
import { ScocialMediaInfluncer } from "../Components/card";
import { Trending } from "../Components/card";
import { Popular } from "../Components/card";
import { MobilePopular } from "../Components/card";
import { MobileStyleMe } from "../Components/card";
import { FooterImage } from "../Components/Cards";

import Footer from "../Components/footer";

import Isslider from "./Home/Components/Islider";
import Navbar from "../Components/Navbar";
const HOME = () => {
  return (
    <>
      <div className="z-0">
        <div>
          <Navbar />
          <ShopNavigation />
          <HeroImage />
          <Isslider />
          <Card />
          <Middle />
          <Srk />
          <MobileStyleMe />
          <MobilePopular />
          <ScocialMediaInfluncer />
          <Trending />
          <Popular />
          <FooterImage />
          <Footer />
        </div>
      </div>
    </>
  );
};
export default HOME;
