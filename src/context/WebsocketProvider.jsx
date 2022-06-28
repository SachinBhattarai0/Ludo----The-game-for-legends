import React, { useState, useContext, createContext } from "react";
import { WEBSOCKET_URL } from "../api/url";

const WebSocketContext = createContext();

const WebsocketProvider = ({ children }) => {
  const [gameId, setGameId] = useState("");

  const createNewSocket = (url) => {
    return new WebSocket(url);
  };

  const webSocket = gameId
    ? new WebSocket(`${WEBSOCKET_URL}/game/${gameId}/`)
    : "";

  const sendToSocket = (data) => {
    webSocket.send(JSON.stringify(data));
  };

  return (
    <WebSocketContext.Provider value={{ webSocket, setGameId, sendToSocket }}>
      {children}
    </WebSocketContext.Provider>
  );
};

export default WebsocketProvider;
export const useWebSocket = () => useContext(WebSocketContext);
