import React, { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";

import MobileViewGrid from "@/assets/MobileGridLayout/MobileGridLayout";
import masalalogo from "../../../public/Images/welcome.png";

const WelcomeScreen = () => {
  const [entering, setEntering] = useState<boolean>(false);

  useEffect(() => {
    let enterTimer = setTimeout(() => {
      setEntering(true);
    }, 1500);
    return () => {
      clearTimeout(enterTimer);
    };
  }, []);

  return (
    <AnimatePresence>
      <div className="w-full h-full grid place-items-center">
        {entering ? (
          <MobileViewGrid />
        ) : (
          <motion.div
            initial={{ opacity: "0" }}
            animate={{ opacity: "1" }}
            exit={{ opacity: "0" }}
            className="w-full h-full bg-white grid place-items-center"
          >
            <div className="w-full h-[40%] flex flex-col items-center justify-between space-y-5">
              <div className="w-full h-[90%]">
                <img
                  src={masalalogo}
                  alt="logo"
                  className="w-full h-full object-contain"
                />
              </div>
              {/* <button
                onClick={() => setEntering(true)}
                className="w-1/2 h-[8%] min-h-[40px] bg-green rounded-full text-lg font-bold"
              >
                Enter
              </button> */}
            </div>
          </motion.div>
        )}
      </div>
    </AnimatePresence>
  );
};

export default WelcomeScreen;
