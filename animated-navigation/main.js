const toggleNav = document.querySelector('#toggle');
const nav = document.querySelector('#nav');

toggleNav.addEventListener('click', () => {
  nav.classList.toggle('active');
});
