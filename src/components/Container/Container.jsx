import React from "react";
import InitialHomeContainer from "../InitialHomeContainer/InitialHomeContainer";
import FinalHomeContainer from "../FinalHomeContainer/FinalHomeContainer";
import Boxes from "../Boxes/Boxes";
import "./Container.css";

const Container = () => {
  return (
    <div className="container">
      <InitialHomeContainer color="red" />
      <InitialHomeContainer color="green" />
      <InitialHomeContainer color="blue" />
      <InitialHomeContainer color="yellow" />

      <FinalHomeContainer />

      <Boxes />
    </div>
  );
};

export default Container;
