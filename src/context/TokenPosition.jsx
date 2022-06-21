import React, { useContext, useState, createContext } from "react";
import { paths } from "../utils/TokenPath";
import { STARBOXINDEX } from "../components/Boxes/utils";
import { repetationsOf } from "../utils/countRepetions";

const TokenPosition = createContext();

const TokenPositionProvider = ({ children }) => {
  const [TokenPositions, setTokenPositions] = useState({
    Red: [null, null, null, null],
    Green: [null, null, null, null],
    Yellow: [null, null, null, null],
    Blue: [null, null, null, null],
    // Red: [2, 6, 34, 15],
    // Green: [4, 3, 10, 13],
    // Yellow: [1, 4, 6, 39],
    // Blue: [0, 5, 6, 70],
  });
  console.log(TokenPositions);

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

  const checkForHome = (positions) => {
    const colors = Object.keys(positions);
    colors.forEach((color) => {
      const filtered_arr = positions[color].filter(
        (position) => position !== "Home"
      );
      if (filtered_arr.length === 0) {
        delete positions[color];
        setTokenPositions(positions);
      }
      console.log("Show winner");
    });
  };

  const isAllTokenInside = (color) => {
    const noNullPositions = TokenPositions[color].filter(
      (position) => position !== null
    );
    if (noNullPositions.length === 0) return true;
    return false;
  };

  const pathAvailable = (positionIndex, color, points, many = false) => {
    if (points === 0) return true;
    if (positionIndex === "__all__") {
      positionIndex = [0, 1, 2, 3];
      many = true;
    }

    const checkPathAvailable = (pathIndex) => {
      const PositionValue = TokenPositions[color][pathIndex];
      if (PositionValue === null && points !== 6) return false;
      const index = paths[color].indexOf(PositionValue);
      if (paths[color][index + points] === undefined) return false;
      return true;
    };

    // When checking is to be done for array of positions
    if (many) {
      const arr = positionIndex.map((item) => checkPathAvailable(item));
      if (repetationsOf(false, arr) === 4) return false;
      return true;
    }

    //when checking is to be done for only one position
    return checkPathAvailable(positionIndex);
  };

  return (
    <TokenPosition.Provider
      value={{
        TokenPositions,
        setTokenPositions,
        isAllTokenInside,
        checkForOut,
        pathAvailable,
        checkForHome,
      }}
    >
      {children}
    </TokenPosition.Provider>
  );
};

export const useTokenPositions = () => useContext(TokenPosition);
export default TokenPositionProvider;
