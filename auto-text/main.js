const textEl = document.getElementById('text');
const cursorEl = document.querySelector('#cursor');
const speedEl = document.getElementById('speed');

const text = 'We Love Programing';
let index = 1;
let speed = 300 / speedEl.value;

writeText();

function writeText() {
  textEl.innerHTML = text.slice(0, index);

  index++;

  if (text.length < index) {
    index = 1;
  }

  setTimeout(writeText, speed);
}

speedEl.addEventListener('change', (event) => {
  speed = 300 / event.target.value;
  cursorEl.style.animation = `cursor ${speed * 2}ms linear infinite`;
});
