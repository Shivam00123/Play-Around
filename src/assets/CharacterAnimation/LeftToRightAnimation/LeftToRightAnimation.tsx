import React from "react";
import { motion } from "framer-motion";
import { ChildrenProps } from "@/Interface/children";

const LeftToRightAnimation: React.FC<ChildrenProps> = ({ children }) => {
  return (
    <motion.div
      style={{ transform: "rotateY(180deg)" }}
      initial={{ left: "100vw", top: "-70%" }}
      animate={{ left: "-46vw", top: "-70%" }}
      transition={{ duration: 3, stiffness: 80, type: "spring", delay: 0.5 }}
      className="w-[130%] h-full absolute z-50"
    >
      {children}
    </motion.div>
  );
};

export default LeftToRightAnimation;
