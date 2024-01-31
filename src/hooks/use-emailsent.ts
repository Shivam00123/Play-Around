import React from "react";
import { createState, useState } from "@hookstate/core";

const initialState = {
  errorMsg: "",
  errorTitle: "",
  infoMsg: "",
  infoTitle: "",
};

const errorState = createState(initialState);

interface ErrorProps {
  message: string;
  title: string;
}

export const setErrorMessage = ({ title, message }: ErrorProps) => {
  errorState.errorMsg.set(message || "");
  errorState.errorTitle.set(title || "");
};

export const setInfoMessage = ({ title, message }: ErrorProps) => {
  console.log({ title, message });
  errorState.infoMsg.set(message || "");
  errorState.infoTitle.set(title || "");
};

export const useEmailSent = () => {
  return useState(errorState);
};
