/* eslint-disable react-refresh/only-export-components */

import { BELOWNAV } from "./NextHeader";
import { HEROIMAGE } from "./NextHeader";
import ISLIDER from "./Islider";
import Card from "./card";
import { Middle } from "./Cards";
import { SRK } from "./card";
import { SCOCIALMEDIAINFLUNCER } from "./card";
import { TRENDING } from "./card";
import { POPULAR } from "./card";
import { Footer } from "./footer";
import { FooterImage } from "./Cards";
import { MobileStyleMe } from "./card";
import { MOBILEPOPULAR } from "./card";

const HOME = () => {
  return (
    <>
      <div className="z-0">
        <BELOWNAV></BELOWNAV>
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
        <Footer></Footer>
      </div>
    </>
  );
};
export default HOME;
