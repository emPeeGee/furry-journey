const boxes = document.querySelectorAll('.box');

checkBoxes();

window.addEventListener('scroll', () => {
  checkBoxes();
});

function checkBoxes() {
  const triggerBottom = window.innerHeight;
  console.log(triggerBottom);

  boxes.forEach((box) => {
    const boxTop = box.getBoundingClientRect().bottom;

    if (boxTop < triggerBottom) {
      box.classList.add('show');
    } else {
      box.classList.remove('show');
    }
  });
}
