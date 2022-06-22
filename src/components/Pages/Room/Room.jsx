import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { WEBSOCKET_URL } from "../../../api/url";
import "./Room.css";

const Room = () => {
  const { roomName } = useParams();

  useEffect(() => {
    const Socket = new WebSocket(`${WEBSOCKET_URL}/room/${roomName}/`);
    Socket.onmessage = ({ data }) => {
      data = JSON.parse(data);
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
          <tr>
            <td>Sachin</td>
            <td>
              <div className="color-sample red"></div>
            </td>
          </tr>
          <tr>
            <td>Suban</td>
            <td>
              <div className="color-sample green"></div>
            </td>
          </tr>
          <tr>
            <td>Niraj</td>
            <td>
              <div className="color-sample yellow"></div>
            </td>
          </tr>
          <tr>
            <td>Aditya</td>
            <td>
              <div className="color-sample blue"></div>
            </td>
          </tr>
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
