const toggleButton = document.getElementsByClassName('toggle-button')[0]
const navbarLinks = document.getElementsByClassName('navbar-links')[0]

toggleButton.addEventListener('click', () => {
  navbarLinks.classList.toggle('active')
})


var video = document.getElementById("myVideo");

    // Set playback speed to 1.5x
    video.playbackRate = 2.0;