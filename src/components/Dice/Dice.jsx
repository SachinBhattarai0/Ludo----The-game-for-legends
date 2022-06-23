import React, { useState } from "react";
import { useUserInfo } from "../../context/GameInfo";
// Used modular form to practice
import classes from "./Dice.module.css";

const Dice = ({ myColor }) => {
  const [animate, setAnimate] = useState(false);
  const { GameInfoState, rollDice } = useUserInfo();
  const { turn, points } = GameInfoState;

  const handleDiceClick = () => {
    animateDice();
    rollDice();
  };

  const animateDice = () => {
    setAnimate(true);
    setTimeout(() => setAnimate(false), 300);
  };

  return (
    <div className={classes["dice-container"]}>
      <p>{turn}'s Turn</p>
      <div
        style={{ pointerEvents: myColor === turn ? "none" : "all" }}
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
