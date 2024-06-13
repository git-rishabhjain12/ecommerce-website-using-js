//Image Carousel functionality

document.addEventListener("DOMContentLoaded", function () {
  const slides = document.querySelectorAll(".slide");
  const prev = document.querySelector(".prev");
  const next = document.querySelector(".next");
  const images = document.querySelectorAll("img");

  let counter = 0;
  let size = images[0].clientWidth;

  function slideImage() {
    if (counter >= slides.length) {
      counter = slides.length - 1;
    } else if (counter < 0) {
      counter = 0;
    }

    slides.forEach((slide, index) => {
      slide.style.transform = `translateX(-${counter * 100}%)`;
      slide.style.left = `${index * 100}%`;
    });
  }

  // Update visibility of previous button
  if (counter === 0) {
    prev.style.display = "none";
  } else {
    prev.style.display = "block";
  }

  // Update visibility of next button
  if (counter >= slides.length - 1) {
    next.style.display = "none";
  } else {
    next.style.display = "block";
  }

  // Previous button functionality
  prev.addEventListener("click", () => {
    counter--;
    if (counter < slides.length - 1) {
      next.style.display = "block";
    }

    if (counter === 0) {
      prev.style.display = "none";
    }
    slideImage();
  });

  // Next button functionality
  next.addEventListener("click", () => {
    counter++;
    if (counter > 0) {
      prev.style.display = "block";
    }

    if (counter >= slides.length - 1) {
      next.style.display = "none";
    }

    slideImage();
  });

  slideImage();

  // Resizig the image size as per client's window size
  window.addEventListener("resize", function () {
    size = images[0].clientWidth;
    slideImage();
  });
});

//Fetch Products and their details
document.addEventListener("DOMContentLoaded", function () {
  let products = document.querySelector(".products");

  async function fetchProducts(url) {
    let data = await fetch(url);
    let response = await data.json();

    for (let i = 0; i < response.length; i++) {
      console.log(response[i].category);
    }

    products.innerHTML = "";

    let categoriesShown = new Set();

    response.forEach((product) => {
      if (!categoriesShown.has(product.category)) {
        categoriesShown.add(product.category);

        products.innerHTML += `
        <div class="product">
          <div class="card">
            <a href="#">
              <img src="${product.image}" alt="">
              <span>${product.category.toUpperCase()}</span>
            </a>
          </div>
        </div>        
        `;
      }
    });
  }

  fetchProducts("https://fakestoreapi.com/products/");
});
