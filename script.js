document.addEventListener("DOMContentLoaded", function () {


  // Code for Top offerSlider

  const track = document.querySelector(".track");

  // Duplicate the content
  const trackContent = track.innerHTML;
  track.innerHTML += trackContent;

  // Track width calculation
  const trackWidth = track.scrollWidth / 2;
  let startPosition = 0;

  function animateMarquee() {
    startPosition -= 1;
    if (Math.abs(startPosition) >= trackWidth) {
      startPosition = 0;
    }
    track.style.transform = `translateX(${startPosition}px)`;
    requestAnimationFrame(animateMarquee);
  }

  // Start the animation
  animateMarquee();

// --------------------------------------------------------------------


});
