const allColors = document.getElementsByClassName('color');
const randomizerButton = document.getElementById('button-random-color');
const randomColor1 = document.querySelector('.random-color1');
const randomColor2 = document.querySelector('.random-color2');
const randomColor3 = document.querySelector('.random-color3');
const pixelBoard = document.getElementById('pixel-board');
const clearButton = document.getElementById('clear-board');
const VQVButton = document.getElementById('generate-board');
const sizeInput = document.getElementById('board-size');
const storedColors = JSON.parse(localStorage.getItem('colorPalette'));
const pixelColorsRestored = JSON.parse(localStorage.getItem('pixelBoard'));
const boardSizeRestored = localStorage.getItem('boardSize');

allColors[0].style.backgroundColor = 'black';
allColors[1].style.backgroundColor = 'blue';
allColors[2].style.backgroundColor = 'green';
allColors[3].style.backgroundColor = 'yellow';
if (storedColors != null) {
  randomColor1.style.backgroundColor = storedColors.color1;
  randomColor2.style.backgroundColor = storedColors.color2;
  randomColor3.style.backgroundColor = storedColors.color3;
}

if (boardSizeRestored != null) {
  const newSize = boardSizeRestored;
  for (let index = 0; index < newSize; index += 1) {
    const pixelLine = document.createElement('div');
    pixelLine.className = 'pixelLine';
    pixelBoard.appendChild(pixelLine);
    for (let index2 = 0; index2 < newSize; index2 += 1) {
      const pixel = document.createElement('div');
      pixel.className = 'pixel';
      pixelLine.appendChild(pixel);
    }
  }
} else {
  for (let index = 0; index <= 4; index += 1) {
    const pixelLine = document.createElement('div');
    pixelLine.className = 'pixelLine';
    pixelBoard.appendChild(pixelLine);
    for (let index2 = 0; index2 <= 4; index2 += 1) {
      const pixel = document.createElement('div');
      pixel.className = 'pixel';
      pixelLine.appendChild(pixel);
    }
  }
}

const pixel = document.getElementsByClassName('pixel');

if (pixelColorsRestored != null) {
  for (let index = 0; index < pixel.length; index += 1) {
    pixel[index].style.backgroundColor = pixelColorsRestored[index];
  }
}

function randomRGB() {
  const randomRGBValue1 = Math.floor(Math.random() * 255);
  const randomRGBValue2 = Math.floor(Math.random() * 255);
  const randomRGBValue3 = Math.floor(Math.random() * 255);
  const RGBColor = `rgb(${randomRGBValue1}, ${randomRGBValue2}, ${randomRGBValue3})`;
  return RGBColor;
}

function saveColors() {
  const bg1 = randomColor1.style.backgroundColor;
  const bg2 = randomColor2.style.backgroundColor;
  const bg3 = randomColor3.style.backgroundColor;
  const colorsObj = [bg1, bg2, bg3];
  const savedBgColors = JSON.stringify(colorsObj);
  localStorage.setItem('colorPalette', savedBgColors);
}

function randomizeColors() {
  randomColor1.style.backgroundColor = randomRGB();
  randomColor2.style.backgroundColor = randomRGB();
  randomColor3.style.backgroundColor = randomRGB();
  saveColors();
}
randomizerButton.addEventListener('click', randomizeColors);
function selectionRemover() {
  for (let index = 0; index < allColors.length; index += 1) {
    const classLista = allColors[index].classList;
    for (let index2 = 0; index2 < classLista.length; index2 += 1) {
      if (classLista[index2] === 'selected') {
        allColors[index].classList.remove('selected');
      }
    }
  }
}

function changeSelected(event) {
  selectionRemover();
  event.target.classList.add('selected');
}
for (let index = 0; index < allColors.length; index += 1) {
  allColors[index].addEventListener('click', changeSelected);
}

function paintPixelWithSelected(event) {
  const evento = event;
  const selected = document.getElementsByClassName('selected');
  const selectedColor = selected[0].style.backgroundColor;
  evento.target.style.backgroundColor = selectedColor;
}

function clearBoard() {
  for (let index = 0; index < pixel.length; index += 1) {
    pixel[index].style.backgroundColor = 'white';
  }
}
clearButton.addEventListener('click', clearBoard);

function storePixelsInLocal() {
  const pixelColorArr = [];
  for (let index = 0; index < pixel.length; index += 1) {
    const currentCollor = pixel[index].style.backgroundColor;
    pixelColorArr.push(currentCollor);
  }
  const pixelColorObj = JSON.stringify(pixelColorArr);
  localStorage.setItem('pixelBoard', pixelColorObj);
}

for (let index = 0; index < pixel.length; index += 1) {
  pixel[index].addEventListener('click', paintPixelWithSelected);
  pixel[index].addEventListener('click', storePixelsInLocal);
}

function newBoard() {
  if (sizeInput.value === '') {
    window.alert('Board inválido!');
  } else if (parseInt(sizeInput.value, 10) < 5) {
    pixelBoard.innerHTML = '';
    const newSize = 5;
    for (let index = 0; index < newSize; index += 1) {
      const pixelLine = document.createElement('div');
      pixelLine.className = 'pixelLine';
      pixelBoard.appendChild(pixelLine);
      for (let index2 = 0; index2 < newSize; index2 += 1) {
        const pixels = document.createElement('div');
        pixels.className = 'pixel';
        pixelLine.appendChild(pixels);
      }
    }
    const pixelLines = document.getElementsByClassName('pixelLine');
    localStorage.removeItem('pixelBoard');
    localStorage.setItem('boardSize', pixelLines.length);
  } else if (parseInt(sizeInput.value, 10) > 50) {
    pixelBoard.innerHTML = '';
    const newSize = 50;
    for (let index = 0; index < newSize; index += 1) {
      const pixelLine = document.createElement('div');
      pixelLine.className = 'pixelLine';
      pixelBoard.appendChild(pixelLine);
      for (let index2 = 0; index2 < newSize; index2 += 1) {
        const pixels = document.createElement('div');
        pixels.className = 'pixel';
        pixelLine.appendChild(pixels);
      }
    }
    const pixelLines = document.getElementsByClassName('pixelLine');
    localStorage.removeItem('pixelBoard');
    localStorage.setItem('boardSize', pixelLines.length);
  } else {
    pixelBoard.innerHTML = '';
    const newSize = parseInt(sizeInput.value, 10);
    for (let index = 0; index < newSize; index += 1) {
      const pixelLine = document.createElement('div');
      pixelLine.className = 'pixelLine';
      pixelBoard.appendChild(pixelLine);
      for (let index2 = 0; index2 < newSize; index2 += 1) {
        const pixels = document.createElement('div');
        pixels.className = 'pixel';
        pixelLine.appendChild(pixels);
      }
    }
    const pixelLines = document.getElementsByClassName('pixelLine');
    localStorage.removeItem('pixelBoard');
    localStorage.setItem('boardSize', pixelLines.length);
  }
}
VQVButton.addEventListener('click', newBoard);
