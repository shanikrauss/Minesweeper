function setRandomMines(board, mines) {
  const randMines = new Set();

  for (let i = 0; i < mines; i++) {
    let row = Math.floor(Math.random() * board.length);
    let col = Math.floor(Math.random() * board[0].length);

    while (randMines.has([row, col])) {
      row = Math.floor(Math.random() * board.length);
      col = Math.floor(Math.random() * board[0].length);
    }

    randMines.add([row, col]);
  }

  randMines.forEach(([row, col]) => (board[row][col].type = "*"));
}

function setBoardNumbers(board) {
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[0].length; j++) {
      if (board[i][j].type === "*") {
        continue;
      }
      let countMines = 0;

      if (j - 1 >= 0) {
        if (board[i][j - 1].type === "*") {
          countMines += 1;
        }
      }

      if (j + 1 < board[0].length) {
        if (board[i][j + 1].type === "*") {
          countMines += 1;
        }
      }

      if (i - 1 >= board.length) {
        if (board[i - 1][j].type === "*") {
          countMines += 1;
        }

        if (j - 1 >= 0) {
          if (board[i - 1][j - 1].type === "*") {
            countMines += 1;
          }
        }

        if (j + 1 < board[0].length) {
          if (board[i - 1][j + 1].type === "*") {
            countMines += 1;
          }
        }
      }

      if (i + 1 < board.length) {
        if (board[i + 1][j].type === "*") {
          countMines += 1;
        }

        if (j - 1 >= 0) {
          if (board[i + 1][j - 1].type === "*") {
            countMines += 1;
          }
        }

        if (j + 1 < board[0].length) {
          if (board[i + 1][j + 1].type === "*") {
            countMines += 1;
          }
        }
      }

      board[i][j].type = countMines;
    }
  }
}

function resetBoard() {
  return getBoard();
}

export function getBoard(rows, cols) {
  const board = [];
  for (let i = 0; i < rows; i++) {
    const row = [];
    for (let j = 0; j < cols; j++) {
      row.push({ type: 0, isOpen: false });
    }
    board.push(row);
  }

  setRandomMines(board, 1);
  setBoardNumbers(board);

  return board;
}
