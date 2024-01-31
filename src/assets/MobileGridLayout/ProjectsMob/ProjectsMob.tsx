import React, { useEffect, useMemo, useState } from "react";
import About from "../../common/About";
import MobTitle from "../MobTitle/MobTitle";
import slingshotchar from "@/public/Images/slingshotchar.png";
import useProjectdata from "@/hooks/use-projectdata";
import useSearchElement from "@/hooks/SearchElement";
import useGoToLink from "@/hooks/go-to-link";
import Arrow from "../Arrow/Arrow";

interface Props {
  id?: string;
  children?: any;
  height?: string;
  border?: boolean;
  maxWidth?: string;
  width?: string;
}

const ProjectThumbnail: React.FC<Props> = ({
  id,
  children,
  height = "32%",
  border = false,
  maxWidth = "50%",
  width = "90%",
}) => {
  return (
    <div
      id={id}
      style={{
        height: height,
        border: border ? "2px solid white" : "",
        maxWidth: maxWidth,
        width: width,
      }}
      className="w- xxs:max-w-[40px] xxs:min-h-[20px]  min-h-[50px]  rounded-xl overflow-hidden mx-2 mb-4 "
    >
      {children}
    </div>
  );
};

interface PropsShrink {
  id?: string;
  children?: any;

  border?: boolean;
}

const ProjectThumbnailForShrink: React.FC<PropsShrink> = ({
  id,
  children,

  border = false,
}) => {
  return (
    <div
      id={id}
      style={{
        border: border ? "2px solid white" : "",
      }}
      className="w-[25%] h-[105%] xxs:h-[80%] xxs:-translate-y-[30%]  xxs:min-h-[20px]  min-h-[50px]  rounded-xl overflow-hidden mx-2 mb-4 "
    >
      {children}
    </div>
  );
};

const ProjectsMob = ({ expandElement, expandedElement }) => {
  const [data, setData] = useState<{ [key: string]: any }>({});
  const { getProjectData, useProjectDataState } = useProjectdata();
  const { searchFromArray } = useSearchElement();
  const { visitUrl } = useGoToLink();

  useEffect(() => {
    getProjectData();
  }, []);

  const getTheData = (e?: any) => {
    let Id = e?.target?.id;
    const clickedArray = searchFromArray(Id, useProjectDataState?.value);
    setData(clickedArray);
  };

  useMemo(() => {
    if (expandedElement === "B" && !data.id) {
      getTheData();
    }
  }, [expandedElement]);

  return (
    <div
      className="w-full h-[102%]  relative flex flex-col items-center justify-start p-1 z-20"
      onClick={(e) => {
        e.stopPropagation();
        expandElement(e, "B");
      }}
    >
      {expandedElement === "B" && (
        <div
          style={{ transform: "rotateY(180deg)" }}
          className="absolute w-1/2 xxs:w-[30%] xxs:h-[20%] h-[30%] -bottom-2 xxs:-left-[2%] -left-[10%] pointer-events-none"
        >
          <img
            src={slingshotchar}
            alt="character"
            className="w-full h-full object-contain"
          />
        </div>
      )}
      <div
        style={{ borderTopRightRadius: "24px", borderTopLeftRadius: "24px" }}
        className="w-[102.5%] grid place-items-center xxs:mb-2 mb-5 xxs:min-h-[40px] min-h-[50px] overflow-hidden -translate-y-[9%] relative"
      >
        <MobTitle
          title="Our work"
          classname="bg-sandStroke"
          chanegAlignment={expandedElement === "B"}
        />
        {expandedElement !== "B" && <Arrow classname="right-[5%] rotate-180" />}
      </div>

      {expandedElement === "B" ? (
        <>
          <div className="w-full h-fit flex justify-between items-center mb-1 -translate-y-[70%]  px-3">
            <h1 className="xxs:text-xs text-base font-bold">{data.name}</h1>
            {data?.projectLink && (
              <h1
                onClick={(e) => {
                  e.stopPropagation();
                  visitUrl(data.projectLink);
                }}
                className="xxs:text-xs text-sm font-bold"
              >
                <u>project link</u>
              </h1>
            )}
          </div>
          <div
            className="xxs:w-[90%] w-full xxs:h-[45%] h-[40%] rounded-3xl flex-shrink-0 relative overflow-hidden -translate-y-[5%] pointer-events-auto z-50"
            onClick={(e) => e.stopPropagation()}
          >
            <About iframeUrl={data?.iframeUrl} mob={true} />
          </div>
          <div className="w-full h-[60%] -translate-y-[5%] mt-2  flex items-end justify-end xxs:mt-2 overflow-hidden relative">
            <div className="w-full h-[30%]  absolute xxs:top-2 top-1 flex flex-col justify-center ">
              <div className="flex flex-col text-left">
                {data.Mobdesc?.map((text: string, index) => (
                  <p key={index} className="xxs:text-[10px] text-sm">
                    {text}
                  </p>
                ))}
              </div>
            </div>
            <div
              className=" h-full flex flex-col justify-end items-center  space-y-2"
              onClick={(e) => getTheData(e)}
            >
              {useProjectDataState?.value
                ?.filter((project) => project.id != data.id)
                .map((projectEle) => (
                  <ProjectThumbnail
                    maxWidth="130px"
                    key={projectEle.id}
                    id={projectEle.id}
                    border={projectEle.id === data?.id}
                  >
                    <img
                      src={projectEle.thumbnail}
                      alt="thumbnail"
                      className="w-full h-full object-contain pointer-events-none"
                    />
                  </ProjectThumbnail>
                ))}
            </div>
          </div>
        </>
      ) : (
        <div
          className="w-full xxs:h-[60%] xxs:mt-3 h-[60%]  flex items-center justify-around "
          onClick={(e) => getTheData(e)}
        >
          {useProjectDataState?.value?.slice(0, 3).map((project) => (
            <ProjectThumbnailForShrink
              key={project.id}
              id={project.id}
              border={project.id === data?.id}
            >
              <img
                src={project.mobthumbnail}
                alt="thumbnail"
                className="w-full h-full object-cover pointer-events-none"
              />
            </ProjectThumbnailForShrink>
          ))}
        </div>
      )}
    </div>
  );
};

export default ProjectsMob;
