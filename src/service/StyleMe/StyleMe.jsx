import ShopNavigation from "../../Components/Shopnav/shopnv";
import { Identity } from "./Comonents/Crads";
// import "./style.css";
import { Features } from "./Comonents/Card";
export const StyleMe = () => {
  return (
    <>
      <ShopNavigation />
      <div>
        <h1 className="   te  font-bold">Select Your Identity ! </h1>
        <div className="  flex w-full">
          <Identity />
          <Features />
        </div>
      </div>
    </>
  );
};
