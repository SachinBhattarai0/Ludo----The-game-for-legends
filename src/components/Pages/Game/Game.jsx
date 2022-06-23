import React, { useEffect } from "react";
import Dice from "../../Dice/Dice";
import setHome from "../../../utils/setHome";
import InitialHomeContainer from "../../InitialHomeContainer/InitialHomeContainer";
import FinalHomeContainer from "../../FinalHomeContainer/FinalHomeContainer";
import Boxes from "../../Boxes/Boxes";
import { useLocation, useParams } from "react-router-dom";
import { useUserInfo } from "../../../context/GameInfo";
import { useDiceInfo } from "../../../context/DiceInfoProvider";
import { useSocket } from "../../../context/GameWebsocket";
import "./Game.css";

function Game() {
  useEffect(setHome, []);

  const location = useLocation();
  const { gameId } = useParams();
  const { GameInfoState, setGameInfoState } = useUserInfo();
  const { setdisableDice, animateDice } = useDiceInfo();
  const { gameWebSocket, setGameId } = useSocket();

  const {
    data: { beginedBy, usersOnRoom },
    myUserName,
  } = location.state;

  const [myColor, _] = Object.entries(usersOnRoom).find(
    ([color, user]) => user === myUserName
  );

  useEffect(() => {
    setGameId(gameId);
    if (gameWebSocket) {
      gameWebSocket.onmessage = ({ data }) => {
        const res = JSON.parse(data);
        console.log(res);

        if (res["data-type"] === "game-info-state") {
          setGameInfoState({ ...res.data });
          setdisableDice(
            res.data.turn.toLowerCase() === myColor ? false : true
          );
        }
        if (res["data-type"] === "user-rolled-dice") {
          animateDice();
          setGameInfoState({
            ...GameInfoState,
            ...res.data,
          });
        }
      };
    }
  }, [gameWebSocket]);

  console.log(gameId, beginedBy, usersOnRoom, myUserName, myColor);
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
