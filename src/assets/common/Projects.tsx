import React, { useEffect, useState, useMemo, memo } from "react";
import About from "./About";
import useSearchElement from "@/hooks/SearchElement";
import useProjectdata from "@/hooks/use-projectdata";
import useGoToLink from "@/hooks/go-to-link";

interface Props {
  id: string;
  children: any;
  border?: boolean;
}

const ProjectCards: React.FC<Props> = ({ id, children, border = false }) => {
  return (
    <div
      id={id}
      style={{ border: border ? "4px solid white" : "" }}
      className="w-[15%] h-[20%]  min-h-[120px]  min-w-[200px] rounded-3xl pointer-events-auto overflow-hidden relative"
    >
      {children}
    </div>
  );
};

const Projects = ({ expandedElement }) => {
  const [data, setData] = useState<{ [key: string]: any }>({});
  const { searchFromArray } = useSearchElement();
  const { getProjectData, useProjectDataState } = useProjectdata();
  const { visitUrl } = useGoToLink();

  useEffect(() => {
    getProjectData();
    const clickedArray = searchFromArray(1, useProjectDataState?.value);
    setData(clickedArray);
  }, []);

  const getTheData = (e?: any) => {
    // if (expandedElement === "C") {
    //   e.stopPropagation();
    // }
    let Id = e?.target?.id;
    const clickedArray = searchFromArray(Id, useProjectDataState?.value);

    setData(clickedArray);
  };

  useMemo(() => {
    if (expandedElement === "D" && !data.id) {
      getTheData();
    }
  }, [expandedElement]);

  return (
    <div className="w-full h-full flex flex-col justify-between items-center mb-3">
      <div
        style={{
          height: expandedElement === "D" ? "30%" : "100%",
          flexDirection: expandedElement === "C" ? "column" : "row",
        }}
        className="w-full h-full flex justify-center items-end space-x-5 space-y-5"
        onClick={(e) => getTheData(e)}
      >
        {expandedElement === "C" && (
          <div className="w-full h-[70%] grid place-items-center flex-shrink-0">
            <div
              className="w-[76%] min-w-[583px] h-[90%] min-h-[293px] rounded-3xl overflow-hidden pointer-events-auto translate-y-[5%]"
              onClick={(e) => e.stopPropagation()}
            >
              <About iframeUrl={data.iframeUrl} mob={false} />
            </div>
          </div>
        )}
        <div className="w-full h-full flex justify-center items-center space-x-5  translate-y-[2%]">
          {useProjectDataState?.value?.slice(0, 3)?.map((project) => (
            <ProjectCards
              id={project.id}
              key={project.id}
              border={project.id == data?.id}
            >
              <img
                src={project.thumbnail}
                alt="thumbnail"
                className="w-[100%] h-[100%] object-cover absolute top-0 pointer-events-none"
              />
            </ProjectCards>
          ))}
        </div>
      </div>
      {expandedElement === "D" && (
        <div className="w-full h-[70%] mt-3 flex items-center justify-center flex-shrink-0 pl-5">
          <div className="w-[56%] h-[94%] min-w-[563px] min-h-[273px]  bg-white rounded-3xl border relative overflow-hidden  pointer-events-auto">
            <About iframeUrl={data.iframeUrl} mob={false} />
          </div>
          <div className="w-1/2 h-full flex flex-col justify-between items-start p-5 ml-5 text-left">
            <h1 className="text-3xl font-bold">{data.name}</h1>
            <div className="flex flex-col text-left space-y-5">
              {data.desc?.map((text: string, index) => (
                <p key={index} className="text-xl">
                  {text}
                </p>
              ))}
            </div>

            <button
              style={{
                visibility: data?.projectLink ? "visible" : "hidden",
                pointerEvents: data?.projectLink ? "auto" : "none",
              }}
              className="text-2xl font-bold hover:text-[blue]"
              onClick={(e) => {
                e.stopPropagation();
                visitUrl(data.projectLink);
              }}
            >
              <u>{data.buttonTitle || data.projectLink?.slice(8)}</u>
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default memo(Projects);
