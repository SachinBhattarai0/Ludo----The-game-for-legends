import React from "react";
import { useGameInfo } from "../../context/GameInfoContext";
import "./Token.css";

const Token = ({ color }) => {
  const { GameInfo, setGameInfo, ShuffleTurn } = useGameInfo();

  const handleTokenClick = () => {
    console.log("tokenClicked");
  };

  return <button className={`token ${color}`} disabled></button>;
};

export default Token;
