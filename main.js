
// carrossel
const swiper = new Swiper(".mySwiper", {
  direction: 'vertical',
  loop: true,
  effect: 'cards',
  grabCursor: true,

  cardEffect: {
      slideShadows: false,
      cardShadows: false,
      rotate: false,
      grabCursor: true,
  },

  autoplay: {
      delay: 5000,
  },
});
// fim carrossel



const toggleButton = document.getElementsByClassName('toggle-button')[0]
const navbarLinks = document.getElementsByClassName('navbar-links')[0]

toggleButton.addEventListener('click', () => {
  navbarLinks.classList.toggle('active')
})




