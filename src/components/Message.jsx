import React, { useEffect, useState } from "react";
import { getConversation } from "../api/API";

export default function Message({ history }) {
  let message;
  if (history) message = history.message;
  return (
    <>
      <div className="flex-1 w-full mb-1 h-64 overflow-y-auto overflow-x-hidden">
        <div className="group w-full bg-white py-6">
          <ul>
            {message &&
              message.length > 0 &&
              message.map((msg, index) => {
                if (index > 0) {
                  const role = msg.role;
                  return (
                    <li
                      key={index}
                      className={`${
                        role === "user" ? "bg-white" : "bg-gray-200"
                      }`}
                    >
                      <div className="w-full max-w-4xl mx-auto px-4 py-6 text-lg">
                        {msg.content}
                      </div>
                    </li>
                  );
                }
              })}{" "}
          </ul>
        </div>
      </div>
    </>
  );
}
