import React from "react";
import Token from "../Token/Token";
import { useGameInfo } from "../../context/GameInfoContext";
import "./InitialHomeContainer.css";

const HomeContainer = ({ color }) => {
  const { GameInfo, turn, currentUserPoints } = useGameInfo();
  const { tokenInfo } = GameInfo;

  return (
    <div className={`initial-home-container ${color.toLowerCase()}`}>
      <div className="initial-home">
        {Object.values(tokenInfo[color].tokenPositions).map(
          (tokenPosition, i) => (
            <div
              key={i}
              className={`initial-token-container ${color.toLowerCase()}`}
            >
              {tokenPosition == null ? (
                <Token color={color.toLowerCase()} />
              ) : (
                ""
              )}
            </div>
          )
        )}
      </div>
    </div>
  );
};

export default HomeContainer;
