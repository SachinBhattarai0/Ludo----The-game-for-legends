import React from "react";
import { useUserInfo } from "../../context/GameInfo";
import { useDiceActive } from "../../context/DiceActive";
// Used modular form to practice
import classes from "./Dice.module.css";

const Dice = () => {
  const { EnableOrDisableDice, disableDice } = useDiceActive();
  const { GameInfoState, rollDice } = useUserInfo();
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
