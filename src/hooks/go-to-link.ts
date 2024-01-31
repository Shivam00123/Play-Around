import React from "react";

const useGoToLink = () => {
  const visitUrl = (url: string) => {
    if (!url) return;
    window.open(url);
  };

  return {
    visitUrl,
  };
};

export default useGoToLink;
