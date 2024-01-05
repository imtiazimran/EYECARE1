// import { useState } from "react";

import { Outlet } from "react-router-dom";
import HOME from "../../Pages/Home";
import { Footer } from "../footer";
export const BIGSCREENSTORE = () => {
  return (
    <>
      <HOME></HOME>
      <Outlet></Outlet>
      <Footer></Footer>
    </>
  );
};
