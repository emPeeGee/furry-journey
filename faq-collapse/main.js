const faqToggles = document.querySelectorAll('.faq-toggle');

faqToggles.forEach((faqToggle) => {
  faqToggle.addEventListener('click', () => {
    faqToggle.parentNode.classList.toggle('active');
  });
});
