import React, { useContext, createContext, useState } from "react";

const TokenContext = createContext();

class TokensClass {
  constructor(Color, NoOfHomes, token1, token2, token3, token4, parents) {
    this.Color = Color;
    this.NoOfHomes = NoOfHomes;
    this.token1 = token1;
    this.token2 = token2;
    this.token3 = token3;
    this.token4 = token4;
    this.parents = parents;
  }
  // Methods
}

let red = new TokensClass(
  "red",
  0,
  null,
  null,
  null,
  null,
  'document.querySelectorAll(".red .innerp2")'
);
let green = new TokensClass(
  "green",
  0,
  null,
  null,
  null,
  null,
  'document.querySelectorAll(".green .innerp2")'
);
let yellow = new TokensClass(
  "yellow",
  0,
  null,
  null,
  null,
  null,
  'document.querySelectorAll(".yellow .innerp2")'
);
let blue = new TokensClass(
  "blue",
  0,
  null,
  null,
  null,
  null,
  'document.querySelectorAll(".blue .innerp2")'
);



const GameInfoContextProvider = ({ children }) => {
  // const [currentUserPoints,setCurrentUserPoints] = useState(null)//To store current point obtained by user

  const [GameInfo, setGameInfo] = useState({
    turn: "red",
    tokenInfo: { red, green, yellow, blue },
    currentUserPoints:0,
  });

  return (
    <TokenContext.Provider value={{ GameInfo, setGameInfo }}>
      {children}
    </TokenContext.Provider>
  );
};

export const useGameInfo = () => useContext(TokenContext);
export default GameInfoContextProvider;
