// console.log("hello");
//
// var sphere = document.querySelector('a-sphere');
// sphere.getAttribute('position');
// sphere.addEventListener('click', function () {
//   sphere.setAttribute('color', 'red');
// });

const scene = document.querySelector('a-scene')
const sky = document.querySelector('a-sky')
const objectContainer = document.querySelector('#object-container')
const sphere = document.querySelector('a-sphere')
const turtle = document.querySelector(tbd)

function getRandomNumber(x, y) {
  return Math.floor(Math.random() * x + y)
}


const totalSteps = getRandomNumber(17, 10)
const totalRotations = getRandomNumber(17, 10)

function getRandomColor() {
  const letters = '0123456789abcdef'
  let randomColor = ''
  for (let i = 0; i < 6; i++) {
    randomColor += letters[Math.floor(Math.random() * 16)]
  }
  return randomColor
}
