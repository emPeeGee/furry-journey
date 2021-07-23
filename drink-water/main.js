const smallCups = document.querySelectorAll('.cup-small');
const litres = document.querySelector('#litres');
const percentage = document.querySelector('#percentage');
const remained = document.querySelector('#remained');

updateBigCup();

smallCups.forEach((cup, index) => {
  cup.addEventListener('click', () => {
    highlightCup(index);
  });
});

function highlightCup(index) {
  const clickedCup = smallCups[index];
  const clickedCupNextSibling = clickedCup.nextElementSibling;

  if (
    (clickedCupNextSibling === null || clickedCupNextSibling === undefined) &&
    clickedCup.classList.contains('full')
  ) {
    index--;
  } else if (clickedCup.classList.contains('full') && !clickedCupNextSibling.classList.contains('full')) {
    index--;
  }

  smallCups.forEach((cup, cupIndex) => {
    if (cupIndex <= index) {
      cup.classList.add('full');
    } else {
      cup.classList.remove('full');
    }
  });

  updateBigCup();
}

function updateBigCup() {
  const fullCups = document.querySelectorAll('.cup-small.full').length;
  const totalCups = smallCups.length;

  if (fullCups <= 0) {
    percentage.style.visibility = 'hidden';
    percentage.style.height = '0';
  } else {
    percentage.style.visibility = 'visible';
    percentage.style.height = `${(fullCups / totalCups) * 330}px`;
    percentage.innerText = `${(fullCups / totalCups) * 100}%`;
  }

  if (fullCups === totalCups) {
    remained.style.visibility = 'hidden';
    remained.style.height = '0';
  } else {
    remained.style.visibility = 'visible';
    litres.innerText = `${totalCups - fullCups}`;
  }
}
