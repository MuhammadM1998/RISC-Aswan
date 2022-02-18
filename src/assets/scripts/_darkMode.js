const themeToggle = document.querySelector('#toggle');

const handleThemeToggle = function () {
	const theme = themeToggle.checked ? 'light' : 'dark';
	const htmlElement = document.documentElement;

	if (theme === 'light') {
		htmlElement.classList.remove('dark');
	} else if (theme === 'dark') {
		htmlElement.classList.add('dark');
	}
};
themeToggle.addEventListener('click', handleThemeToggle);
window.addEventListener('DOMContentLoaded', handleThemeToggle);
