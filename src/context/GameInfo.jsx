import React, { useState, createContext, useContext, useEffect } from "react";
import { useTokenPositions } from "./TokenPosition";
import { useWebSocket } from "./WebsocketProvider";

const userInfoContext = createContext();

const GameInfoProvider = ({ children }) => {
  const { pathAvailable, TokenPositions } = useTokenPositions();
  const { webSocket } = useWebSocket();

  const [GameInfoState, setGameInfoState] = useState({
    turn: "Red",
    points: 0,
    rolledDice: false,
    changedIdentifier: Math.random(),
  });

  useEffect(() => {
    const { turn, points } = GameInfoState;
    if (GameInfoState.points !== 0 && !pathAvailable("__all__", turn, points))
      setTimeout(() => shuffleTurn(), 500);
  }, [GameInfoState.changedIdentifier]);

  const shuffleTurn = () => {
    const { turn } = GameInfoState;
    const allTurns = ["Red", "Green", "Yellow", "Blue"];
    const keys = Object.keys(TokenPositions);

    const availableTurns = allTurns.filter((value) => keys.includes(value));

    const indexOfTurn = availableTurns.indexOf(turn);
    const newTurn = availableTurns[indexOfTurn + 1] || availableTurns[0];

    webSocket.send(
      JSON.stringify({
        "data-type": "shuffle-turn",
        data: {
          turn: newTurn,
          rolledDice: false,
        },
      })
    );
  };

  return (
    <userInfoContext.Provider
      value={{ GameInfoState, setGameInfoState, shuffleTurn }}
    >
      {children}
    </userInfoContext.Provider>
  );
};

export const useUserInfo = () => useContext(userInfoContext);
export default GameInfoProvider;
