import React, { useState } from "react";
import "./App.css";
import { MyContext } from "./MyContext";
import GameBoard from "./GameBoard";

function App() {
  const [gameOver, setGameOver] = useState(false);
  const [flagCount, setFlagCount] = useState(0);

  return (
    <div>
      <MyContext.Provider
        value={{ gameOver, setGameOver, flagCount, setFlagCount }}
      >
        <GameBoard />
      </MyContext.Provider>
    </div>
  );
}

export default App;
