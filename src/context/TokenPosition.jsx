import React, { useContext, useState, createContext } from "react";
import { STARBOXINDEX } from "../components/Boxes/utils";

const TokenPosition = createContext();

const TokenPositionProvider = ({ children }) => {
  const [TokenPositions, setTokenPositions] = useState({
    // Red: [null, null, null, null],
    // Green: [null, null, null, null],
    // Yellow: [null, null, null, null],
    // Blue: [null, null, null, null],
    Red: [31, 33, 34, 35],
    Green: [1, 4, 7, 13],
    Yellow: [36, 37, 38, 39],
    Blue: [55, 58, 64, 70],
  });

  const checkForOut = (
    positions,
    newTokenPosition,
    turn,
    CurrentActiveTokensPositions
  ) => {
    delete positions[turn];
    const keys = Object.keys(positions);
    keys.forEach((key) => {
      const index = positions[key].indexOf(newTokenPosition);
      if (
        index !== -1 &&
        !STARBOXINDEX.includes(newTokenPosition) &&
        newTokenPosition !== "Home"
      ) {
        positions[key][index] = null;
      }
    });
    positions[turn] = CurrentActiveTokensPositions;
    return positions;
  };

  const isAllTokenInside = (color) => {
    const noNullPositions = TokenPositions[color].filter(
      (position) => position !== null
    );
    if (noNullPositions.length === 0) return true;
    return false;
  };

  return (
    <TokenPosition.Provider
      value={{
        TokenPositions,
        setTokenPositions,
        isAllTokenInside,
        checkForOut,
      }}
    >
      {children}
    </TokenPosition.Provider>
  );
};

export const useTokenPositions = () => useContext(TokenPosition);
export default TokenPositionProvider;
