
const MAX_SIZE = 100;
const DEFAULT_SIZE = 16;
const BACKGROUND_COLOR = 'white';
const DARKEN_AMOUNT = 25;

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
  square.style.backgroundColor = BACKGROUND_COLOR;
  square.addEventListener('mouseover', hoverSquare);
  square.addEventListener('mousedown', hoverSquare);
  return square;
}

function hoverSquare(e) {
  if (e.buttons > 0) {
    const color = e.target.style.backgroundColor;
    if (color === BACKGROUND_COLOR) {
      e.target.style.backgroundColor = getRandomColor();
    } else {
      e.target.style.backgroundColor = darkenColor(color);
    }
  }
}

function getRandomColor() {
  return '#' + Math.floor(Math.random()*16777215).toString(16);
}

// color is given as "rgb(red, green, blue)".
function darkenColor(rgbString) {
  let rgbArray = rgbStringToArray(rgbString);
  
  for (let i = 0; i < rgbArray.length; i++) {
    rgbArray[i] -= DARKEN_AMOUNT;
  }

  return rgbArrayToString(rgbArray);
}

function rgbStringToArray(rgbString) {
  let rgbArray = [];
  rgbString = rgbString.slice(4, rgbString.length - 1).split(", ");
  rgbString.forEach(color => {
    rgbArray.push(+color);
  });
  return rgbArray;
}

function rgbArrayToString(rgbArray) {
  return `rgb(${rgbArray})`;
}

function changeSize() {
  let size = +prompt('Enter a new canvas size (max 100):', DEFAULT_SIZE);
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
