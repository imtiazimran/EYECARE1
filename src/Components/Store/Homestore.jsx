// import { useState } from "react";
// import { BELOWNAVIGATION } from "../shopnv";

import ISLIDER from "../Islider";
import Card from "../card";
// import Card from "../Cards/card";
import { Middle } from "../Cards";
import { SRK } from "../card";
import { SCOCIALMEDIAINFLUNCER } from "../card";
import { TRENDING } from "../card";
import { POPULAR } from "../card";
// import { Footer } from "../footer";
import { FooterImage } from "../Cards";
import { MobileStyleMe } from "../card";
import { MOBILEPOPULAR } from "../card";

import { HEROIMAGE } from "../NextHeader";

export const HOMESTR = () => {
  return (
    <>
      <div>
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
        {/* <Footer></Footer> */}
      </div>
    </>
  );
};
