
const GRID_SIZE = 16;

const grid = document.querySelector('.grid');

createGrid();

function createGrid() {
  for (let y = 0; y < GRID_SIZE; y++) {
    const row = createRow();
    
    for (let x = 0; x < GRID_SIZE; x++) {
      row.appendChild(createSquare());
    }

    grid.appendChild(row);
  }
}

function createRow() {
  const row = document.createElement('div');
  row.classList.add('row');
  return row;
}

function createSquare() {
  const square = document.createElement('div');
  square.classList.add('square');
  square.addEventListener('mouseover', hoverSquare);
  return square;
}

function hoverSquare(e) {
  e.target.style.backgroundColor = 'black';
}
