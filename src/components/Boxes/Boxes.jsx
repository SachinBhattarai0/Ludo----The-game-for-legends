import React from "react";
import { boxesClassList } from "./utils";
import { useTokenPositions } from "../../context/TokenPosition";
import { useUserInfo } from "../../context/GameInfo";
import Token from "../Token/Token";
import "./Boxes.css";

function Boxes() {
  const { TokenPositions, pathAvailable } = useTokenPositions();
  const { GameInfoState } = useUserInfo();
  const { turn, rolledDice, points } = GameInfoState;

  return (
    <>
      {boxesClassList.map((boxClass, i) => (
        <div key={i} className={boxClass}>
          {Object.values(TokenPositions).map((itemPositions, keyIndex) => {
            let arr = [];
            let keys = Object.keys(TokenPositions);
            itemPositions.forEach((position, positionIndex) => {
              const color = keys[keyIndex];
              position === i
                ? arr.push(
                    <Token
                      key={positionIndex}
                      color={color}
                      disable={
                        turn === color &&
                        rolledDice &&
                        pathAvailable(positionIndex, color, points)
                          ? false
                          : true
                      }
                      positionIndex={positionIndex}
                    />
                  )
                : arr.push("");
            });
            return arr;
          })}
        </div>
      ))}
    </>
  );
}

export default Boxes;
