import React, { useEffect } from "react";
import { useTokenPositions } from "../../context/TokenPosition";
import { useUserInfo } from "../../context/GameInfo";
import { useDiceActive } from "../../context/DiceActive";
import { paths } from "../../utils/TokenPath";
import "./Token.css";

const Token = ({ color, disable = true, positionIndex }) => {
  const { TokenPositions, setTokenPositions, checkForOut, checkForHome } =
    useTokenPositions();
  const { GameInfoState, setGameInfoState, shuffleTurn } = useUserInfo();
  const { EnableOrDisableDice } = useDiceActive();
  const { points } = GameInfoState;

  const moveToken = (positionIndex, color) => {
    const CurrentActiveTokensPositions = TokenPositions[color];
    const tokenPositionValue = CurrentActiveTokensPositions[positionIndex];

    // Brings new position for clicked token from token's path on the basis of previous positon and points gained
    const newTokenPosition =
      tokenPositionValue === null
        ? paths[color][0]
        : paths[color][paths[color].indexOf(tokenPositionValue) + points];

    CurrentActiveTokensPositions[positionIndex] = newTokenPosition;

    //checkForOut check if any token is out and returns new positions for tokens
    const newPositions = checkForOut(
      TokenPositions,
      newTokenPosition,
      color,
      CurrentActiveTokensPositions
    );

    checkForHome(newPositions);

    setTokenPositions({
      ...newPositions,
    });
  };

  useEffect(() => {
    if (points !== 0 && points !== 6) {
      shuffleTurn();
      EnableOrDisableDice();
    } else if (points !== 0 && points === 6) {
      EnableOrDisableDice();
      setGameInfoState({ ...GameInfoState, rolledDice: false });
    }
  }, [TokenPositions]);

  return (
    <button
      disabled={disable}
      className={`token ${color.toLowerCase()}`}
      onClick={() => moveToken(positionIndex, color)}
    ></button>
  );
};

export default Token;
