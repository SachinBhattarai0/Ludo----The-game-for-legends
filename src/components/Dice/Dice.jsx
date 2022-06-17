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

  const generateDiceDots = ()=>{
    const dice = document.getElementById('dice')
    dice.innerHTML = '';
    for(let i= 0;i<currentUserPoints;i++){
      dice.innerHTML += `<div class=${classes["dice-dot"]}></div>`
    }
  }

  useEffect(generateDiceDots,[currentUserPoints])


  return (
    <div
      className={classes["dice-container"]}
      onClick={generateNewRandomPoints}
    >
      <p>Red's Turn</p>
      <div className={classes.dice} id="dice"></div>
    </div>
  );
};

export default Dice;
