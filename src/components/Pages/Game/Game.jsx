import React, { useEffect, useState } from "react";
import Dice from "../../Dice/Dice";
import setHome from "../../../utils/setHome";
import InitialHomeContainer from "../../InitialHomeContainer/InitialHomeContainer";
import FinalHomeContainer from "../../FinalHomeContainer/FinalHomeContainer";
import { useUserInfo } from "../../../context/GameInfo";
import { useTokenPositions } from "../../../context/TokenPosition";
import { useLocation, useParams } from "react-router-dom";
import { useWebSocket } from "../../../context/WebsocketProvider";
import Boxes from "../../Boxes/Boxes";
import "./Game.css";

function Game() {
  useEffect(setHome, []);

  const location = useLocation();
  const { gameId } = useParams();
  const { webSocket, setGameId } = useWebSocket();
  const { GameInfoState, setGameInfoState } = useUserInfo();
  const [animate, setAnimate] = useState(false);
  const { TokenPositions, setTokenPositions } = useTokenPositions();

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
      const { response } = data;
      // console.log(data);
      console.log(response);

      if (data["data-type"] === "initialize-game")
        setGameInfoState({ ...response });
      if (response["data-type"] === "user-rolled-dice") {
        setGameInfoState({
          ...response.data,
        });
        animateDice();
      }
      if (response["data-type"] === "shuffle-turn")
        setGameInfoState({
          ...GameInfoState,
          ...response.data,
        });
      if (response["data-type"] === "token-position-changed")
        setTokenPositions({ ...response.data });
      if (response["data-type"] === "points-is-six")
        setGameInfoState({ ...response.data });

      //
    };
  }, [webSocket]);

  const animateDice = () => {
    setAnimate(true);
    setTimeout(() => setAnimate(false), 300);
  };

  useEffect(() => console.log(GameInfoState), [GameInfoState]);

  // console.log(gameId, beginedBy, usersOnRoom, myUserName, myColor);
  // console.log("my infos", myUserName, myColor);
  return (
    <div className="container">
      <div className="gamePad">
        <InitialHomeContainer myColor={myColor} color="Red" />
        <InitialHomeContainer myColor={myColor} color="Green" />
        <InitialHomeContainer myColor={myColor} color="Blue" />
        <InitialHomeContainer myColor={myColor} color="Yellow" />

        <FinalHomeContainer />

        <Boxes />
      </div>
      <Dice myColor={myColor} animate={animate} />
    </div>
  );
}

export default Game;
