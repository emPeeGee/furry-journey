const counters = document.querySelectorAll('.counter');

counters.forEach((counter) => {
  counter.innerText = 0;

  const updateCounter = () => {
    target = +counter.getAttribute('data-target');
    const c = +counter.innerText;

    const increment = target / 100;

    if (c < target) {
      console.log('a');
      counter.innerText = `${Math.ceil(c + increment)}`;

      setTimeout(() => {
        updateCounter();
      }, 1);
    }
  };

  updateCounter();
});
