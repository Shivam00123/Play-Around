import { motion } from "framer-motion";
import React, { useState } from "react";
import AboutFounder from "../AboutFounder/AboutFounder";
import Projects from "../common/Projects";
import ContactUs from "../ContactUs/ContactUs";
import Title from "../Title/Title";
import Whoweare from "../Whoweare/Whoweare";
import dummy from "../../public/Images/dummy.png";
import EmailSentDialog from "../EmailStatus/EmailStatus";
import SpinnerLoader from "../SpinnerLoader";
import arrowImg from "@/public/Images/arrow.svg";
import ErrorBox from "../EmailStatus/ErrorMessage";

const GridLayout = () => {
  const [expandedElement, setExpandedElement] = useState<number | string>("A");

  const variants: { [key: string]: any } = {
    AClass: {
      gridTemplateColumns:
        "[col1-start] 25% [col2-start] 25% [col3-start] 25% [col4-start] 25% [col4-end]",
      gridTemplateRows:
        "[row1-start] 33% [row2-start] 33% [row3-start] 33% [row3-end]",
    },
    BClass: {
      gridTemplateColumns:
        "[col1-start] 25% [col2-start] 11.5% [col3-start] 11.5% [col4-start] 50% [col4-end]",
      gridTemplateRows:
        "[row1-start] 33% [row2-start] 33% [row3-start] 33% [row3-end]",
    },
    CClass: {
      gridTemplateColumns:
        "[col1-start] 50% [col2-start] 12.5% [col3-start] 12.5% [col4-start] 25% [col4-end]",
      gridTemplateRows:
        "[row1-start] 10% [row2-start] 10% [row3-start] 80% [row3-end]",
    },
    DClass: {
      gridTemplateColumns:
        "[col1-start] 25% [col2-start] 25% [col3-start] 25% [col4-start] 25% [col4-end]",
      gridTemplateRows:
        "[row1-start] 10% [row2-start] 10% [row3-start] 80% [row3-end]",
    },
  };

  const expandElement = (event: { target: any }, id: string = ""): void => {
    let elementId: string | number = event?.target?.id || id;
    if (elementId === "container") {
      return;
    }
    if (Number(elementId)) {
      elementId = "D";
    }

    setExpandedElement(elementId);
  };

  return (
    <>
      <EmailSentDialog />
      <SpinnerLoader />
      <ErrorBox />
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
        className="w-full h-full grid py-5 px-7 gap-3 bg-transparent place-content-center"
        onClick={expandElement}
        exit={{ transform: "translateY(-100vh)" }}
      >
        <div
          id="A"
          style={{
            border:
              !expandedElement || expandedElement === "A"
                ? "4px solid #78CCE5"
                : "",
          }}
          className="bg-blue rounded-[40px] cursor-pointer a  text-2xl relative"
        >
          <div
            style={{
              borderTopRightRadius: "35px",
              borderTopLeftRadius: "35px",
            }}
            className="w-full h-fit pointer-events-none overflow-hidden relative min-h-[60px]"
          >
            <Title
              title="Who we are"
              changeAlignment={expandedElement === "A" || !expandedElement}
              classname="bg-blueStroke"
            />
            {expandedElement === "B" && (
              <img
                src={arrowImg}
                alt="arrow"
                className="absolute top-1/2 -translate-y-1/2 right-[5%] min-w-9 min-h-9 -rotate-[30deg]"
              />
            )}
            {(expandedElement === "C" || expandedElement === "D") && (
              <img
                src={arrowImg}
                alt="arrow"
                className="absolute top-1/2 -translate-y-1/2 right-[2%] min-w-9 min-h-9 -rotate-[60deg]"
              />
            )}
          </div>
          <div
            style={{ marginLeft: expandedElement === "A" ? "-5%" : "" }}
            className="w-full h-full flex items-center justify-start pointer-events-none "
          >
            {(expandedElement === "A" || expandedElement === "B") && (
              <Whoweare expandedElement={expandedElement} />
            )}
            {(expandedElement === "C" || expandedElement == "D") && (
              <h1 className="absolute text-black left-1/2 -translate-x-1/2 top-[60%] text-2xl">
                World-class Game Developers
              </h1>
            )}
          </div>
        </div>
        <div
          style={{
            border: expandedElement === "B" ? "4px solid #ECCF5F" : "",
          }}
          id="B"
          className="bg-yellow rounded-[40px]  b relative cursor-pointer"
        >
          <div className="w-full h-full text-2xl  flex flex-col items-center justify-between pointer-events-none">
            <div
              style={{
                borderTopRightRadius: "35px",
                borderTopLeftRadius: "35px",
              }}
              className="w-full h-fit overflow-hidden relative min-h-[60px]"
            >
              <Title
                title={expandedElement === "B" ? "Meet our founder" : "Founder"}
                changeAlignment={expandedElement === "B"}
                classname="bg-yellowStroke"
              />
              {expandedElement === "A" && (
                <img
                  src={arrowImg}
                  alt="arrow"
                  className="absolute top-1/2 -translate-y-1/2 left-[5%] min-w-9 min-h-9 rotate-[30deg]"
                />
              )}
              {(expandedElement === "C" || expandedElement === "D") && (
                <img
                  src={arrowImg}
                  alt="arrow"
                  className="absolute top-1/2 -translate-y-1/2 left-[5%] min-w-9 min-h-9 -rotate-[60deg]"
                />
              )}
            </div>
            {/* {(expandedElement === "C" || expandedElement === "D") && (
              <div className="w-1/2 h-[100%] absolute top-0 -right-[5%]">
                <img
                  src={dummy}
                  alt="founder-img"
                  className="w-full h-full object-contain"
                />
              </div>
            )} */}

            <div className="w-full h-[80%]">
              <AboutFounder currentClass={expandedElement} />
            </div>
          </div>
        </div>
        <div
          style={{
            border: expandedElement === "C" ? "4px solid #85D4BE" : "",
          }}
          id="C"
          className="bg-green rounded-[40px] text-2xl cursor-pointer c relative min-h-[60px]"
        >
          <div className="w-full h-full flex flex-col items-center justify-between pointer-events-none">
            <div
              style={{
                borderTopRightRadius: "35px",
                borderTopLeftRadius: "35px",
              }}
              className="w-full h-fit overflow-hidden relative"
            >
              <Title
                title="Contact Us"
                changeAlignment={expandedElement === "C"}
                classname="bg-greenStroke"
              />
              {expandedElement === "D" && (
                <img
                  src={arrowImg}
                  alt="arrow"
                  className="absolute top-1/2 -translate-y-1/2 right-[5%] min-w-9 min-h-9 -rotate-[30deg]"
                />
              )}
              {(expandedElement === "A" ||
                expandedElement === "B" ||
                !expandedElement) && (
                <img
                  src={arrowImg}
                  alt="arrow"
                  className="absolute top-1/2 -translate-y-1/2 right-[5%] min-w-9 min-h-9 "
                />
              )}
            </div>
            <ContactUs currentClass={expandedElement} />
          </div>
        </div>
        <div
          style={{
            border: expandedElement === "D" ? "4px solid #E3D0C2" : "",
          }}
          id="D"
          className="bg-sand rounded-[40px] text-2xl cursor-pointer d overflow-hidden min-h-[60px]"
        >
          <div className="w-full h-full flex flex-col items-center justify-between pointer-events-none">
            <div
              style={{
                borderTopRightRadius: "35px",
                borderTopLeftRadius: "35px",
              }}
              className="w-full h-fit overflow-hidden flex-shrink-0 relative"
            >
              <Title
                title="Our work"
                changeAlignment={expandedElement === "D"}
                classname="bg-sandStroke"
              />
              {expandedElement === "C" && (
                <img
                  src={arrowImg}
                  alt="arrow"
                  className="absolute top-1/2 -translate-y-1/2 right-[5%] min-w-9 min-h-9 rotate-[30deg]"
                />
              )}
              {(expandedElement === "A" ||
                expandedElement === "B" ||
                !expandedElement) && (
                <img
                  src={arrowImg}
                  alt="arrow"
                  className="absolute top-1/2 -translate-y-1/2 right-[5%] min-w-9 min-h-9 "
                />
              )}
            </div>
            <Projects expandedElement={expandedElement} />
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default GridLayout;
