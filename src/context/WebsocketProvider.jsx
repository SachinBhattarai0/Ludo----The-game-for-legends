import React, { useState, useContext, createContext } from "react";
import { WEBSOCKET_URL } from "../api/url";

const WebSocketContext = createContext();

const WebsocketProvider = ({ children }) => {
  const [gameId, setGameId] = useState("");

  const webSocket = gameId
    ? new WebSocket(`${WEBSOCKET_URL}/game/${gameId}/`)
    : "";

  return (
    <WebSocketContext.Provider value={{ webSocket, setGameId }}>
      {children}
    </WebSocketContext.Provider>
  );
};

export default WebsocketProvider;
export const useWebSocket = () => useContext(WebSocketContext);
