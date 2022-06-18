import React from "react";
import { boxesClassList } from "./utils";
import { useTokenPositions } from "../../context/TokenPosition";
import { useUserInfo } from "../../context/GameInfo";
import Token from "../Token/Token";
import "./Boxes.css";

function Boxes() {
  const { TokenPositions } = useTokenPositions();
  const { GameInfoState } = useUserInfo();
  const { turn, rolledDice } = GameInfoState;

  return (
    <>
      {boxesClassList.map((boxClass, i) => (
        <div key={i} className={boxClass}>
          {Object.values(TokenPositions).map((itemPositions, keyIndex) => {
            let arr = [];
            let keys = Object.keys(TokenPositions);
            itemPositions.forEach((position) => {
              position === i
                ? arr.push(
                    <Token
                      key={keyIndex}
                      color={keys[keyIndex]}
                      disable={
                        turn === keys[keyIndex] && rolledDice ? false : true
                      }
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
