import React, { memo, useEffect, useState } from "react";
import { AnimatePresence } from "framer-motion";
import useGoToLink from "@/hooks/go-to-link";
import InitialPhase from "./InitialPhase";
import HorizontalPhase from "./HorizontalPhase";
import FullPhase from "./FullPhase";

interface Props {
  currentClass?: any;
}

const ContactUs: React.FC<Props> = ({ currentClass }) => {
  const [currentPhase, setCurrentPhase] = useState<string>("initial");
  const { visitUrl } = useGoToLink();

  useEffect(() => {
    if (!currentClass || currentClass === "A" || currentClass === "B") {
      setCurrentPhase("initial");
    } else if (currentClass === "C") {
      setCurrentPhase("fullphase");
    } else {
      setCurrentPhase("horizontalphase");
    }
  }, [currentClass]);

  return (
    <div className="w-full h-[80%]">
      <AnimatePresence>
        {currentPhase === "initial" && <InitialPhase visitUrl={visitUrl} />}
        {currentPhase === "fullphase" && <FullPhase visitUrl={visitUrl} />}
        {currentPhase === "horizontalphase" && (
          <HorizontalPhase visitUrl={visitUrl} />
        )}
      </AnimatePresence>
    </div>
  );
};

export default memo(ContactUs);
