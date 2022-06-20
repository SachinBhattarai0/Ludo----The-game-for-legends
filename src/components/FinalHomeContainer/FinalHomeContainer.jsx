import React from "react";
import { useTokenPositions } from "../../context/TokenPosition";
import { repetationsOf } from "../../utils/countRepetions";
import Token from "../Token/Token";
import "./FinalHomeContainer.css";

const COLORS = ["Red", "Green", "Yellow", "Blue"];

const FinalHomeContainer = () => {
  const { TokenPositions } = useTokenPositions();
  console.log(TokenPositions);
  return (
    <div className="home">
      {COLORS.map((color, i) => {
        return (
          <div key={i} className={`final-home ${color.toLowerCase()}`}>
            {[...Array(repetationsOf("Home", TokenPositions[color]))].map(
              (_, i) => (
                <Token key={i} disable={true} color={color} />
              )
            )}
          </div>
        );
      })}

      <div className="home-inner"></div>
    </div>
  );
};

export default FinalHomeContainer;
