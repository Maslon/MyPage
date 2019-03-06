import '../scss/main.scss';
import './localize.js';

const menuBtn = document.querySelector('.menu-button');
const menu = document.querySelector('.menu');
const menuBrand = document.querySelector('.menu-brand');
const menuNav = document.querySelector('.menu-nav');
const menuItems = document.querySelectorAll('.menu-item');
const langButtons = document.querySelector('.lang-buttons');
const gitIcons = document.querySelectorAll('.fa-github');

let opened = false;

menuBtn.addEventListener('click', menuToggle);
menu.addEventListener('click', menuToggle);

function menuToggle() {
	opened = !opened;
	if (opened) {
		menuBtn.classList.add('hide');
		menu.classList.add('show');
		menuBrand.classList.add('show');
		menuNav.classList.add('show');
		langButtons.classList.add('show');
		menuItems.forEach(item => item.classList.add('show'));
	} else {
		menuBtn.classList.remove('hide');
		menu.classList.remove('show');
		menuBrand.classList.remove('show');
		menuNav.classList.remove('show');
		langButtons.classList.remove('show');
		menuItems.forEach(item => item.classList.remove('show'));
	}
	console.log(opened);
}

gitIcons.forEach(icon => {
	icon.addEventListener('mouseenter', () => {
		icon.classList.remove('fa-github');
		icon.classList.add('fa-github-square');
	});
	icon.addEventListener('mouseleave', () => {
		icon.classList.remove('fa-github-square');
		icon.classList.add('fa-github');
	});
});
