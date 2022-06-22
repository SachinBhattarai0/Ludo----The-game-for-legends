import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import createOrVerify from "../../../api/createOrVerify";
import "./HomePage.css";

const HomePage = () => {
  const navigate = useNavigate();

  const [value, setValue] = useState({ name: "", roomName: "", password: "" });
  const [error, setError] = useState("");

  const handleClick = async (e, mode) => {
    e.preventDefault();
    const { name, roomName, password } = value;
    let res = await createOrVerify(mode, roomName, password, name);
    res = await res.json();
    if (res.success) {
      navigate(`/room/${roomName}/`, { state: { userName: name } });
    }
    setError(res.message);
  };

  return (
    <div className="home-page">
      <h2>Enter Room Info</h2>
      <div className="error">{error}</div>
      <form action="">
        <input
          placeholder="Enter room name"
          value={value.roomName}
          onChange={({ target }) =>
            setValue({ ...value, roomName: target.value })
          }
        />
        <input
          type="password"
          placeholder="Enter room password"
          value={value.password}
          onChange={({ target }) =>
            setValue({ ...value, password: target.value })
          }
        />
        <input
          placeholder="Enter Your name"
          value={value.name}
          onChange={({ target }) => setValue({ ...value, name: target.value })}
        />
        <button onClick={(e) => handleClick(e, "join")}>JoinRoom</button>
        <button onClick={(e) => handleClick(e, "create")}>CreateRoom</button>
      </form>
    </div>
  );
};

export default HomePage;
