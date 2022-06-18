import React from "react";
import { useGameInfo } from "../../context/GameInfoContext";
import EnableTokens from "../../utils/EnableTokens";
import "./Dice.css";

const Dice = () => {
  const { GameInfo, setGameInfo, ShuffleTurn } = useGameInfo();
  let { turn, tokenInfo } = GameInfo;

  const generateNewRandomPoints = (e) => {
    const randomPoints = Math.ceil(Math.random() * 6);
    setGameInfo({ ...GameInfo, currentUserPoints: randomPoints });

    generateDiceDots(randomPoints, e.target);

    if (tokenInfo[turn].allTokenInside() && randomPoints !== 6) {
      ShuffleTurn();
    } else {
      EnableTokens(turn, randomPoints);
    }
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
