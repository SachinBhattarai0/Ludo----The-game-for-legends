import React, { useEffect } from "react";
import Dice from "../../Dice/Dice";
import setHome from "../../../utils/setHome";
import InitialHomeContainer from "../../InitialHomeContainer/InitialHomeContainer";
import FinalHomeContainer from "../../FinalHomeContainer/FinalHomeContainer";
import { useUserInfo } from "../../../context/GameInfo";
import Boxes from "../../Boxes/Boxes";
import { useLocation, useParams } from "react-router-dom";
import { useWebSocket } from "../../../context/WebsocketProvider";
import "./Game.css";

function Game() {
  useEffect(setHome, []);

  const location = useLocation();
  const { gameId } = useParams();
  const { webSocket, setGameId } = useWebSocket();
  const { GameInfoState, setGameInfoState } = useUserInfo();

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
      if (response["data-type"] === "user-rolled-dice")
        setGameInfoState({
          ...response.data,
        });
      if (response["data-type"] === "shuffle-turn")
        setGameInfoState({
          ...GameInfoState,
          ...response.data,
        });
    };
  }, [webSocket]);

  useEffect(() => console.log(GameInfoState), [GameInfoState]);

  // console.log(gameId, beginedBy, usersOnRoom, myUserName, myColor);
  console.log("my infos", myUserName, myColor);
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
      <Dice myColor={myColor} />
    </div>
  );
}

export default Game;
