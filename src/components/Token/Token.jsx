import React from "react";
import "./Token.css";

const Token = ({ color, disable = true }) => {
  return (
    <button
      disabled={disable}
      className={`token ${color.toLowerCase()}`}
    ></button>
  );
};

export default Token;
