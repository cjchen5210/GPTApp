import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import Chat from "./components/Chat";

ReactDOM.createRoot(document.getElementById("root")).render(
  // <React.StrictMode>
  //   <Chat />
  // </React.StrictMode>
  <React.StrictMode>
    <Chat />
  </React.StrictMode>
);
