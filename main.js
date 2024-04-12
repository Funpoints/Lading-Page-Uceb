$('#carousel-1').owlCarousel({
  loop:true,
  margin: 35,
  autoplay: false,
  autoplayTimeout: 4000,
  nav:true,
  responsive:{
      0:{
          items:1
      },
      600:{
          items:2
      },
      1000:{
          items:3
      }
  }
})

$('#carousel-2').owlCarousel({
  loop:true,
  margin: 10,
  autoplay: true,
  autoplayTimeout: 4000,
  nav:true,
  responsive:{
      0:{
        items:1
      },
      400:{
          items:1
      },
      600:{
          items:1
      },
      1000:{
          items:1
      }
  }
})

$('#carousel-3').owlCarousel({
  loop:true,
  margin: 10,
  autoplay: true,
  autoplayTimeout: 4000,
  nav:true,
  responsive:{
      0:{
        items:1
      },
      400:{
          items:1
      },
      600:{
          items:1
      },
      1000:{
          items:1
      }
  }
})

$('#carousel-4').owlCarousel({
  loop:true,
  margin: 10,
  autoplay: true,
  autoplayTimeout: 4000,
  nav:true,
  responsive:{
      0:{
        items:1
      },
      400:{
          items:1
      },
      600:{
          items:1
      },
      1000:{
          items:1
      }
  }
})

const toggleButton = document.getElementsByClassName('toggle-button')[0]
const navbarLinks = document.getElementsByClassName('navbar-links')[0]

toggleButton.addEventListener('click', () => {
  navbarLinks.classList.toggle('active')
})
