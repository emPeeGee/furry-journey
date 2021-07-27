const debounce = (fn, ms) => {
  let timeout;

  return function () {
    const debouncedFn = () => fn.apply(this, arguments);

    clearTimeout(timeout);

    timeout = setTimeout(debouncedFn, ms);
  };
};

function onChange(event) {
  console.log(event.target.value);
}

onChange = debounce(onChange, 500);

document.querySelector('.search').addEventListener('keyup', onChange);
