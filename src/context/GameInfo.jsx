import React, { useState, createContext, useContext, useEffect } from "react";
import { useTokenPositions } from "./TokenPosition";
import { useDiceActive } from "./DiceActive";

const userInfoContext = createContext();

const GameInfoProvider = ({ children }) => {
  const { EnableOrDisableDice } = useDiceActive();
  const { pathAvailable, TokenPositions } = useTokenPositions();

  const [GameInfoState, setGameInfoState] = useState({
    turn: "Red",
    points: 0,
    rolledDice: false,
    changedIdentifier: Math.random(),
  });

  const rollDice = () => {
    const randomNumber = Math.ceil(Math.random() * 6);
    setGameInfoState({
      ...GameInfoState,
      points: randomNumber,
      rolledDice: true,
      changedIdentifier: Math.random(),
    });
    return randomNumber;
  };

  useEffect(() => {
    const { turn, points } = GameInfoState;
    if (
      GameInfoState.points !== 0 && //does not run on first render
      !pathAvailable("__all__", turn, points)
    ) {
      //Little delay for better user experience
      setTimeout(() => {
        console.log("soundplay here");
        shuffleTurn();
        EnableOrDisableDice();
      }, 500);
    }
  }, [GameInfoState.changedIdentifier]);

  const shuffleTurn = () => {
    const { turn } = GameInfoState;
    const allTurns = Object.keys(TokenPositions);
    const indexOfTurn = allTurns.indexOf(turn);

    const newTurn = allTurns[indexOfTurn + 1] || allTurns[0];
    setGameInfoState({ ...GameInfoState, turn: newTurn, rolledDice: false });
  };

  return (
    <userInfoContext.Provider
      value={{ GameInfoState, setGameInfoState, rollDice, shuffleTurn }}
    >
      {children}
    </userInfoContext.Provider>
  );
};

export const useUserInfo = () => useContext(userInfoContext);
export default GameInfoProvider;
