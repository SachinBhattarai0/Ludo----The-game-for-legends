import React, { useEffect, useState } from "react";
import { useParams, useLocation } from "react-router-dom";
import { WEBSOCKET_URL } from "../../../api/url";
import "./Room.css";

var Socket;
const Room = () => {
  const { roomName } = useParams();
  const location = useLocation();
  const myUserName = location.state.userName;

  const [usersOnRoom, setUsersOnRoom] = useState({});

  useEffect(() => {
    Socket = new WebSocket(`${WEBSOCKET_URL}/room/${roomName}/${myUserName}/`);
    Socket.onmessage = ({ data }) => {
      data = JSON.parse(data);
      console.log(data);

      if (
        data["data-type"] === "user-joined-or-disconnected" ||
        data["data-type"] === "user-change-color"
      )
        setUsersOnRoom({ ...data["data"] });
    };
  }, []);

  const handleUserColorChange = ({ target }) => {
    const newValue = target.value;
    const user = usersOnRoom[newValue];

    const [myPrevValue, _] = Object.entries(usersOnRoom).find(
      (keyValue) => keyValue[1] === myUserName
    );

    let newState = { ...usersOnRoom, [newValue]: myUserName };
    newState = { ...newState, [myPrevValue]: user };
    // console.log(Socket);
    Socket.send(JSON.stringify({ "data-type": "user-change-color", newState }));
  };

  return (
    <div className="room-container">
      <h3>Room: {roomName}</h3>
      <h3>Player's List:</h3>
      <table>
        <tbody>
          <tr>
            <th>Player's Name</th>
            <th>Color</th>
          </tr>
          {Object.keys(usersOnRoom).map((userColor) => (
            <tr key={userColor}>
              <td>{usersOnRoom[userColor]}</td>
              <td>
                <div className={`color-sample ${userColor}`}></div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <select onChange={(e) => handleUserColorChange(e)}>
        <option value="">---- PickColor ----</option>
        <option value="red">Red</option>
        <option value="green">Green</option>
        <option value="yellow">Yellow</option>
        <option value="blue">Blue</option>
      </select>
      <button>Begin Game</button>
    </div>
  );
};

export default Room;
