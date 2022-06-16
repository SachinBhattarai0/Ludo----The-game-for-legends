import React from "react";
// Used modular form to practice
import classes from "./Dice.module.css";

const Dice = () => {
  return (
    <div className={classes["dice-container"]}>
      <p>Red's Turn</p>
      <div className={classes.dice}>
        <div className={classes["dice-dot"]}></div>
        <div className={classes["dice-dot"]}></div>
        <div className={classes["dice-dot"]}></div>
        <div className={classes["dice-dot"]}></div>
        <div className={classes["dice-dot"]}></div>
        <div className={classes["dice-dot"]}></div>
      </div>
    </div>
  );
};

export default Dice;
