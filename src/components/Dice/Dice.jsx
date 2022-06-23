import React, { useState } from "react";
import { useUserInfo } from "../../context/GameInfo";
import { useDiceInfo } from "../../context/DiceInfoProvider";
// Used modular form to practice
import classes from "./Dice.module.css";

const Dice = () => {
  const { EnableOrDisableDice, disableDice, animate } = useDiceInfo();
  const { GameInfoState, rollDice } = useUserInfo();
  const { turn, points } = GameInfoState;

  const handleDiceClick = () => {
    // animateDice();
    rollDice();
    EnableOrDisableDice();
  };

  return (
    <div className={classes["dice-container"]}>
      <p>{turn}'s Turn</p>
      <div
        style={{ pointerEvents: disableDice ? "none" : "all" }}
        className={`${classes.dice}${animate ? " animate" : ""}`}
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
