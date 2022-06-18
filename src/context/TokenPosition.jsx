import React, { useContext, useState, createContext } from "react";

const TokenPosition = createContext();

const TokenPositionProvider = ({ children }) => {
  const [TokenPositions, setTokenPositions] = useState({
    Red: [null, null, null, null],
    Green: [null, null, null, null],
    Yellow: [null, null, null, null],
    Blue: [null, null, null, null],
  });

  const isAllTokenInside = (color) => {
    const noNullPositions = TokenPositions[color].filter(
      (position) => position !== null
    );
    if (noNullPositions.length === 0) return true;
    return false;
  };

  return (
    <TokenPosition.Provider
      value={{ TokenPositions, setTokenPositions, isAllTokenInside }}
    >
      {children}
    </TokenPosition.Provider>
  );
};

export const useTokenPositions = () => useContext(TokenPosition);
export default TokenPositionProvider;
