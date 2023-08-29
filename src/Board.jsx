import React, {useContext} from "react";
import "./Board.css";
import Cell from "./Components/Cell";
import {MyContext} from "./MyContext";

function Board({cells, setCells}) {
  const [gameOver, setGameOver, flagCount, setFlagCount] = useContext(MyContext);
  const handleClick = ({cellOpen, cellValue, cellCoordinates}) => {
    if (cellOpen)
      return;

    if (cellValue === "*") {
      setGameOver(true)
    } else {
      const newCells = cells;
      newCells[cellCoordinates[0]][cellCoordinates[1]] = "$";
      setCells(newCells);
    }
  }

  const handleRightClick = ({cellCoordinates}) => {
  }

  const board = cells.map((row, i) => {
    const newRow = row.map((cell, j) =>
        <Cell
            cellOpen={cell.status}
            cellValue={cell.type}
            cellCoordinates={[i, j]}
            handleClick={handleClick}
            handleRightClick={handleRightClick}
        />);

    newRow.push(<br/>);
    return newRow;
  });

  return <div>{board}</div>;
}

export default Board;
