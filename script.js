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
  const searchInput = document.querySelector("#searchInput");
  const searchIcon = document.querySelector("#searchIcon");
  const closeSearchIcon = document.querySelector("#closeSearchIcon");

  function showSearchInput() {
    if (
      searchInput.style.display === "none" ||
      searchInput.style.display === ""
    ) {
      searchInput.style.display = "flex"; // To show the element
    } else {
      searchInput.style.display = "none"; // To hide the element
    }
  }

  function hideSearchInput() {
    searchInput.style.display = "none"; // To hide the element
  }

  searchIcon.addEventListener("click", showSearchInput);
  closeSearchIcon.addEventListener("click", hideSearchInput);
});
