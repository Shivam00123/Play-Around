import React, { memo } from "react";

interface Props {
  iframeUrl: string;
  mob: boolean;
}

const About: React.FC<Props> = ({ iframeUrl }) => {
  return (
    <iframe
      width="100%"
      height="100%"
      src={iframeUrl}
      allowFullScreen
      className="z-50 object-contain"
    ></iframe>
  );
};

export default memo(About);
