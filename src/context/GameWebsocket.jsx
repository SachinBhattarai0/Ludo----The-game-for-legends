import React, { createContext, useContext, useState } from "react";
import { WEBSOCKET_URL } from "../api/url";

const Websocket = createContext();

const GameWebsocketProvider = ({ children }) => {
  const [gameId, setGameId] = useState("");

  const gameWebSocket = gameId
    ? new WebSocket(`${WEBSOCKET_URL}/game/${gameId}/`)
    : "";

  return (
    <Websocket.Provider value={{ gameWebSocket, setGameId }}>
      {children}
    </Websocket.Provider>
  );
};

export default GameWebsocketProvider;
export const useSocket = () => useContext(Websocket);
