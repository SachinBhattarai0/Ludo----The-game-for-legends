import React from "react";
import "./Token.css";

const Token = ({ color }) => {
  return <button disabled className={`token ${color}`}></button>;
};

export default Token;
