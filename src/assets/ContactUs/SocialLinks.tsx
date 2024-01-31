import React, { memo } from "react";

import { socialLinks } from "@/Data/SocialLinks";

interface SocialProps {
  visitUrl: (action: string) => void;
}

const SocialLinks: React.FC<SocialProps> = ({ visitUrl }) => {
  return (
    <>
      {socialLinks?.map((social, index) => (
        <div
          key={index}
          className="w-[30%] h-[50%] min-w-[50px] min-h-[52px] rounded-full  pointer-events-auto cursor-pointer"
        >
          <img
            src={social.image}
            onClick={(e) => {
              e.stopPropagation();
              visitUrl(social.handle);
            }}
            alt="social"
            className="w-full h-full object-contain"
          />
        </div>
      ))}
    </>
  );
};

export default memo(SocialLinks);
