import React, { useEffect, useState } from "react";
import { useUserInfo } from "../../context/GameInfo";
import { useTokenPositions } from "../../context/TokenPosition";
// Used modular form to practice
import classes from "./Dice.module.css";

const Dice = () => {
  const [disableDice, setdisableDice] = useState(false);
  const EnableOrDisableDice = () => setdisableDice(!disableDice);

  const { isAllTokenInside } = useTokenPositions();

  const { GameInfoState, rollDice, shuffleTurn } = useUserInfo();
  const { turn, points } = GameInfoState;

  const handleDiceClick = () => {
    rollDice();
    EnableOrDisableDice();
  };

  return (
    <div className={classes["dice-container"]}>
      <p>{turn}'s Turn</p>
      <div
        style={{ pointerEvents: disableDice ? "none" : "all" }}
        className={classes.dice}
        onClick={handleDiceClick}
      >
        {[...Array(points)].map((_, i) => (
          <div key={i} className={classes["dice-dot"]}></div>
        ))}
      </div>
    </div>
  );
};

export default Dice;
