import React, { useState, memo } from "react";

import { setErrorMessage, setInfoMessage } from "@/hooks/use-emailsent";
// import UseSendMail from "@/hooks/use-sendemail";
import { setShowLoader } from "@/hooks/use-showloader";
import LeftToRightAnimation from "../CharacterAnimation/LeftToRightAnimation/LeftToRightAnimation";
import InitialPhase from "./InitialPhase";
import readingchar from "@/public/Images/readingchar.png";
import SocialLinks from "./SocialLinks";

interface VisitUrlProps {
  visitUrl: (action: string) => void;
}

const FullPhase: React.FC<VisitUrlProps> = ({ visitUrl }) => {
  const [message, setMessage] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  // const { sendEmail } = UseSendMail();

  // const submitForm = () => {
  //   if (!email || !message) {
  //     setErrorMessage({ title: "Invalid email", message: "" });
  //     return;
  //   }
  //   sendEmail(email, message)
  //     .then((res) => {
  //       console.log(res);
  //       setShowLoader({ action: false });
  //       setTimeout(() => {
  //         setInfoMessage({ title: "Email successfully sent", message: "" });
  //       }, 500);
  //       setEmail("");
  //       setMessage("");
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //       setShowLoader({ action: false });
  //       setErrorMessage({ title: "Something went wrong", message: "" });
  //     });
  // };

  return (
    <div className="w-full h-full flex items-center justify-between relative">
      <div
        style={{ transform: "rotateY(180deg)" }}
        className="w-[35%] h-full absolute z-50"
      >
        <LeftToRightAnimation>
          <img
            src={readingchar}
            alt="character"
            className="w-full h-full object-contain"
          />
        </LeftToRightAnimation>
      </div>
      <div
        onClick={(e) => e.stopPropagation()}
        className="w-full h-[100%] flex flex-col items-center justify-center pointer-events-auto cursor-auto -translate-y-[5%]"
      >
        <div className="w-[90%] h-[90%] min-w-[307px] min-h-[216px] flex-shrink-0 flex flex-col items-start justify-start p-5 relative">
          <h2 className="text-xl mb-2 text-black font-extrabold">
            Write to us
          </h2>
          <div className="w-full h-[100%] mb-2 border-4 border-greenStroke rounded-[20px] overflow-hidden">
            <textarea
              onChange={(e) => setMessage(e.target.value)}
              name="message"
              spellCheck={false}
              className="w-full h-full  rounded-lg resize-none p-2 placeholder:text-lg text-lg focus:outline-none"
              placeholder="hello,"
              value={message}
            ></textarea>
          </div>
          <div className="w-full h-[20%] flex items-center justify-between bg-white border-4 border-[#85D4BE] rounded-[20px] overflow-hidden">
            <div className="w-[80%] h-full">
              <input
                onChange={(e) => setEmail(e.target.value)}
                name="user_email"
                type="email"
                placeholder="email id"
                value={email}
                className="w-full h-full px-5 placeholder:text-lg text-lg focus:outline-none"
                // onKeyDown={(e) => {
                //   if (e.key === "Enter") {
                //     submitForm();
                //   }
                // }}
              />
            </div>
            <div className="w-1/5 h-full py-1 px-1  overflow-hidden">
              <button
                // onClick={submitForm}
                className="w-full h-full bg-[#85D4BE] rounded-xl text-white text-lg"
              >
                send
              </button>
            </div>
          </div>
        </div>
        <div className="w-[85%] h-[20%] pl-2 -translate-y-[10%]">
          <div className="w-1/3 h-full flex items-center">
            <h1 className="whitespace-nowrap text-xl text-black font-extrabold">
              Follow us
            </h1>
            <SocialLinks visitUrl={visitUrl} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default memo(FullPhase);
