import React from "react";
import masalalogo from "../../../public/Images/welcome.png";
import sittingChar from "@/public/Images/sittingChar.png";

const CharacterSlide = () => {
  return (
    // <div className="w-full h-full bg-[red] relative">
    <div className="w-[110%] h-[110%] absolute -bottom-[8%] -right-[28%]">
      <img
        src={sittingChar}
        alt="character"
        className="w-full h-full object-contain"
      />
    </div>
    // </div>
  );
};

interface Props {
  showCharacter: boolean;
}

const MobLogo: React.FC<Props> = ({ showCharacter }) => {
  return (
    <div
      style={{ backgroundColor: showCharacter ? "white" : "" }}
      className="w-full h-full flex items-start justify-start relative  rounded-xl"
    >
      {showCharacter && (
        <div className="w-1/2 h-full bg-white  flex-shrink-0 rounded-xl">
          <img
            src={masalalogo}
            alt="logo"
            className="w-full h-full object-contain"
          />
        </div>
      )}
      {showCharacter && <CharacterSlide />}
    </div>
  );
};

export default MobLogo;
