const hamburgerIconEl = document.querySelector('.hamburger-icon');
const menu = document.querySelector(".menu");


hamburgerIconEl.addEventListener('click', function() {
    menu.classList.toggle('show')
})
