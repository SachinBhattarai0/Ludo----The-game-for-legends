import React from "react";
import { useGameInfo } from "../../context/GameInfoContext";
import EnableTokens from "../../utils/EnableTokens";
import "./Dice.css";

const Dice = () => {
  const { GameInfo, setGameInfo } = useGameInfo();
  let { turn } = GameInfo;

  const generateNewRandomPoints = (e) => {
    const randomPoints = Math.round(Math.random() * 6); //here...Note for later while adding backend
    setGameInfo({ ...GameInfo, ["currentUserPoints"]: randomPoints }); //here...Note for later while adding backend

    generateDiceDots(randomPoints, e.target);
    EnableTokens(turn, randomPoints); // Enable Tokens to move by user

    // After Token moved only
    //=> ShuffleTurn();
  };

  const ShuffleTurn = () => {
    if (turn == "Blue") turn = "Red";
    if (turn == "Yellow") turn = "Blue";
    if (turn == "Green") turn = "Yellow";
    if (turn == "Red") turn = "Green";

    setGameInfo({ ...GameInfo, turn });
  };

  const generateDiceDots = (noOfDots, target) => {
    target.innerHTML = "";
    for (let i = 0; i < noOfDots; i++) {
      target.innerHTML += `<div class="dice-dot"></div>`;
    }
  };

  return (
    <div className="dice-container">
      <p>{turn}'s Turn</p>
      <button
        className="dice"
        id="dice"
        onClick={(e) => generateNewRandomPoints(e)}
      ></button>
    </div>
  );
};

export default Dice;
