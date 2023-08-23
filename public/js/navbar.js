// mobile navbar js

const navBurger = document.querySelector('#burger');
const navMenu = document.querySelector('#navbarMenuHeroA');

navBurger.addEventListener('click', () => {
    navMenu.classList.toggle('is-active');
    
});