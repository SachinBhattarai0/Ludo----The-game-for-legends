import React, { useEffect } from "react";
import Container from "./components/Container/Container";
import Dice from "./components/Dice/Dice";
import { useGameInfo } from "./context/GameInfoContext";
import SetTokens from "./utils/SetTokens";
import setHome from "./utils/setHome";

function App() {
  const { GameInfo } = useGameInfo();

  useEffect(setHome, []);
  // Set new tokenPositions whenever the token positions are changed
  useEffect(() => SetTokens(GameInfo.tokenInfo), [GameInfo.tokenInfo]);

  return (
    <>
      <Container />
      <Dice />
    </>
  );
}

export default App;
