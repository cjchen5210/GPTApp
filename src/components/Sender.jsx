import { BiSend, BiSolidPlusCircle } from "react-icons/bi";
import { AiOutlineClear } from "react-icons/ai";
import React, { useEffect, useState, useRef, useCallback } from "react";
import TextField from "@mui/material/TextField";
import { sendToGPT, clearConversation } from "../api/API";

export default function Sender({ history, setHistory }) {
  const [textFieldValue, setTextFieldValue] = useState("");
  const [callAssistant, setCallAssistant] = useState(false);

  const handleChange = (event) => {
    setTextFieldValue(() => event.target.value);
  };

  const handleOnClick = async () => {
    console.log(textFieldValue);
    const userQuestion = { role: "user", content: textFieldValue };
    const messageBeforeSend = history.message;
    const messageWithUser = [...messageBeforeSend, userQuestion];
    setHistory((pre) => {
      const newHistory = {
        created: pre.created,
        id: pre.id,
        message: messageWithUser,
        title: pre.title,
      };
      return newHistory;
    });
    setTextFieldValue(() => "");
    setCallAssistant(true);
  };

  useEffect(() => {
    const fetchAssistantResponse = async () => {
      const assistant = await sendToGPT(
        history,
        "https://localhost:7132/api/Conversation/GetConversation"
      );
      console.log(assistant);
      setHistory(() => assistant);
      setCallAssistant(false);
    };

    if (callAssistant) {
      fetchAssistantResponse();
    }
  }, [callAssistant, history]);

  const handleOnClear = useCallback(async () => {
    console.log("clear");
    const response = await clearConversation(
      "https://localhost:7132/api/ClearConversation/Clear/8cb2a139-cf05-41d4-883a-0b2aa217007c"
    );
    const data = response.json();
    setHistory(() => data);
  }, []);
  return (
    <>
      <div className="flex mb-12 relative">
        <div className="relative flex items-center">
          <TextField
            className="w-[40rem]"
            id="outlined-multiline-flexible"
            label="Enter your question"
            multiline
            maxRows={6}
            color="warning"
            value={textFieldValue}
            onChange={handleChange}
          />
          <button className="right-0 px-4 py-2">
            <BiSend className="h-10 w-10 mr-3" onClick={handleOnClick} />
          </button>
          <button className="">
            <AiOutlineClear
              className="h-10 w-10 ml-9"
              onClick={handleOnClear}
            ></AiOutlineClear>
          </button>
        </div>
      </div>
    </>
  );
}
