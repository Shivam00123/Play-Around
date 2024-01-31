import React, { useState } from "react";
import swordraising from "@/public/Images/swordraising.png";
import MobTitle from "../MobTitle/MobTitle";
import dummy from "../../../public/Images/dummy.png";
import Arrow from "../Arrow/Arrow";
import Carousel from "@/assets/Slider/Slider";
import Slider from "react-slick";
import { settings } from "@/Data/slider-settings";

interface Props {
  expandedElement?: any;
}

const Founder: React.FC<Props> = ({ expandedElement }) => {
  const [slides, setSlides] = useState<any[]>([1, 2, 3, 4, 5]);

  return (
    <div className="w-full h-full relative pointer-events-none flex flex-col items-center justify-start">
      {expandedElement === "D" && (
        <div className="absolute h-[68%] w-[95%] -bottom-2 -left-[65%]  z-50">
          <img
            src={swordraising}
            alt="character"
            className="w-full h-full object-contain"
          />
        </div>
      )}

      {expandedElement === "C" ? (
        <div
          style={{
            borderTopRightRadius: "24px",
            borderBottomRightRadius: "24px",
          }}
          className="w-[50%] max-w-[40px] min-h-fit h-full overflow-hidden absolute right-0"
        >
          <div className="w-full h-full absolute top-0 bg-yellowStroke opacity-50"></div>
          <div className="w-full h-full absolute top-0 flex items-center justify-center">
            {expandedElement === "C" && (
              <Arrow classname="top-[10%] -rotate-90" />
            )}
            <h1 className="whitespace-nowrap rotate-90 xxs:sm text-base font-bold absolute top-[25%]">
              Founder
            </h1>
          </div>
        </div>
      ) : (
        <div
          style={{
            height:
              expandedElement === "D"
                ? "20%"
                : expandedElement === "B"
                ? "70%"
                : "45%",
            marginTop:
              expandedElement === "D" || expandedElement === "B"
                ? "0px"
                : "5px",
            transform:
              expandedElement === "A" || !expandedElement
                ? "translateY(-13%)"
                : "translateY(-2%)",
            borderTopRightRadius: "24px",
            borderTopLeftRadius: "24px",
          }}
          className="w-[100%] h-full flex items-center justify-center overflow-hidden relative"
        >
          <MobTitle
            title={expandedElement === "D" ? "Dummy" : "Founder"}
            classname="bg-yellowStroke"
            chanegAlignment={expandedElement === "D"}
          />
          {expandedElement !== "D" && <Arrow classname="right-[5%]" />}
        </div>
      )}

      {(expandedElement === "A" || !expandedElement) && (
        <div className="w-full h-full relative overflow-hidden">
          <div className="absolute w-full h-full bottom-0 left-[15%]">
            <img
              src={dummy}
              alt="founder"
              className="w-full h-full object-contain -translate-x-[15%]"
            />
          </div>
        </div>
      )}
      {expandedElement === "D" && (
        <div className="w-full h-[84%] flex flex-col items-center justify-around ">
          <div
            onClick={(e) => e.stopPropagation()}
            className="w-full xxs:h-[40%] h-[84%] flex items-center justify-center  relative  z-50  translate-y-[12%] pointer-events-auto"
          >
            <Slider
              {...settings}
              className="absolute top-0 w-[72%] h-[72%] foundermobile"
            >
              {slides.map((item) => (
                <img
                  key={item}
                  src={dummy}
                  alt="founder"
                  className="w-full h-full object-contain"
                />
              ))}
            </Slider>
          </div>
          <div className="w-full h-[30%] grid place-items-center text-left pl-7 overflow-y-scroll pb-2  translate-y-[2%]">
            <div className="w-fit h-fit -translate-x-[10%]">
              <p className="xxs:text-xs text-sm text-black">
                20 years in games and film
              </p>
              <p className="xxs:text-xs text-sm text-black">
                Pixar, EA, Lumosity
              </p>
              <p className="xxs:text-xs text-sm text-black">
                CTO at various startups
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Founder;
