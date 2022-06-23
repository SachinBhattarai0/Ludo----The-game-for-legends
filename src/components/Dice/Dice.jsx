import React, { useState } from "react";
import { useUserInfo } from "../../context/GameInfo";
import { useWebSocket } from "../../context/WebsocketProvider";
import classes from "./Dice.module.css";

const Dice = ({ myColor }) => {
  const [animate, setAnimate] = useState(false);
  const { GameInfoState } = useUserInfo();
  const { turn, points } = GameInfoState;
  const { webSocket } = useWebSocket();

  const handleDiceClick = () => {
    // animateDice();
    console.log("animateDice");
    const randomNumber = Math.ceil(Math.random() * 6);
    console.log(GameInfoState, "asdfasfsdf");
    webSocket.send(
      JSON.stringify({
        "data-type": "user-rolled-dice",
        data: {
          ...GameInfoState,
          points: randomNumber,
          rolledDice: true,
          changedIdentifier: Math.random(),
        },
      })
    );
  };

  const animateDice = () => {
    setAnimate(true);
    setTimeout(() => setAnimate(false), 300);
  };

  return (
    <div className={classes["dice-container"]}>
      <p>{turn}'s Turn</p>
      <div
        style={{
          pointerEvents: myColor === turn.toLowerCase() ? "all" : "none",
        }}
        className={`${classes.dice}${animate ? " animate" : ""}`}
        onClick={handleDiceClick}
      >
        {[...Array(points)].map((_, i) => (
          <div key={i} className={classes["dice-dot"]}></div>
        ))}
      </div>
    </div>
  );
};

export default Dice;
