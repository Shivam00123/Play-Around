import React, { memo, Suspense } from "react";

import arrowImg from "@/public/Images/arrow.svg";
import sittingCharacters from "@/public/Images/sittingChar.png";
import { projectData } from "@/Data/projectData";
import dummy from "@/public/Images/dummy.png";

const Carousel = React.lazy(() => import("../Slider/Slider"));
interface Props {
  expandedElement?: string;
}

const Whoweare: React.FC<Props> = ({ expandedElement }) => {
  return (
    <div className="w-full h-full ml-10 flex items-center justify-between mt-2 relative">
      {/* <img
        src={arrowImg}
        alt="arrow"
        className="absolute bottom-[14%] left-[6%] min-w-9 min-h-9 z-50"
      /> */}
      {expandedElement !== "B" && (
        <div className="w-[65%] h-[65%] z-50 absolute bottom-[9%] -right-[30%]">
          <img
            src={sittingCharacters}
            alt="character"
            className="w-full h-full object-contain"
          />
        </div>
      )}
      <div
        style={{ width: expandedElement === "B" ? "90%" : "55%" }}
        className="h-[85%] absolute top-0 left-[5%]"
      >
        <Suspense fallback={<h1>loading...</h1>}>
          <Carousel width="100%" classname="whoweare">
            <div className="w-full h-full border-4 border-white relative rounded-3xl overflow-hidden">
              <img
                src={dummy}
                alt="dummy"
                className="w-full h-full object-contain"
              />
            </div>
          </Carousel>
        </Suspense>
      </div>
      {(expandedElement === "A" || !expandedElement) && (
        <div className="w-1/3 h-[85%] flex flex-col items-center justify-center absolute -top-[3%] -right-[5%] text-left pt-8">
          {projectData.gridOneData.description.map((desc, index) => (
            <div key={index} className="w-full h-fit flex flex-col mb-5">
              <h1 className="text-2xl font-bold">{Object.keys(desc)[0]} : </h1>

              <p className="text-xl whitespace-nowrap">
                {desc[Object.keys(desc)[0]]}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default memo(Whoweare);
