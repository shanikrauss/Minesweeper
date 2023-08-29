import React from "react";
import Board from "./Board";
import Header from "./Header";

function GameBoard(props) {
  const cells_ = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ];
  return (
    <div>
      <Header />
      <Board cells={cells_} />
    </div>
  );
}

export default GameBoard;
