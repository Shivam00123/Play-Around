import { createState, useState } from "@hookstate/core";
import React from "react";

import { projectData } from "@/Data/project";

const projectsDataState = createState<any[]>([]);

const useProjectdata = () => {
  const useProjectDataState = useState(projectsDataState);

  const getProjectData = () => {
    useProjectDataState.set(projectData);
    return;
  };

  return {
    getProjectData,
    useProjectDataState,
  };
};

export default useProjectdata;
