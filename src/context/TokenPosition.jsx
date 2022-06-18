import React, { useContext, useState, createContext } from "react";

const TokenPosition = createContext();

const TokenPositionProvider = ({ children }) => {
  const [TokenPositions, setTokenPositions] = useState({
    Red: [null, null, null, null],
    Green: [null, null, null, null],
    Yellow: [null, null, null, null],
    Blue: [null, null, null, null],
  });

  return (
    <TokenPosition.Provider value={{ TokenPositions, setTokenPositions }}>
      {children}
    </TokenPosition.Provider>
  );
};

export const useTokenPositions = () => useContext(TokenPosition);
export default TokenPositionProvider;
