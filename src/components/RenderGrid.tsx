import GridLayout from "@/assets/GridLayout/GridLayout";
import WelcomeScreenPc from "@/assets/WelcomeScreenPc/WelcomeScreenPc";
import React, { useEffect, useState } from "react";

const RenderGrid = () => {
  const [enteringState, setEnteringState] = useState<boolean>(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setEnteringState(true);
    }, 2000);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  return <>{enteringState ? <GridLayout /> : <WelcomeScreenPc />}</>;
};

export default RenderGrid;
