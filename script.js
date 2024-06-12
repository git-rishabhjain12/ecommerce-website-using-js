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

    console.log(counter);
    console.log(slides.length);

    slides.forEach((slide, index) => {
      slide.style.transform = `translateX(-${counter * 100}%)`;
      slide.style.left = `${index * 100}%`;
    });
  }

  if (counter === 0) {
    prev.style.display = "none";
  } else {
    prev.style.display = "block";
  }

  // // // Update visibility of next button
  if (counter >= slides.length - 1) {
    next.style.display = "none";
  } else {
    next.style.display = "block";
  }

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

  window.addEventListener("resize", function () {
    size = images[0].clientWidth;
    slideImage();
  });
});
