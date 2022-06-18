import React, { useState, createContext, useContext } from "react";

const userInfoContext = createContext();

const GameInfoProvider = ({ children }) => {
  const [GameInfoState, setGameInfoState] = useState({
    turn: "Red",
    points: 0,
  });

  const rollDice = () => {
    const randomNumber = Math.ceil(Math.random() * 6);
    setGameInfoState({ ...GameInfoState, points: randomNumber });
  };

  return (
    <userInfoContext.Provider
      value={{ GameInfoState, setGameInfoState, rollDice }}
    >
      {children}
    </userInfoContext.Provider>
  );
};

export const useUserInfo = () => useContext(userInfoContext);
export default GameInfoProvider;
