import React, { memo } from "react";

import SocialLinks from "./SocialLinks";
import mailIcon from "@/public/Images/socials/mail.svg";
import SlingShotAnim from "../CharacterAnimation/SlingShotAnim/SlingShotAnim";
import slingshotchar from "@/public/Images/slingshotchar.png";

interface VisitUrlProps {
  visitUrl: (action: string) => void;
}

const HorizontalPhase: React.FC<VisitUrlProps> = ({ visitUrl }) => {
  return (
    <div className="w-full h-full relative -translate-y-[10%] flex justify-center">
      <div className="w-1/2 h-[20%] flex items-center justify-center space-x-3">
        <SocialLinks visitUrl={visitUrl} />

        <div className="w-[30%] h-[50%] min-w-[50px] min-h-[52px] rounded-full pointer-events-none outline-none">
          <img
            src={mailIcon}
            alt="twitter"
            className="w-full h-full object-contain"
          />
        </div>
      </div>
      <SlingShotAnim>
        <img
          src={slingshotchar}
          alt="charcter"
          className="w-full h-full object-contain"
        />
      </SlingShotAnim>
    </div>
  );
};

export default memo(HorizontalPhase);
