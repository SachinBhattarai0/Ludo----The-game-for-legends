import React from "react";
import "./Token.css";

const Token = ({ color }) => {
  return <button className={`token ${color.toLowerCase()}`}></button>;
};

export default Token;
