import React, { useState, createContext, useContext, useEffect } from "react";
import { useTokenPositions } from "./TokenPosition";
import { useDiceActive } from "./DiceActive";

const userInfoContext = createContext();

const GameInfoProvider = ({ children }) => {
  const { EnableOrDisableDice } = useDiceActive();

  const { isAllTokenInside } = useTokenPositions();

  const [GameInfoState, setGameInfoState] = useState({
    turn: "Red",
    points: 0,
    rolledDice: false,
    changedIdentifier: Math.random(),
  });

  console.log("Note: After moving token shuffle turn");
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
    // if points is not six and all token is inside
    if (
      GameInfoState.points !== 0 &&
      GameInfoState.points !== 6 &&
      isAllTokenInside(GameInfoState.turn)
    ) {
      shuffleTurn();
      EnableOrDisableDice();
    }
  }, [GameInfoState.changedIdentifier]);

  const shuffleTurn = () => {
    const { turn } = GameInfoState;
    if (turn === "Yellow")
      setGameInfoState({ ...GameInfoState, turn: "Red", rolledDice: false });
    if (turn === "Blue")
      setGameInfoState({ ...GameInfoState, turn: "Yellow", rolledDice: false });
    if (turn === "Green")
      setGameInfoState({ ...GameInfoState, turn: "Blue", rolledDice: false });
    if (turn === "Red")
      setGameInfoState({ ...GameInfoState, turn: "Green", rolledDice: false });
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
