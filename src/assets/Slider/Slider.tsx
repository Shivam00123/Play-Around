import React, { useState } from "react";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { settings } from "@/Data/slider-settings";

interface SLiderProps {
  children: any;
  width?: string;
  classname?: string;
  speed?: number;
}

const Carousel: React.FC<SLiderProps> = ({
  children,
  width = "75%",
  classname,
}) => {
  const [slides, setSlides] = useState<any>([1, 2, 3, 4, 5, 6]);

  return (
    <div onClick={(e) => e.stopPropagation()}>
      <Slider
        {...settings}
        className={`${classname} w-[${width}] xxs:w-[55%] h-full absolute pointer-events-auto`}
      >
        {slides.map((slide) => {
          return (
            <div key={slide} className="w-fit h-fit focus:outline-none">
              {children}
            </div>
          );
        })}
      </Slider>
      <h1></h1>
    </div>
  );
};

export default Carousel;
