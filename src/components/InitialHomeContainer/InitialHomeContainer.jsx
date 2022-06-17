import React from "react";
import Token from "../Token/Token";
import "./InitialHomeContainer.css";

const HomeContainer = ({ color }) => {
  return (
    <div className={`initial-home-container ${color}`}>
      <div className="initial-home">
        <div className={`initial-token-container ${color}`}></div>
        <div className={`initial-token-container ${color}`}></div>
        <div className={`initial-token-container ${color}`}></div>
        <div className={`initial-token-container ${color}`}></div>
      </div>
    </div>
  );
};

export default HomeContainer;
