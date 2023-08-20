const board = document.getElementById('board');
const cells = board.getElementsByTagName('td');
let currentPlayer = 'X';

for (const cell of cells) {
  cell.addEventListener('click', () => {
    if (!cell.textContent) {
      cell.textContent = currentPlayer;
      if (checkWin()) {
        alert(`  ${currentPlayer} wins! Play again`);
        resetBoard();
      } else if (checkDraw()) {
        alert("It's a draw!");
        resetBoard();
      } else {
        currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
      }
    }
  });
}

function checkWin() {
  const winningCombos = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8], // Rows
    [0, 3, 6], [1, 4, 7], [2, 5, 8], // Columns
    [0, 4, 8], [2, 4, 6]           // Diagonals
  ];

  for (const combo of winningCombos) {
    if (cells[combo[0]].textContent &&
        cells[combo[0]].textContent === cells[combo[1]].textContent &&
        cells[combo[1]].textContent === cells[combo[2]].textContent) {
      return true;
    }
  }
  return false;
}

function checkDraw() {
  for (const cell of cells) {
    if (!cell.textContent) {
      return false;
    }
  }
  return true;
}

function resetBoard() {
  for (const cell of cells) {
    cell.textContent = '';
  }
  currentPlayer = 'X';
}