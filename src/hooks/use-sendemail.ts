import React from "react";
import { setShowLoader } from "./use-showloader";

const UseSendMail = () => {
  const sendEmail = async (email: string, message: string) => {
    if (!email || !message) return;
    setShowLoader({ action: true });
    await fetch("", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        email,
        message,
      }),
    });
  };

  return {
    sendEmail,
  };
};

export default UseSendMail;
