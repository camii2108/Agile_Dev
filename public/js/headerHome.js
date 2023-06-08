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

const images = [
    './img/img1.jpg',
    './img2.jpg',
    /* img3.jpg,
    img4.jpg,
    img5.jpg, */
];
const colors = [
    '#feb57b',
    '#ffa910',
    '#feb57b',
    '#ffa910',
    '#feb57b',
    
];

function retrigAnim() {
    for (let i = 0; i < anim.length; i++) {
        anim[i].style.animation = 'none';
        anim[i].offsetHeight;
        anim[i].style.animation = null;
        
    }
}
function slider(i) {
    retrigAnim();
    img.src = images[i];
    r.style.setProperty('--accent', colors[i]);
    for (let i = 0; i < pag.length; i++) {
        [i].classList.remove('active');
        
    }
    pag[i].classList.add('active');
}

for (let i = 0; i < pag.length; i++) {
    [i].addEventListener('click', ()=> {
        slider(i);
        id =i;
        stopAutoSlide()
    });
    
}