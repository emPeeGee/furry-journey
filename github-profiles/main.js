const API_URL = 'https://api.github.com/users/';
const form = document.getElementById('form');
const search = document.getElementById('search');
const main = document.getElementById('main');

async function getUser(username) {
  try {
    const { data } = await axios(API_URL + username);

    createUserCard(data);
    getRepo(username);
  } catch (error) {
    if (error.response.status === 404) {
      createErrorCard('No user with this username');
    }

    console.log(error);
  }
}

async function getRepo(username) {
  try {
    const { data } = await axios(API_URL + username + '/repos?sort=created`');
    addReposToCard(data);
  } catch (error) {
    if (error.response.status === 404) {
      createErrorCard('Problem fetching repo');
    }

    console.log(error);
  }
}

function createUserCard(user) {
  const cardHTML = `
  <div class="card">
  <div>
    <img src="${user.avatar_url}" alt="${user.login}" class="avatar">
  </div>
  <div class="user-info">
    <h2>${user.login}</h2>
    <p>${user.bio}</p>
    <ul>
      <li>${user.followers} <strong>Followers</strong></li>
      <li>${user.following} <strong>Following</strong></li>
      <li>${user.public_repos} <strong>Repos</strong></li>
    </ul>
    <div id="repos"></div>
  </div>
</div>
  `;

  main.innerHTML = cardHTML;
}

function createErrorCard(message) {
  const cardHTML = `
  <div class="card">
    <h1>${message}</h1>
  </div>
  `;

  main.innerHTML = cardHTML;
}

function addReposToCard(repos) {
  const reposElement = document.getElementById('repos');

  repos.slice(0, 10).forEach((repo) => {
    const repoElement = document.createElement('a');
    repoElement.classList.add('repo');
    repoElement.href = repo.html_url;
    repoElement.target = '_black';
    repoElement.innerText = repo.name;

    reposElement.appendChild(repoElement);
  });
}

form.addEventListener('submit', (event) => {
  event.preventDefault();

  const user = search.value;

  if (user) {
    getUser(user);
    search.value = '';
  }
});
