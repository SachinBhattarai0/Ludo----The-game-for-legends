import React, { useEffect } from "react";
import Dice from "../../Dice/Dice";
import setHome from "../../../utils/setHome";
import InitialHomeContainer from "../../InitialHomeContainer/InitialHomeContainer";
import FinalHomeContainer from "../../FinalHomeContainer/FinalHomeContainer";
import Boxes from "../../Boxes/Boxes";
import { useLocation, useParams } from "react-router-dom";
import { useWebSocket } from "../../../context/WebsocketProvider";
import "./Game.css";

function Game() {
  useEffect(setHome, []);

  const location = useLocation();
  const { gameId } = useParams();
  const { webSocket, setGameId } = useWebSocket();

  const {
    data: { beginedBy, usersOnRoom },
    myUserName,
  } = location.state;

  const [myColor, _] = Object.entries(usersOnRoom).find(
    ([color, user]) => user === myUserName
  );

  useEffect(() => {
    if (!webSocket) {
      setGameId(gameId);
      return;
    }

    webSocket.onmessage = ({ data }) => {
      data = JSON.parse(data);
      console.log(data);
    };
  }, [webSocket]);

  // console.log(gameId, beginedBy, usersOnRoom, myUserName, myColor);
  console.log("my infos", myUserName, myColor);
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
      <Dice myColor={myColor} />
    </div>
  );
}

export default Game;
