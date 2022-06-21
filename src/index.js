import React from "react";
import ReactDOM from "react-dom/client";
import GameInfoProvider from "./context/GameInfo";
import TokenPositionProvider from "./context/TokenPosition";
import DiceActiveProvider from "./context/DiceActive";
import WinnerProvider from "./context/WinnerProvider";
import "./index.css";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <DiceActiveProvider>
      <WinnerProvider>
        <TokenPositionProvider>
          <GameInfoProvider>
            <App />
          </GameInfoProvider>
        </TokenPositionProvider>
      </WinnerProvider>
    </DiceActiveProvider>
  </React.StrictMode>
);
