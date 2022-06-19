import React, { useEffect } from "react";
import { useTokenPositions } from "../../context/TokenPosition";
import { useUserInfo } from "../../context/GameInfo";
import { useDiceActive } from "../../context/DiceActive";
import { paths } from "../../utils/TokenPath";
import "./Token.css";

const Token = ({ color, disable = true, positionIndex }) => {
  const { TokenPositions, setTokenPositions } = useTokenPositions();
  const { GameInfoState, shuffleTurn } = useUserInfo();
  const { EnableOrDisableDice } = useDiceActive();
  const { points } = GameInfoState;

  const handleTokenClick = (positionIndex, color) => {
    const CurrentActiveTokensPositions = TokenPositions[color];
    const tokenPositionValue = CurrentActiveTokensPositions[positionIndex];

    // Brings new position for clicked token from token's path on the basis of previous positon and points gained
    const newTokenPosition =
      tokenPositionValue === null
        ? paths[color][0]
        : paths[color][paths[color].indexOf(tokenPositionValue) + points];

    const newActiveTokensPositions = CurrentActiveTokensPositions; //Copying current positions of token to new variable
    newActiveTokensPositions[positionIndex] = newTokenPosition; //Changing the previous position of token to new position

    // Setting new position
    setTokenPositions({
      ...TokenPositions,
      [color]: newActiveTokensPositions,
    });
  };

  // Not at first
  useEffect(() => {
    if (points != 0) {
      shuffleTurn();
      EnableOrDisableDice();
    }
  }, [TokenPositions]);

  return (
    <button
      disabled={disable}
      className={`token ${color.toLowerCase()}`}
      onClick={() => handleTokenClick(positionIndex, color)}
    ></button>
  );
};

export default Token;
