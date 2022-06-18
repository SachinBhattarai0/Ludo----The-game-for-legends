import React from "react";
import ReactDOM from "react-dom/client";
import GameInfoProvider from "./context/GameInfo";
import TokenPositionProvider from "./context/TokenPosition";
import "./index.css";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <GameInfoProvider>
      <TokenPositionProvider>
        <App />
      </TokenPositionProvider>
    </GameInfoProvider>
  </React.StrictMode>
);
