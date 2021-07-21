const jokeElement = document.getElementById('joke');
const jokeBtn = document.getElementById('jokeBtn');

generateJoke();

jokeBtn.addEventListener('click', () => {
  generateJoke();
});

async function generateJoke() {
  const requestConfig = {
    headers: {
      Accept: 'application/json',
    },
  };

  const response = await fetch('https://icanhazdadjoke.com', requestConfig);
  const data = await response.json();
  jokeElement.innerHTML = data.joke;
}
