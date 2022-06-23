import React, { useEffect } from "react";
import Dice from "../../Dice/Dice";
import setHome from "../../../utils/setHome";
import InitialHomeContainer from "../../InitialHomeContainer/InitialHomeContainer";
import FinalHomeContainer from "../../FinalHomeContainer/FinalHomeContainer";
import Boxes from "../../Boxes/Boxes";
import { WEBSOCKET_URL } from "../../../api/url";
import { useLocation, useParams } from "react-router-dom";
import "./Game.css";

let webSocket;

function Game() {
  useEffect(setHome, []);

  const location = useLocation();
  const { gameId } = useParams();

  const {
    data: { beginedBy, usersOnRoom },
    myUserName,
  } = location.state;

  const [myColor, _] = Object.entries(usersOnRoom).find(
    ([color, user]) => user == myUserName
  );

  useEffect(() => {
    webSocket = new WebSocket(`${WEBSOCKET_URL}/game/${gameId}/`);

    webSocket.onmessage = ({ data }) => {
      data = JSON.parse(data);
      console.log(data);

      // if(data['data-type'] === 'initialize-game')
    };
  }, []);

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
