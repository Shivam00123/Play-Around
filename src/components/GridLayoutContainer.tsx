import React from "react";
import { isMobile } from "react-device-detect";

import RenderGrid from "./RenderGrid";
import WelcomeScreen from "@/assets/MobileGridLayout/WelcomeScreen/WelcomeScreen";

const GridLayoutContainer = () => {
  return (
    <div
      style={isMobile ? {} : { minHeight: "701px", minWidth: "1276px" }}
      className="w-full h-full  absolute top-0 bg-transparent z-20 overflow-hidden flex items-center justify-center"
    >
      {isMobile ? <WelcomeScreen /> : <RenderGrid />}
    </div>
  );
};

export default GridLayoutContainer;
