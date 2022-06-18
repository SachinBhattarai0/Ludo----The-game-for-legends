import React, { useState, createContext, useContext, useEffect } from "react";

const userInfoContext = createContext();

const GameInfoProvider = ({ children }) => {
  const [GameInfoState, setGameInfoState] = useState({
    turn: "Red",
    points: 0,
    rolledDice: false,
  });

  console.log("Note: When shuffling turn change rolledDice to false");
  const rollDice = () => {
    const randomNumber = Math.ceil(Math.random() * 6);
    setGameInfoState({
      ...GameInfoState,
      points: randomNumber,
      rolledDice: true,
    });
    return randomNumber;
  };
  const shuffleTurn = () => {
    const { turn } = GameInfoState;
    if (turn === "Yellow")
      setGameInfoState({ ...GameInfoState, turn: "Red", rolledDice: false });
    if (turn === "Blue")
      setGameInfoState({ ...GameInfoState, turn: "Yellow", rolledDice: false });
    if (turn === "Green")
      setGameInfoState({ ...GameInfoState, turn: "Blue", rolledDice: false });
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
