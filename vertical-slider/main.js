const sliderContainer = document.querySelector('.slider-container');
const rightSlide = document.querySelector('.right-slide');
const leftSlide = document.querySelector('.left-slide');
const upButton = document.querySelector('.up-button');
const downButton = document.querySelector('.down-button');
const slidesLenght = rightSlide.querySelectorAll('div').length;

let activeSlideIndex = 0;

leftSlide.style.top = `-${(slidesLenght - 1) * 100}vh`;

upButton.addEventListener('click', () => changeSlide('up'));
downButton.addEventListener('click', () => changeSlide('down'));

function changeSlide(direction) {
  const sliderHeight = sliderContainer.clientHeight;

  if (direction === 'up') {
    activeSlideIndex++;

    if (activeSlideIndex > slidesLenght - 1) {
      activeSlideIndex = 0;
    }
  } else if (direction === 'down') {
    activeSlideIndex--;

    if (activeSlideIndex < 0) {
      activeSlideIndex = slidesLenght - 1;
    }
  }

  rightSlide.style.transform = `translateY(-${activeSlideIndex * sliderHeight}px)`;
  leftSlide.style.transform = `translateY(${activeSlideIndex * sliderHeight}px)`;
}
