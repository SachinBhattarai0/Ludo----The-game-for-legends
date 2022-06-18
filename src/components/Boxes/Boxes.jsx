import React from "react";
import { boxesClassList } from "./utils";
import { useGameInfo } from "../../context/GameInfoContext";
import Token from "../Token/Token";
import "./Boxes.css";

function Boxes() {
  const { GameInfo } = useGameInfo();
  const { tokenInfo, turn } = GameInfo;
  const tokenAtIndexes = Object.values(tokenInfo[turn].tokenPositions).filter(
    (item) => item != null
  );

  // reference for later at here
  return (
    <>
      {boxesClassList.map((boxClass, i) => (
        <div key={i} className={boxClass}>
          {tokenAtIndexes.includes(i) && <Token color={turn.toLowerCase()} />}
        </div>
      ))}
    </>
  );
}

export default Boxes;
