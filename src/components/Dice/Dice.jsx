import React from "react";
import { useUserInfo } from "../../context/GameInfo";
// Used modular form to practice
import classes from "./Dice.module.css";

const Dice = () => {
  const { GameInfoState, rollDice } = useUserInfo();
  return (
    <div className={classes["dice-container"]}>
      <p>{GameInfoState.turn}'s Turn</p>
      <div className={classes.dice} onClick={rollDice}>
        {[...Array(GameInfoState.points)].map((_, i) => (
          <div key={i} className={classes["dice-dot"]}></div>
        ))}
      </div>
    </div>
  );
};

export default Dice;
