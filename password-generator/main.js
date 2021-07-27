const resultEl = document.querySelector('#result');
const lenghtEl = document.querySelector('#lenght');
const lowerEl = document.querySelector('#lowercase');
const upperEl = document.querySelector('#uppercase');
const numbersEl = document.querySelector('#numbers');
const symbolsEl = document.querySelector('#symbols');
const generateEl = document.querySelector('#generate');
const clipboardEl = document.querySelector('#clipboard');

function getRandomLower() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}

function getRandomUpper() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}

function getRandomNumber() {
  return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
}

function getRandomSymbols() {
  const symbols = '!@#$%&*(){}[]=<>?.,';

  return symbols[Math.floor(Math.random() * symbols.length)];
}

const randomFunc = {
  lower: getRandomLower,
  upper: getRandomUpper,
  number: getRandomNumber,
  symbol: getRandomSymbols,
};

generateEl.addEventListener('click', () => {
  const lenght = +lenghtEl.value;
  const hasLower = lowerEl.checked;
  const hasUpper = upperEl.checked;
  const hasNumber = numbersEl.checked;
  const hasSymbols = symbolsEl.checked;

  resultEl.innerHTML = generatePassword(hasLower, hasUpper, hasNumber, hasSymbols, lenght);
});

function generatePassword(lower, upper, number, symbol, length) {
  let generatedPassword = '';
  const typesCount = lower + upper + number + symbol;
  const typesArray = [{ lower }, { upper }, { number }, { symbol }].filter((item) => Object.values(item)[0]);

  if (typesCount === 0) {
    return '';
  }

  for (let i = 0; i < length; i += typesCount) {
    typesArray.forEach((type) => {
      const funcName = Object.keys(type)[0];
      generatedPassword += randomFunc[funcName]();
    });
  }

  const finalPassword = generatedPassword.slice(0, length);

  return finalPassword;
}

clipboardEl.addEventListener('click', () => {
  const textarea = document.createElement('textarea');
  const password = resultEl.innerText;

  if (!password) {
    return;
  }

  textarea.value = password;
  document.body.appendChild(textarea);
  textarea.select();
  document.execCommand('copy');
  textarea.remove();

  alert('Password coppied to clipboard');
});
