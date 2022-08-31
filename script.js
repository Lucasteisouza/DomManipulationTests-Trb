const randomizerButton = document.getElementById('button-random-color')
const randomColor1 = document.querySelector('.random-color1')
const randomColor2 = document.querySelector('.random-color2')
const randomColor3 = document.querySelector('.random-color3')

randomizerButton.addEventListener('click', randomizeColors)

function randomRGB(){
    let randomRGBValue1 = Math.floor(Math.random() * 255)
    let randomRGBValue2 = Math.floor(Math.random() * 255)
    let randomRGBValue3 = Math.floor(Math.random() * 255)
    let RGBColor = 'rgb(' + randomRGBValue1 + ', ' + randomRGBValue2 + ', ' + randomRGBValue3 + ')';
    console.log(RGBColor);
    return RGBColor;
}

function randomizeColors() {
    randomColor1.style.backgroundColor = randomRGB();
    randomColor2.style.backgroundColor = randomRGB();
    randomColor3.style.backgroundColor = randomRGB();
}
