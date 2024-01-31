import React, { memo } from "react";

interface Props {
  title: string;
  color?: string;
  changeAlignment?: boolean;
  classname?: string;
}

const Title: React.FC<Props> = ({
  title,

  changeAlignment = false,
  classname,
}) => {
  console.log({ changeAlignment });
  const getStyle = () => {
    if (changeAlignment) {
      return {
        justifyContent: "start",
        fontSize: "24px",
      };
    }
    return {
      justifyContent: "center",
      fontSize: "20px",
    };
  };

  return (
    <div className="w-full min-h-[60px]  flex-shrink-0 relative overflow-hidden">
      <div className={`w-full h-full absolute top-0 ${classname}`}></div>
      <div
        style={getStyle()}
        className="w-full h-full absolute top-0  flex items-center mx-5"
      >
        <h1 className="tracking-wide font-bold text-[black]">{title}</h1>
      </div>
    </div>
  );
};

export default memo(Title);
