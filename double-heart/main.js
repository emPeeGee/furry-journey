const loveMe = document.querySelector('.love-me');
const times = document.querySelector('#times');

let lastClick;
let timesClick = 0;

loveMe.addEventListener('click', (event) => {
  if (lastClick === undefined) {
    lastClick = new Date();
    return;
  }

  if (Date.now() - lastClick.getTime() < 300) {
    createHeart(event);
  }

  lastClick = new Date();
});

function createHeart(event) {
  const heart = document.createElement('i');
  heart.classList.add('fas');
  heart.classList.add('fa-heart');

  const x = event.clientX;
  const y = event.clientY;

  const leftOffset = event.target.offsetLeft;
  const topOffset = event.target.offsetTop;

  console.log(x, y);
  console.log(leftOffset, topOffset);

  const xInside = x - leftOffset;
  const yInside = y - topOffset;

  heart.style.top = `${yInside}px`;
  heart.style.left = `${xInside}px`;

  loveMe.appendChild(heart);
  times.innerHTML = ++timesClick;

  setTimeout(() => {
    heart.remove();
  }, 1000);
}
