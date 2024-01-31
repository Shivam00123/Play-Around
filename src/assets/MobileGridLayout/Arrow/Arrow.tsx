import React from "react";
import arrowImg from "@/public/Images/arrow.svg";

interface ArrowProps {
  classname?: string;
}

const Arrow: React.FC<ArrowProps> = ({ classname }) => {
  return (
    <div className={`absolute top-1/2 -translate-y-1/2 w-6 h-6 ${classname}`}>
      <img
        src={arrowImg}
        alt="arrow"
        className="w-full h-full object-contain"
      />
    </div>
  );
};

export default Arrow;
