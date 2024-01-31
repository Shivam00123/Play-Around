import React, { memo, Suspense } from "react";
import swordraising from "@/public/Images/swordraising.png";
import RightToLeftAnimation from "../CharacterAnimation/RightToLeftAnimation/RightToLeftAnimation";
import dummy from "../../public/Images/founder.png";
const Carousel = React.lazy(() => import("../Slider/Slider"));

interface Props {
  currentClass?: any;
}

const AboutFounder: React.FC<Props> = ({ currentClass }) => {
  return (
    <div className="w-full h-full relative pointer-events-none -translate-y-[5%]">
      {currentClass === "B" && (
        <div className=" w-full h-full  relative">
          <RightToLeftAnimation>
            <img
              src={swordraising}
              alt="character"
              className="w-full h-full object-contain"
            />
          </RightToLeftAnimation>
        </div>
      )}
      {(currentClass === "A" || currentClass === "B") && (
        <div
          style={{
            justifyContent: currentClass === "B" ? "space-between" : "center",
          }}
          className="w-full h-full  absolute top-0  flex items-center space-x-10 overflow-hidden"
        >
          <div
            style={{
              width: currentClass === "B" ? "40%" : "80%",
            }}
            className="h-[80%] rounded-xl flex-shrink-0 relative ml-5"
          >
            {currentClass == "B" ? (
              <Suspense fallback={<h1>loading...</h1>}>
                <Carousel width="100%" classname="foundercarousel">
                  <img
                    src={dummy}
                    alt="founder"
                    className="w-full h-full object-contain"
                  />
                </Carousel>
              </Suspense>
            ) : (
              <>
                {currentClass == "A" && (
                  <>
                    <img
                      src={dummy}
                      alt="founder"
                      className="w-full h-full object-contain translate-x-[13%]"
                    />
                    <h1 className="absolute bottom-[10%] left-1/2 -translate-x-[32%] whitespace-nowrap font-bold">
                      Dummy
                    </h1>
                  </>
                )}
              </>
            )}
          </div>
          <div className="w-[50%] h-full text-left text-black text-xl -translate-x-[2%] grid place-items-center">
            {currentClass === "B" && (
              <div className="w-fit h-fit space-y-3">
                <p className=" text-black">20 years in games and film</p>

                <p className="text-black">
                  Technical Director on 6 Pixar films
                </p>

                <p className=" text-black">
                  Core Engineer on the Spore team at Electronic Arts
                </p>
                <p className=" text-black">
                  Co-founded Carnegie Mellon's Experimental Gameplay Project
                </p>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default memo(AboutFounder);
