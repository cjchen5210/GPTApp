import Nav from "./Nav";
import React, { useEffect, useState } from "react";
import Conversation from "./Conversation";
import { getConversation } from "../api/API";

function Chat() {
  const [history, setHistory] = useState([]);
  // https://localhost:7132/api/GetChat/GetChat/8cb2a139-cf05-41d4-883a-0b2aa217007c
  useEffect(() => {
    const fetchData = async () => {
      const conversationData = await getConversation(
        "https://gptwebapi.azurewebsites.net/api/GetChat/GetChat/8cb2a139-cf05-41d4-883a-0b2aa217007c"
      );
      console.log("get conversation ", conversationData);
      setHistory((pre) => conversationData);
    };
    fetchData();
  }, []);

  return (
    <>
      <div className="overflow-hidden w-screen h-screen flex relative z-0">
        <Nav></Nav>
        <Conversation history={history} setHistory={setHistory} />
      </div>
    </>
  );
}

export default Chat;
