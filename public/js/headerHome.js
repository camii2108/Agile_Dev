/* Navbar */
const menu = document.querySelector('.menu');
const menuBtn = document.querySelector('.menu-btn');

menuBtn.addEventListener('click', () => {
    menu.classList.toggle('menu-open');
});

const pag = document.querySelectorAll('.pag');
const prev = document.querySelector('.prev');
const next = document.querySelector('.next');
const img = document.querySelector('.slider-img');
const overlay = document.querySelector('.overlay');
const anim = document.querySelectorAll('.anim');

const r = document.querySelector(':root');
const rs = getComputedStyle(r);

let id = 0;

