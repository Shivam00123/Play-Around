import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import About from "../common/About";
import Projects from "../common/Projects";
import Whoweare from "../Whoweare/Whoweare";
import Founder from "./Founder/Founder";
import MobContactus from "./MobContactus/MobContactus";
import Mobwhoweare from "./Mobwhoweare/Mobwhoweare";
import ProjectsMob from "./ProjectsMob/ProjectsMob";

interface trackType {
  [key: string]: boolean;
}

const MobileViewGrid = () => {
  const [expandedElement, setExpandedElement] = useState<number | string>("A");
  const [dataId, setDataId] = useState<number | string>(1);
  const [tracOpened, setTrackOpened] = useState<trackType>({
    A: true,
    B: false,
    C: false,
    D: false,
  });

  const variants: { [key: string]: any } = {
    AClass: {
      gridTemplateColumns: "[col1-start] 50% [col2-start] 50% [col2-end]",
      gridTemplateRows:
        "[row1-start] 25% [row2-start] 25% [row3-start] 25% [row4-start] 25% [row4-end]",
    },
    BClass: {
      gridTemplateColumns: "[col1-start] 50% [col2-start] 50% [col2-end]",
      gridTemplateRows:
        "[row1-start] 5% [row2-start] 5% [row3-start] 80% [row4-start] 10% [row4-end]",
    },
    CClass: {
      gridTemplateColumns: "[col1-start] 70% [col2-start] 30% [col2-end]",
      gridTemplateRows:
        "[row1-start] 12.5% [row2-start] 12.5% [row3-start] 25% [row4-start] 50% [row4-end]",
    },
    DClass: {
      gridTemplateColumns: "[col1-start] 30% [col2-start] 70% [col2-end]",
      gridTemplateRows:
        "[row1-start] 12.5% [row2-start] 12.5% [row3-start] 25% [row4-start] 50% [row4-end]",
    },
  };

  const expandElement = (event: { target: any }, id: string = ""): void => {
    let elementId: string | number = event.target.id || id;
    if (Number(elementId)) {
      setDataId(elementId);
      elementId = "B";
    }
    setExpandedElement(elementId);
    // console.log({ elementId });
    switch (elementId) {
      case "A":
        setTrackOpened((prevState) => ({ ...prevState, A: true, B: false }));
        break;
      case "B":
        setTrackOpened((prevState) => ({
          ...prevState,
          B: true,
          A: false,
          C: false,
        }));
        break;
      case "C":
        setTrackOpened((prevState) => ({ ...prevState, C: true, D: false }));
        break;
      case "D":
        setTrackOpened((prevState) => ({
          ...prevState,
          D: true,
          C: false,
          A: false,
          B: false,
        }));
        break;
      case "container":
        setTrackOpened((prevState) => ({ ...prevState, A: true, B: false }));
        setExpandedElement(expandedElement);
        break;
    }
  };

  return (
    <motion.div
      initial={{
        gridTemplateColumns:
          "[col1-start] 25% [col2-start] 25% [col3-start] 25% [col4-start] 25% [col4-end]",
        gridTemplateRows:
          "[row1-start] 33% [row2-start] 33% [row3-start] 33% [row3-end]",
      }}
      variants={variants}
      animate={
        expandedElement === "A"
          ? "AClass"
          : expandedElement === "B"
          ? "BClass"
          : expandedElement === "C"
          ? "CClass"
          : expandedElement === "D"
          ? "DClass"
          : "AClass"
      }
      transition={{
        duration: 0.5,
        type: "spring",
        stiffness: 100,
        staggerDirection: -1,
      }}
      id="container"
      className="pointer-events-none w-screen h-screen grid py-8 px-4 gap-3 bg-transparent place-content-center overflow-hidden max-w-[480px] max-h-[1080px]"
      onClick={expandElement}
    >
      <div
        style={{
          border:
            expandedElement === "A" || !expandedElement
              ? "2px solid [#78CCE5]"
              : "",
        }}
        id="A"
        className="bg-blue rounded-3xl pb-5 pt-[11px] text-2xl cursor-pointer mobilea pointer-events-auto min-h-fit"
      >
        <Mobwhoweare expandedElement={expandedElement} />
      </div>
      <div
        style={{
          border: expandedElement === "B" ? "2px solid #E3D0C2" : "",
        }}
        id="B"
        className="bg-sand rounded-3xl text-2xl cursor-pointer mobileb pointer-events-auto"
      >
        <ProjectsMob
          expandElement={expandElement}
          expandedElement={expandedElement}
        />
      </div>
      <div
        style={{
          border: expandedElement === "C" ? "2px solid #85D4BE" : "",
        }}
        id="C"
        className="bg-green rounded-3xl text-2xl cursor-pointer mobilec pointer-events-auto relative"
      >
        <MobContactus expandedElement={expandedElement} />
      </div>
      <div
        style={{
          border: expandedElement === "D" ? "2px solid #ECCF5F" : "",
        }}
        id="D"
        className="bg-yellow rounded-3xl text-2xl cursor-pointer mobiled pointer-events-auto"
      >
        <Founder expandedElement={expandedElement} />
      </div>
    </motion.div>
  );
};

export default MobileViewGrid;
