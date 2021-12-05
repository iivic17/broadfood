// Set current year
const yearEl = document.querySelector('.year');
const currentYear = new Date().getFullYear();
yearEl.textContent = currentYear;

// Make mobile navigation work
const htmlEl = document.querySelector('html');
const btnNavEl = document.querySelector('.btn-mobile-nav');
const headerEl = document.querySelector('.header');

btnNavEl.addEventListener('click', () => {
	toggleMobileNavigation();
});

const toggleMobileNavigation = () => {
	headerEl.classList.toggle('nav-open');
	htmlEl.classList.toggle('overflow-hidden');
};

// Smooth scrolling animation
const allLinks = document.querySelectorAll('a:link');

allLinks.forEach((el) => {
	el.addEventListener('click', (e) => {
		e.preventDefault();
		const href = el.getAttribute('href');

		if (href === '#') {
			window.scrollTo({
				top: 0,
				behavior: 'smooth',
			});
		} else if (href.startsWith('#')) {
			const sectionEl = document.querySelector(href);
			sectionEl.scrollIntoView({
				behavior: 'smooth',
			});
		}

		if (el.classList.contains('main-nav-link')) {
			toggleMobileNavigation();
		}
	});
});
