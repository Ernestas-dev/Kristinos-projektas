const menuToggle = document.querySelector('.header--toggle')
const sectionHero = document.querySelector('.section--hero')

menuToggle.addEventListener('click', () => {
    menuToggle.classList.toggle('toggle__active')
    sectionHero.classList.toggle('toggle__active')
})