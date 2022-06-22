import React from "react";
import ReactDOM from "react-dom/client";
import GameInfoProvider from "./context/GameInfo";
import TokenPositionProvider from "./context/TokenPosition";
import DiceActiveProvider from "./context/DiceActive";
import WinnerProvider from "./context/WinnerProvider";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <DiceActiveProvider>
        <WinnerProvider>
          <TokenPositionProvider>
            <GameInfoProvider>
              <App />
            </GameInfoProvider>
          </TokenPositionProvider>
        </WinnerProvider>
      </DiceActiveProvider>
    </BrowserRouter>
  </React.StrictMode>
);
