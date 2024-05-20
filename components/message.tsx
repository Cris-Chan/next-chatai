import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";

export const MessageComp = ({ role = "user", content = "" }) => {
  const isUser = role === "user";
  return (
    <div className={` flex flex-col ${isUser ? "items-end" : "items-start"}`}>
      <div
        className={` p-2 rounded-sm my-4 inline-flex ${
          isUser ? "flex-row-reverse" : ""
        }`}
      >
        <div className={`flex items-start ${isUser ? "ml-4" : "mr-4"} mx-1`}>
          <Avatar>
            <AvatarImage src='https://github.com/shadcn.png' />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
        </div>
        <div className=' bg-slate-100 rounded-sm flex items-center px-4 py-3'>
          {content}
        </div>
      </div>
    </div>
  );
};
