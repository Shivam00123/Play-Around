import React from "react";

const useSearchElement = () => {
  const searchFromArray = (Id: any, array: any[]) => {
    if (!Id || Id == "1") {
      return array?.[0];
    }
    let startPoint = 0;
    let endPoint = array?.length - 1;
    while (startPoint <= endPoint) {
      let middlePoint = Math.floor((startPoint + endPoint) / 2);
      let currentElement = array?.[middlePoint];
      if (currentElement.id > Id) {
        endPoint = middlePoint - 1;
      } else if (currentElement.id < Id) {
        startPoint = middlePoint + 1;
      } else {
        return array?.[middlePoint];
      }
    }
    return array?.[0];
  };

  return {
    searchFromArray,
  };
};

export default useSearchElement;
