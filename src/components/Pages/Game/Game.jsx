import React, { useEffect } from "react";
import Dice from "../../Dice/Dice";
import setHome from "../../../utils/setHome";
import InitialHomeContainer from "../../InitialHomeContainer/InitialHomeContainer";
import FinalHomeContainer from "../../FinalHomeContainer/FinalHomeContainer";
import Boxes from "../../Boxes/Boxes";
import { useLocation, useParams } from "react-router-dom";
import "./Game.css";

function Game() {
  useEffect(setHome, []);

  const location = useLocation();
  const { gameId } = useParams();

  console.log(location, gameId);
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
