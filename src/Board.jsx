import React from "react";
import "./Board.css";

function Board(props) {
  const board = props.cells.map((row) => {
    const newRow = row.map((cell) => <button>{cell}</button>);

    newRow.push(<br />);
    return newRow;
  });

  return <div>{board}</div>;
}

export default Board;
