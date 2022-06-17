import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import GameInfoContextProvider from "./context/GameInfoContext";


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <GameInfoContextProvider>
      <App />
    </GameInfoContextProvider>
  </React.StrictMode>
);
