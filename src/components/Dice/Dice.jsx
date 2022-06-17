import React, { useEffect } from "react";
import { useGameInfo } from "../../context/GameInfoContext";
// Used modular form to practice
import classes from "./Dice.module.css";

const Dice = () => {
  const { GameInfo, setGameInfo } = useGameInfo();
  const { currentUserPoints } = GameInfo;

  const generateNewRandomPoints = () => {
    const randomPoints = Math.round(Math.random() * 6);
    setGameInfo({ ...GameInfo, ["currentUserPoints"]: randomPoints });
  };

  return (
    <div
      className={classes["dice-container"]}
      onClick={generateNewRandomPoints}
    >
      <p>Red's Turn</p>
      <div className={classes.dice}>
        {/* {new Array(currentUserPoints).map((_,i) => {
          return <div key={i} className={classes["dice-dot"]}></div>;
        })} */}
      </div>
    </div>
  );
};

export default Dice;
