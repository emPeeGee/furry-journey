const loadingText = document.querySelector('.loading-text');
const background = document.querySelector('.bg');

let loadingValue = 0;

let interval = setInterval(() => {
  blurring();
}, 30);

function blurring() {
  loadingValue++;

  if (loadingValue > 99) {
    clearInterval(interval);
  }

  loadingText.innerText = `${loadingValue}%`;
  loadingText.style.opacity = scale(loadingValue, 0, 100, 1, 0);
  background.style.filter = `blur(${scale(loadingValue, 0, 100, 30, 0)}px)`;
}

const scale = (num, in_min, in_max, out_min, out_max) => {
  return ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min;
};
