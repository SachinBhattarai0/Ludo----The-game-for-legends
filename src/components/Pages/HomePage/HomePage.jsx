import React from "react";
import "./HomePage.css";

const HomePage = () => {
  return (
    <div className="home-page">
      <h2>Enter Room Info</h2>
      <form action="">
        <input placeholder="Enter room name" />
        <input placeholder="Enter Your name" />
        <button>JoinRoom</button>
        <button>CreateRoom</button>
      </form>
    </div>
  );
};

export default HomePage;
