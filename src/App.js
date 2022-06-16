import React, { useEffect } from "react";
import Container from "./components/Container/Container";
import Dice from "./components/Dice/Dice";
import setHome from "./utils/setHome";

function App() {
  useEffect(setHome, []);

  return (
    <>
      <Container />
      <Dice />
    </>
  );
}

export default App;
