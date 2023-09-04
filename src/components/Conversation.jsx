import Sender from "./Sender";
import { BiDockLeft } from "react-icons/bi";
import Message from "./Message";
import MessageTest from "./MessageTest";
import React, { useEffect, useState, useRef } from "react";

export default function Conversation({ history, setHistory }) {
  return (
    <div className="flex-1 flex w-10/12 h-full flex-col items-center justify-between">
      <div className="header flex h-[84px] flex-row items-center justify-between w-full border-b-2 border-solid">
        <h1 className="flex flex-1 p-4 items-center justify-center text-center text-4xl ml-2.5 my-4 mr-28">
          Avanade GPT
        </h1>
      </div>
      <MessageTest history={history} />
      <Message history={history} />
      <Sender history={history} setHistory={setHistory}></Sender>
    </div>
  );
}
