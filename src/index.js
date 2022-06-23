import React from "react";
import ReactDOM from "react-dom/client";
import GameInfoProvider from "./context/GameInfo";
import TokenPositionProvider from "./context/TokenPosition";
import DiceInfoProvider from "./context/DiceInfoProvider";
import WinnerProvider from "./context/WinnerProvider";
import GameWebsocketProvider from "./context/GameWebsocket";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <GameWebsocketProvider>
        <DiceInfoProvider>
          <WinnerProvider>
            <TokenPositionProvider>
              <GameInfoProvider>
                <App />
              </GameInfoProvider>
            </TokenPositionProvider>
          </WinnerProvider>
        </DiceInfoProvider>
      </GameWebsocketProvider>
    </BrowserRouter>
  </React.StrictMode>
);
