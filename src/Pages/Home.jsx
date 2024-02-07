/* eslint-disable react-refresh/only-export-components */

import ShopNavigation from "../Components/Shopnav/shopnv";
// import { HeroImage } from "./Home/Components/HeroSection";
import { Srk } from "./Home/Components/Cards";
import Card from "./Home/Components/Cards";
import { Style } from "./Home/Components/StyleMe";
import { ScocialMediaInfluncer } from "./Home/Components/Cards";
import { Trending } from "./Home/Components/Cards";
import { Popular } from "./Home/Components/Cards";
import { FooterImage } from "./Home/Components/FooterVideo";
import Isslider from "./Home/Components/Islider";
import { Outlet } from "react-router-dom";
const HOME = () => {
  return (
    <>
      <div className="z-0">
        <div>
          <Outlet />
          <ShopNavigation />
          <Isslider />
          <Card />
          <Style />
          <Srk />
          <ScocialMediaInfluncer />
          <Trending />
          <Popular />
          <FooterImage />
        </div>
      </div>
    </>
  );
};
export default HOME;
