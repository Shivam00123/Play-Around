import React, { memo } from "react";

import mailIcon from "@/public/Images/socials/mail.svg";
import SocialLinks from "./SocialLinks";
import bearImg from "@/public/Images/bear.png";

interface InitialProps {
  showMail?: boolean;
  showFollowText?: boolean;
  visitUrl: (action: string) => void;
}

const InitialPhase: React.FC<InitialProps> = ({
  showMail = true,
  showFollowText = false,
  visitUrl,
}) => {
  return (
    <div
      style={{ alignItems: showMail ? "end" : "start" }}
      className="w-full h-full flex flex-col justify-end items-end relative pr-4 overflow-hidden"
      onClick={(e) => e.stopPropagation()}
    >
      <div className="w-1/2 min-h-fit h-full flex items-end justify-end space-x-3">
        {showFollowText && (
          <h1 className="whitespace-nowrap text-xl text-black font-extrabold">
            Follow us
          </h1>
        )}
        <SocialLinks visitUrl={visitUrl} />
        {showMail && (
          <div className="w-[30%] h-[50%] min-w-[50px] min-h-[52px] rounded-full pointer-events-none outline-none">
            <img
              src={mailIcon}
              alt="twitter"
              className="w-full h-full object-contain"
            />
          </div>
        )}
      </div>
      <div className="absolute w-[100%] h-[95%] bottom-0 left-0">
        {/* <h1 className="absolute left-0 top-0 z-50">hello</h1> */}
        <img
          src={bearImg}
          alt="bearImg"
          className="w-[150%] h-[150%] object-contain absolute -top-[40%] left-0 "
        />
      </div>
    </div>
  );
};

export default memo(InitialPhase);
