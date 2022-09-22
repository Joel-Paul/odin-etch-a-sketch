
const MAX_SIZE = 100;
const DEFAULT_SIZE = 16;

const grid = document.querySelector('.grid');

const sizeButton = document.querySelector('button');
sizeButton.addEventListener('click', changeSize);

createGrid(16);

function createGrid(size) {
  for (let y = 0; y < size; y++) {
    const row = createRow();
    
    for (let x = 0; x < size; x++) {
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

function changeSize() {
  let size = +prompt('Enter a new canvas size:', DEFAULT_SIZE);
  if (isNaN(size) || size < 1 || size > MAX_SIZE) {
    alert('Invalid size, defaulting to ' + DEFAULT_SIZE);
    size = DEFAULT_SIZE;
  }

  clearGrid();
  createGrid(size);
}

function clearGrid() {
  while (grid.firstChild) {
    grid.removeChild(grid.firstChild);
  }
}
