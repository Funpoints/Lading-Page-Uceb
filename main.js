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
          items:1,
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

$('#carousel-5').owlCarousel({
  loop:true,
  margin: 10,
  autoplay: true,
  autoplayTimeout: 800,
  nav: false,
  dots: false,
  center: true,
  responsive:{
      0:{
        items:2
      },
      400:{
          items:3
      },
      600:{
          items:5
      },
      1000:{
          items:6
      }
  }
})

$('#carousel-6').owlCarousel({
  loop:true,
  margin: 1,
  autoplay: true,
  autoplayTimeout: 5000,
  nav: true,
  dots: true,
  responsive:{
      0:{
        items:1
      },
      400:{
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

$('#carousel-7').owlCarousel({
  loop:true,
  margin: 10,
  autoplay: true,
  autoplayTimeout: 800,
  nav: false,
  dots: false,
  center: true,
  responsive:{
      0:{
        items:2
      },
      400:{
          items:3
      },
      600:{
          items:5
      },
      1000:{
          items:6
      }
  }
})

$('#carousel-8').owlCarousel({
  loop:true,
  margin: 40,
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
          items:3
      }
  }
})

$('#carousel-9').owlCarousel({
  loop:true,
  margin: 40,
  autoplay: false,
  autoplayTimeout: 5000,
  nav: true,
  dots: true,
  responsive:{
      0:{
        items:1
      },
      600:{
          items:1
      },
      1000:{
          items:2
      }
  }
})



const toggleButton = document.getElementsByClassName('toggle-button')[0]
const navbarLinks = document.getElementsByClassName('navbar-links')[0]

toggleButton.addEventListener('click', () => {
  navbarLinks.classList.toggle('active')
})
