import React from "react";
import NavBar from "./components/NavBar/NavBar";
import HomePage from "./components/Pages/HomePage";
import Game from "./components/Pages/Game/Game";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<NavBar />}>
          <Route index element={<HomePage />} />
        </Route>

        <Route path="/game/:gameId/" element={<Game />} />
      </Routes>
    </>
  );
}

export default App;
