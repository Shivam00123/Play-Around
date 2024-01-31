import React, { memo } from "react";

interface Props {
  title: string;
  classname?: string;
  chanegAlignment?: boolean;
}

const MobTitle: React.FC<Props> = ({
  title,
  classname,
  chanegAlignment = false,
}) => {
  const getStyle = () => {
    if (chanegAlignment) {
      return {
        justifyContent: "center",
      };
    }
    return {
      justifyContent: "start",
    };
  };

  return (
    <div className="w-full h-full xxs:min-h-[30px] min-h-[45px] max-h-[60px]  grid place-items-center relative overflow-hidden ">
      <div
        className={`opacity-50 w-full h-full absolute top-0 ${classname}`}
      ></div>
      <div
        style={getStyle()}
        className="w-full h-full absolute top-0 flex items-center px-5"
      >
        <h1 className="tracking-wide font-bold text-black xxs:text-sm text-lg text-center">
          {title}
        </h1>
      </div>
    </div>
  );
};

export default memo(MobTitle);
