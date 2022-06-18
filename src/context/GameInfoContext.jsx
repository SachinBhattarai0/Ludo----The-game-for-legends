import React, { useContext, createContext, useState } from "react";

const TokenContext = createContext();

class TokensClass {
  constructor(Color, NoOfHomes, token1, token2, token3, token4, parents) {
    this.Color = Color;
    this.NoOfHomes = NoOfHomes;
    this.tokenPositions = {
      token1,
      token2,
      token3,
      token4,
    };
    this.parentClass = parents;
  }
  // Methods
  allTokenInside() {
    const tokenPositions = Object.values(this.tokenPositions);
    return tokenPositions.filter((tokenPosition) => tokenPosition != null)[0]
      ? false
      : true;
  }
}

let Red = new TokensClass(
  "Red",
  0,
  null,
  null,
  null,
  null,
  ".red .initial-token-container"
);
let Green = new TokensClass(
  "Green",
  0,
  null,
  null,
  null,
  null,
  ".green .initial-token-container"
);
let Yellow = new TokensClass(
  "Yellow",
  0,
  null,
  null,
  null,
  null,
  ".yellow .initial-token-container"
);
let Blue = new TokensClass(
  "Blue",
  0,
  null,
  null,
  null,
  null,
  ".blue .initial-token-container"
);

const GameInfoContextProvider = ({ children }) => {
  const [GameInfo, setGameInfo] = useState({
    turn: "Red",
    tokenInfo: { Red, Green, Yellow, Blue },
    currentUserPoints: 0,
  });

  const ShuffleTurn = () => {
    let { turn } = GameInfo;
    if (turn === "Blue") turn = "Red";
    if (turn === "Yellow") turn = "Blue";
    if (turn === "Green") turn = "Yellow";
    if (turn === "Red") turn = "Green";

    setGameInfo({ ...GameInfo, turn });
  };

  return (
    <TokenContext.Provider value={{ GameInfo, setGameInfo, ShuffleTurn }}>
      {children}
    </TokenContext.Provider>
  );
};

export const useGameInfo = () => useContext(TokenContext);
export default GameInfoContextProvider;
