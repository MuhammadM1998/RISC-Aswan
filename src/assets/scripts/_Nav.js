import 'vanilla-hamburger/tilt-burger.js';

const header = document.querySelector('#header');
const hamburgerBtn = document.querySelector('#hamburger');
const navMenu = document.querySelector('#nav-menu');
const navLinks = document.querySelectorAll('.nav-link');

const toggleNavMenu = function() {
    navMenu.classList.toggle('active');
};

const closeNavMenu = function() {
    hamburgerBtn.removeAttribute('pressed');
    navMenu.classList.remove('active');
};

const handleStickyHeader = function() {
    header.classList.remove('page-end');
    header.classList.toggle('sticky', window.scrollY > 0);

    const endOfPage = window.scrollY >= document.body.clientHeight - window.innerHeight;
    if (endOfPage) {
        header.classList.remove('sticky');
        header.classList.add('page-end');
        closeNavMenu();
    }
};

hamburgerBtn.addEventListener('click', toggleNavMenu);
navLinks.forEach(link => link.addEventListener('click', closeNavMenu));
window.addEventListener('scroll', handleStickyHeader);
window.addEventListener('DOMContentLoaded', handleStickyHeader);