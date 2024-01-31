import React from "react";
import MobTitle from "../MobTitle/MobTitle";
import readingchar from "@/public/Images/readingchar.png";
import mailIcon from "@/public/Images/socials/mail.svg";
import { socialLinks } from "@/Data/SocialLinks";
import useGoToLink from "@/hooks/go-to-link";
import slingshotchar from "@/public/Images/slingshotchar.png";
import sittingChar from "@/public/Images/sittingChar.png";
import Arrow from "../Arrow/Arrow";

interface Props {
  expandedElement?: any;
}

const MobContactus: React.FC<Props> = ({ expandedElement }) => {
  const { visitUrl } = useGoToLink();

  return (
    <div className="w-full h-full pointer-events-none flex flex-col items-center justify-start z-50">
      {expandedElement === "C" && (
        <div className="w-[244px] h-[234px] absolute -bottom-[3%]  -right-[15%] z-50 pointer-events-none">
          <img
            src={sittingChar}
            alt="character"
            className="w-full h-full object-contain"
          />
        </div>
      )}
      {expandedElement === "D" ? (
        <div
          style={{
            borderBottomLeftRadius: "24px",
            borderTopLeftRadius: "24px",
          }}
          className="w-[50%] min-h-fit  max-w-[40px] h-full overflow-hidden absolute left-0"
        >
          <div className="w-full h-full absolute top-0 bg-greenStroke opacity-50"></div>
          <div className="w-full h-full absolute top-0 flex items-center justify-center">
            {expandedElement === "D" && (
              <Arrow classname="top-[10%] rotate-90" />
            )}
            <h1 className="whitespace-nowrap -rotate-90  xxs:text-sm text-lg font-bold absolute top-[30%]">
              Contact us
            </h1>
          </div>
        </div>
      ) : (
        <div
          style={{
            height:
              expandedElement === "C"
                ? "15%"
                : expandedElement === "B"
                ? "70%"
                : "30%",

            borderTopRightRadius: "24px",
            borderTopLeftRadius: "24px",
          }}
          className="w-[100%] h-full flex items-center justify-center overflow-hidden absolute"
        >
          <MobTitle
            title="Contact us"
            classname="bg-greenStroke"
            chanegAlignment={expandedElement === "C"}
          />
          {expandedElement !== "C" && <Arrow classname="right-[5%]" />}
        </div>
      )}
      {(expandedElement === "A" ||
        expandedElement === "C" ||
        !expandedElement) && (
        <div
          onClick={(e) => e.stopPropagation()}
          style={{ height: expandedElement === "C" ? "20%" : "30%" }}
          className={`xxs:w-[80%] w-full  mx-5 flex  ${
            expandedElement === "C"
              ? "space-y-1 ml-[20%] mt-[30%] flex-col items-start  justify-between"
              : "items-center justify-center space-x-1"
          } ${
            (expandedElement === "A" || !expandedElement) && "absolute top-1/2"
          }`}
        >
          <>
            {socialLinks?.map((social) => (
              <div key={social.id} className="w-1/4 h-full">
                <img
                  onClick={() => visitUrl(social.handle)}
                  src={social.image}
                  alt="social"
                  className="w-full h-full object-contain pointer-events-auto"
                />
              </div>
            ))}
            <div className="w-1/4 h-full">
              <a href="#">
                <img
                  src={mailIcon}
                  alt="social"
                  className="w-full h-full object-contain pointer-events-auto"
                />
              </a>
            </div>
          </>
        </div>
      )}
    </div>
  );
};

export default MobContactus;
