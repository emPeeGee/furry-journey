const good = document.querySelector('#good');
const cheap = document.querySelector('#cheap');
const fast = document.querySelector('#fast');

const toggles = document.querySelectorAll('.toggle');

toggles.forEach((toggle) => {
  toggle.addEventListener('change', (event) => doTheTrick(event.target));
});

function doTheTrick(target) {
  if (good.checked && cheap.checked && fast.checked) {
    if (good === target) {
      fast.checked = false;
    } else if (cheap === target) {
      good.checked = false;
    } else if (fast === target) {
      cheap.checked = false;
    }
  }
}
