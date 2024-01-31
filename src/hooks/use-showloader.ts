import React from "react";
import { createState, useState } from "@hookstate/core";

const initialState = {
  showLoader: false,
};

interface LoaderProps {
  action: boolean;
}

const loaderState = createState(initialState);

export const setShowLoader = ({ action }: LoaderProps) => {
  loaderState.showLoader.set(action);
};

export const useShowLoader = () => {
  return useState(loaderState);
};
