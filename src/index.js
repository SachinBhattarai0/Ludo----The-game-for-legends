import React from "react";
import ReactDOM from "react-dom/client";
import GameInfoProvider from "./context/GameInfo";
import TokenPositionProvider from "./context/TokenPosition";
import DiceActiveProvider from "./context/DiceActive";
import "./index.css";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <DiceActiveProvider>
      <TokenPositionProvider>
        <GameInfoProvider>
          <App />
        </GameInfoProvider>
      </TokenPositionProvider>
    </DiceActiveProvider>
  </React.StrictMode>
);
