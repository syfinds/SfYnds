const menuToggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.main-nav');
if (menuToggle && nav) {
  menuToggle.addEventListener('click', () => {
    const open = nav.classList.toggle('open');
    menuToggle.setAttribute('aria-expanded', String(open));
    menuToggle.setAttribute('aria-label', open ? 'Close navigation' : 'Open navigation');
  });
  nav.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
    nav.classList.remove('open');
    menuToggle.setAttribute('aria-expanded', 'false');
  }));
}

const filterButtons = document.querySelectorAll('.filter-btn');
const cards = [...document.querySelectorAll('.article-card')];
const searchInput = document.querySelector('#article-search');
const noResults = document.querySelector('#no-results');
let activeFilter = 'All';
function updateArticles() {
  const query = (searchInput?.value || '').trim().toLowerCase();
  let visible = 0;
  cards.forEach(card => {
    const categoryMatch = activeFilter === 'All' || card.dataset.category === activeFilter;
    const searchMatch = !query || (card.dataset.search + ' ' + card.innerText).toLowerCase().includes(query);
    card.hidden = !(categoryMatch && searchMatch);
    if (!card.hidden) visible++;
  });
  if (noResults) noResults.hidden = visible > 0;
}
filterButtons.forEach(button => button.addEventListener('click', () => {
  activeFilter = button.dataset.filter;
  filterButtons.forEach(item => item.classList.toggle('active', item === button));
  updateArticles();
}));
searchInput?.addEventListener('input', updateArticles);
document.querySelectorAll('[data-category-link]').forEach(link => link.addEventListener('click', () => {
  activeFilter = link.dataset.categoryLink;
  filterButtons.forEach(item => item.classList.toggle('active', item.dataset.filter === activeFilter));
  updateArticles();
}));
const year = document.querySelector('#year');
if (year) year.textContent = new Date().getFullYear();

const newsletterForm = document.querySelector('#newsletter-form');
newsletterForm?.addEventListener('submit', event => {
  event.preventDefault();
  const message = document.querySelector('#newsletter-message');
  if (message) message.textContent = 'Thanks for your interest! Signup is not active yet—connect a newsletter provider before launch.';
});
document.querySelectorAll('[data-placeholder-social]').forEach(link => link.addEventListener('click', event => {
  event.preventDefault();
  alert('Replace this placeholder with your real SfYnds social profile URL before publishing.');
}));
