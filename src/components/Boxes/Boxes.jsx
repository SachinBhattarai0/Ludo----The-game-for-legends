import React from "react";
import { boxesClassList } from "./utils";
import { useTokenPositions } from "../../context/TokenPosition";
import Token from "../Token/Token";
import "./Boxes.css";

function Boxes() {
  const { TokenPositions } = useTokenPositions();

  return (
    <>
      {boxesClassList.map((boxClass, i) => (
        <div key={i} className={boxClass}>
          {Object.values(TokenPositions).map((itemPositions, keyIndex) => {
            let arr = [];
            let keys = Object.keys(TokenPositions);
            itemPositions.forEach((position) => {
              position === i
                ? arr.push(<Token color={keys[keyIndex]} />)
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
