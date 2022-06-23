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
    if (GameInfoState.points !== 0 && !pathAvailable("__all__", turn, points)) {
      setTimeout(() => {
        console.log("soundplay here");
        shuffleTurn();
        // EnableOrDisableDice();
      }, 500);
    }
  }, [GameInfoState.changedIdentifier]);

  const shuffleTurn = () => {
    const { turn } = GameInfoState;
    const allTurns = Object.keys(TokenPositions);
    const indexOfTurn = allTurns.indexOf(turn);

    const newTurn = allTurns[indexOfTurn + 1] || allTurns[0];
    console.log("newTurn is", newTurn);

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
