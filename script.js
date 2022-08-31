const allColors = document.getElementsByClassName('color');
const randomizerButton = document.getElementById('button-random-color');
const randomColor1 = document.querySelector('.random-color1');
const randomColor2 = document.querySelector('.random-color2');
const randomColor3 = document.querySelector('.random-color3');
const pixelBoard = document.getElementById('pixel-board');
const clearButton = document.getElementById('clear-board');
let storedColors = JSON.parse(localStorage.getItem('colorPalette'));
allColors[0].style.backgroundColor = 'black'

if (storedColors != null){
    randomColor1.style.backgroundColor = storedColors.color1;
    randomColor2.style.backgroundColor = storedColors.color2;
    randomColor3.style.backgroundColor = storedColors.color3;
}

randomizerButton.addEventListener('click', randomizeColors);
clearButton.addEventListener('click', clearBoard)
for(let index = 0; index < allColors.length; index += 1){
    allColors[index].addEventListener('click', changeSelected)
}

for (let index = 0; index <=4; index += 1){
    const pixelLine = document.createElement('div');
    pixelLine.className = 'pixelLine';
    pixelBoard.appendChild (pixelLine);
    for (let index2 = 0; index2 <=4; index2 += 1){
        const pixel = document.createElement('div');
        pixel.className = 'pixel';
        pixelLine.appendChild (pixel);
    }
}

const pixel = document.getElementsByClassName('pixel');
for(index =0; index < pixel.length; index += 1) {
    pixel[index].addEventListener('click', paintPixelWithSelected)
}
function randomRGB(){
    let randomRGBValue1 = Math.floor(Math.random() * 255);
    let randomRGBValue2 = Math.floor(Math.random() * 255);
    let randomRGBValue3 = Math.floor(Math.random() * 255);
    let RGBColor = 'rgb(' + randomRGBValue1 + ', ' + randomRGBValue2 + ', ' + randomRGBValue3 + ')';
    return RGBColor;
}

function randomizeColors() {
    randomColor1.style.backgroundColor = randomRGB();
    randomColor2.style.backgroundColor = randomRGB();
    randomColor3.style.backgroundColor = randomRGB();
    saveColors();
}

function saveColors(){
    let bg1 = randomColor1.style.backgroundColor;
    let bg2 = randomColor2.style.backgroundColor;
    let bg3 = randomColor3.style.backgroundColor;
    let colorsObj = {'color1': bg1,
        'color2': bg2,
        'color3': bg3}
    let savedBgColors = JSON.stringify(colorsObj);
    localStorage.setItem('colorPalette', savedBgColors)
}



function selectionRemover(){
    for (let index = 0; index < allColors.length; index += 1){
        let classLista = allColors[index].classList;
        for (let index2 =0; index2 < classLista.length; index2 += 1){
            if(classLista[index2] === 'selected'){
                allColors[index].classList.remove('selected');
            }
        }    
    }    
}

function changeSelected(event){
    selectionRemover();
    event.target.classList.add('selected')
}

function paintPixelWithSelected(event){
    const selected = document.getElementsByClassName('selected');
    let selectedColor = selected[0].style.backgroundColor;
    event.target.style.backgroundColor = selectedColor
}

function clearBoard(){
    for(let index = 0; index < pixel.length; index += 1){
    pixel[index].style.backgroundColor = 'white'
    }
}