let slideIndex = 0;
const slides = document.getElementsByClassName ("slide");
const toggleButton = document.getElementById("toggleButton");

showSlides();

function showSlides() {
  let i;
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }
  slides[slideIndex - 1].style.display = "block";
  setTimeout(showSlides, 2000); // Change image every 2 seconds
}

toggleButton.addEventListener("click", function() {
  const slideshowContainer = document.querySelector(".slideshow-container");
  if (slideshowContainer.style.display === "none") {
    slideshowContainer.style.display = "block";
  } else {
    slideshowContainer.style.display = "none";
  }
});