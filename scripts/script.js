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

		if (headerEl.classList.contains('nav-open')) {
			toggleMobileNavigation();
		}
	});
});

// Sticky navigation

const sectionHeroEl = document.querySelector('.section-hero');

const obs = new IntersectionObserver(
	(entries) => {
		const ent = entries[0];

		if (!ent.isIntersecting) {
			headerEl.classList.add('sticky');
		} else {
			headerEl.classList.remove('sticky');
		}
	},
	{
		root: null,
		threshold: 0,
		rootMargin: '-80px',
	}
);
obs.observe(sectionHeroEl);
