import React, { useEffect, useState } from "react";
import { useParams, useLocation } from "react-router-dom";
import { WEBSOCKET_URL } from "../../../api/url";
import "./Room.css";

const Room = () => {
  const { roomName } = useParams();
  const location = useLocation();

  const [usersOnRoom, setUsersOnRoom] = useState({});

  useEffect(() => {
    const Socket = new WebSocket(
      `${WEBSOCKET_URL}/room/${roomName}/${location.state.userName}/`
    );
    Socket.onmessage = ({ data }) => {
      data = JSON.parse(data);
      console.log(data);

      if (data["data-type"] === "user-joined")
        setUsersOnRoom({ ...data["user-list"] });
    };
  }, []);

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
      <select name="">
        <option value="">--- PickColor ---</option>
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
