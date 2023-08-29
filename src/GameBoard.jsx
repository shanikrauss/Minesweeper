import React, {useEffect, useState} from "react";
import Board from "./Board";
import Header from "./Header";
import {MyContext} from "./MyContext";

function GameBoard(props) {
  const [gameOver, setGameOver] = useState(false);
  const [flagCount, setFlagCount] = useState(3);
  const [cells, setCells] = useState([
    [{status: closed, type: "0"}, {status: closed, type: "0"}, {status: closed, type: "*"}],
    [{status: closed, type: "*"}, {status: closed, type: "0"}, {status: closed, type: "0"}],
    [{status: closed, type: "0"}, {status: closed, type: "0"}, {status: closed, type: "0"}],
  ])

  useEffect(() => {
    gameOver && (setFlagCount(3) && setCells([
      [{status: closed, type: "0"}, {status: closed, type: "0"}, {status: closed, type: "*"}],
      [{status: closed, type: "*"}, {status: closed, type: "0"}, {status: closed, type: "0"}],
      [{status: closed, type: "0"}, {status: closed, type: "0"}, {status: closed, type: "0"}],
    ]) && setGameOver(false));
  }, [gameOver]);

  return (
      <div>
        <MyContext.Provider value={{gameOver, setGameOver, flagCount, setFlagCount}}>
          <Header/>
          <Board cells={cells} setCells={setCells}/>
        </MyContext.Provider>
      </div>
  );
}

export default GameBoard;
