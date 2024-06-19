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

  // --------------------------------------------------------------------

  const slider = document.querySelector(".imageSlider");
  const slides = document.querySelectorAll(".slide");
  const prevButton = document.getElementById("prev");
  const nextButton = document.getElementById("next");
  let currentIndex = 0;
  const totalSlides = slides.length;

  function showSlide(index) {
    if (index >= totalSlides) {
      currentIndex = 0;
    } else if (index < 0) {
      currentIndex = totalSlides - 1;
    } else {
      currentIndex = index;
    }
    slider.style.transform = `translateX(${-currentIndex * 100}%)`;
  }

  nextButton.addEventListener("click", () => {
    showSlide(currentIndex + 1);
  });

  prevButton.addEventListener("click", () => {
    showSlide(currentIndex - 1);
  });

  setInterval(() => {
    showSlide(currentIndex + 1);
  }, 3000);

  // --------------------------------------------------------------------
  const categoriesContainer = document.querySelector("#categoriesContainer");

  categoriesContainer.innerHTML = "";

  let API = "https://fakestoreapi.com/products";

  (async () => {
    const response = await fetch(API);
    const data = await response.json();
    console.log(data);

    // Extract unique categories
    const uniqueCategories = [
      ...new Set(data.map((product) => product.category)),
    ];
    console.log(uniqueCategories);

    uniqueCategories.forEach((category) => {
      const categoryDiv = document.createElement("div");
      categoryDiv.classList.add("category");

      const productWithCategory = data.find(
        (product) => product.category === category
      );

      if (productWithCategory) {
        categoryDiv.innerHTML = `
               <a href="#"><img src="${productWithCategory.image}" alt=""></a>
               <p>${productWithCategory.category} <span><i class="fa-solid fa-arrow-right-long"></i></span></p>
       `;

        categoriesContainer.appendChild(categoryDiv);
      }
    });
  })();
});
