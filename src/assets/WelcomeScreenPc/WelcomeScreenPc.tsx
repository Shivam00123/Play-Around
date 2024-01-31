import React, { useState } from "react";

import logo from "../../public/Images/welcome.png";

// interface Props {
//   func: any;
// }

const WelcomeScreenPc = () => {
  return (
    <div className="w-full h-full bg-white grid place-items-center">
      <div className="w-[20%] h-[50%] flex flex-col items-center justify-between">
        <div className="w-full h-[70%]">
          <img src={logo} alt="logo" className="w-full h-full object-contain" />
        </div>
        {/* <button
          onClick={func}
          className="w-1/2 h-[10%] min-h-[50px] bg-green rounded-3xl font-bold text-black text-lg mb-4"
        >
          Enter
        </button> */}
      </div>
    </div>
  );
};

export default WelcomeScreenPc;
