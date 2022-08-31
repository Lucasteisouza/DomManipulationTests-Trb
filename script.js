const randomizerButton = document.getElementById('button-random-color')
const randomColor1 = document.querySelector('.random-color1')
const randomColor2 = document.querySelector('.random-color2')
const randomColor3 = document.querySelector('.random-color3')

let storedColors = JSON.parse(localStorage.getItem('colorPalette'))
if (storedColors != null){
    randomColor1.style.backgroundColor = storedColors.color1;
    randomColor2.style.backgroundColor = storedColors.color2;
    randomColor3.style.backgroundColor = storedColors.color3;
}
randomizerButton.addEventListener('click', randomizeColors)

function randomRGB(){
    let randomRGBValue1 = Math.floor(Math.random() * 255)
    let randomRGBValue2 = Math.floor(Math.random() * 255)
    let randomRGBValue3 = Math.floor(Math.random() * 255)
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