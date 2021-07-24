const increaseButton = document.querySelector('#increase');
const decreaseButton = document.querySelector('#decrease');
const clearButton = document.querySelector('#clear');
const colorButton = document.querySelector('#color');
const sizeSpan = document.querySelector('#size');

const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

let size = 10;
let isPressed = false;
let color = 'black';
let x, y;

canvas.addEventListener('mousedown', (event) => {
  isPressed = true;

  x = event.offsetX;
  y = event.offsetY;
});

canvas.addEventListener('mouseup', (event) => {
  isPressed = false;

  x = undefined;
  y = undefined;
});

canvas.addEventListener('mousemove', (event) => {
  if (isPressed) {
    const x2 = event.offsetX;
    const y2 = event.offsetY;

    drawCircle(x2, y2);
    drawLine(x, y, x2, y2);
    x = x2;
    y = y2;
  }
});

function drawCircle(x, y) {
  ctx.beginPath();
  ctx.arc(x, y, size, 0, Math.PI * 2);
  ctx.fillStyle = color;
  ctx.fill();
}

function drawLine(x1, y1, x2, y2) {
  ctx.beginPath();
  ctx.moveTo(x1, y1);
  ctx.lineTo(x2, y2);
  ctx.strokeStyle = color;
  ctx.lineWidth = size * 2;
  ctx.stroke();
}

drawCircle(100, 100);
drawLine(300, 150, 370, 190);

decreaseButton.addEventListener('click', () => {
  size--;
  sizeSpan.innerText = size;
});

increaseButton.addEventListener('click', () => {
  size++;
  sizeSpan.innerText = size;
});

clearButton.addEventListener('click', () => {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
});

colorButton.addEventListener('change', (event) => {
  console.log(event);
  color = event.target.value;
});
