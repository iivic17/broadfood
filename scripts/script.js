// Set current year
const yearEl = document.querySelector('.year');
const currentYear = new Date().getFullYear();
yearEl.textContent = currentYear;

// Make mobile navigation work
const htmlEl = document.querySelector('html');
const btnNavEl = document.querySelector('.btn-mobile-nav');
const headerEl = document.querySelector('.header');

btnNavEl.addEventListener('click', () => {
	headerEl.classList.toggle('nav-open');
	htmlEl.classList.toggle('overflow-hidden');
});
