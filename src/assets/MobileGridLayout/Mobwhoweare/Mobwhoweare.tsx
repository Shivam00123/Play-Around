import React from "react";
import MobTitle from "../MobTitle/MobTitle";

import readingchar from "@/public/Images/readingchar.png";
import Carousel from "@/assets/Slider/Slider";
import Arrow from "../Arrow/Arrow";

interface Props {
  expandedElement?: any;
}

const Mobwhoweare: React.FC<Props> = ({ expandedElement }) => {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center relative">
      <div
        style={{
          height: expandedElement === "A" || !expandedElement ? "50%" : "100%",
        }}
        className="w-full flex flex-col"
      >
        <div
          style={{
            height: expandedElement === "B" ? "100%" : "30%",

            borderTopRightRadius: "24px",
            borderTopLeftRadius: "24px",
          }}
          className="w-full flex items-center justify-center overflow-hidden -translate-y-[20%] min-h-[50px] relative"
        >
          <MobTitle
            title="Who we are"
            classname="bg-blueStroke"
            chanegAlignment={expandedElement === "A" || !expandedElement}
          />
          {expandedElement && <Arrow classname="right-[5%] rotate-180" />}
        </div>
        {(expandedElement === "A" || !expandedElement) && (
          <h1 className="xxs:text-sm text-[18px] text-black mx-5 text-center mb-2 leading-1">
            Unity, Unreal and WebGL experts <br /> Rapid prototypers
          </h1>
        )}
        {(expandedElement === "C" || expandedElement === "D") && (
          <div className="w-full h-full flex flex-col justify-center items-center ">
            <h1 className="text-black text-lg whitespace-nowrap">
              World-class Game Developers
            </h1>
            {/* <div className="w-full h-full bg-[green]"></div> */}
          </div>
        )}
        {(expandedElement === "A" || !expandedElement) && (
          <div className="w-[50%] h-[50%] absolute -bottom-[35.5%] -right-[1%] z-50 pointer-events-none">
            <img
              src={readingchar}
              alt="character"
              className="w-full h-full object-contain"
            />
          </div>
        )}
      </div>
      {(expandedElement === "A" || !expandedElement) && (
        <div className="mobilecarousel w-full h-full flex flex-col items-center justify-start  font-bold text-sm relative flex-grow-0 mt-2 ">
          <Carousel>
            <img
              src="https://www1.lovethatdesign.com/wp-content/uploads/2019/03/Love-that-Design-NOVO-01.jpg"
              alt="image"
              className="w-full h-full object-contain rounded-xl"
            />
          </Carousel>
        </div>
      )}
    </div>
  );
};

export default Mobwhoweare;
