import React, { useState, createContext, useContext, useEffect } from "react";
import { useTokenPositions } from "./TokenPosition";
import { useDiceActive } from "./DiceActive";

const userInfoContext = createContext();

const GameInfoProvider = ({ children }) => {
  const { EnableOrDisableDice } = useDiceActive();
  const { pathAvailable } = useTokenPositions();

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
      GameInfoState.points !== 0 && //So that code donotrun on first render
      !pathAvailable("__all__", turn, points, true)
    ) {
      //Little delay for better user experience
      setTimeout(() => {
        console.log("soundplay here");
        shuffleTurn();
        EnableOrDisableDice();
      }, 750);
    }
  }, [GameInfoState.changedIdentifier]);

  const shuffleTurn = () => {
    const { turn } = GameInfoState;
    if (turn === "Red") {
      setGameInfoState({ ...GameInfoState, turn: "Green", rolledDice: false });
    } else if (turn === "Green") {
      setGameInfoState({ ...GameInfoState, turn: "Yellow", rolledDice: false });
    } else if (turn === "Yellow") {
      setGameInfoState({ ...GameInfoState, turn: "Blue", rolledDice: false });
    } else {
      setGameInfoState({ ...GameInfoState, turn: "Red", rolledDice: false });
    }
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
