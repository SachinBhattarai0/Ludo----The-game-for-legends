import React from "react";
import Token from "../Token/Token";
import "./InitialHomeContainer.css";
import { useUserInfo } from "../../context/GameInfo";
import { useTokenPositions } from "../../context/TokenPosition";

const HomeContainer = ({ color }) => {
  const { TokenPositions } = useTokenPositions();
  const { GameInfoState } = useUserInfo();
  const { turn, points, rolledDice } = GameInfoState;

  return (
    <div className={`initial-home-container ${color.toLowerCase()}`}>
      <div className="initial-home">
        {TokenPositions[color].map((position, i) => (
          <div
            key={i}
            className={`initial-token-container ${color.toLowerCase()}`}
          >
            {position === null ? (
              <Token
                color={color}
                disable={
                  turn === color && points === 6 && rolledDice ? false : true
                }
              />
            ) : (
              ""
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomeContainer;
