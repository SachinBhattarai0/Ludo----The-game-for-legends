import React from "react";
import { useParams } from "react-router-dom";
import "./Room.css";

const Room = () => {
  const { roomName } = useParams();

  return (
    <div className="room-container">
      <h3>Player List</h3>
      <table>
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
      </table>
      <button>Begin Game</button>
    </div>
  );
};

export default Room;
