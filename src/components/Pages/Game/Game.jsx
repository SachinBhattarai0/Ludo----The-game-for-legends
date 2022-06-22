import React, { useEffect } from "react";
import Dice from "../../Dice/Dice";
import setHome from "../../../utils/setHome";
import InitialHomeContainer from "../../InitialHomeContainer/InitialHomeContainer";
import FinalHomeContainer from "../../FinalHomeContainer/FinalHomeContainer";
import Boxes from "../../Boxes/Boxes";
import "./Game.css";

function Game() {
  useEffect(setHome, []);

  return (
    <div className="container">
      <div className="gamePad">
        <InitialHomeContainer color="Red" />
        <InitialHomeContainer color="Green" />
        <InitialHomeContainer color="Blue" />
        <InitialHomeContainer color="Yellow" />

        <FinalHomeContainer />

        <Boxes />
      </div>
      <Dice />
    </div>
  );
}

export default Game;
