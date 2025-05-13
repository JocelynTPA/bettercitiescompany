document.addEventListener("DOMContentLoaded", () => {
  const lenis = new Lenis({
    duration: 1.2,
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    smooth: true,
  });

  function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
  }

  requestAnimationFrame(raf);
});

let currentSlide = 0;
const slides = document.querySelectorAll("#carousel img");
const carousel = document.getElementById("carousel");

function goToSlide(slideIndex) {
  currentSlide = slideIndex;
  const offset = -slideIndex * 100;
  carousel.style.transform = `translateX(${offset}%)`;

  // update dots
  const dots = document.querySelectorAll("button");
  dots.forEach((dot, i) => {
    dot.classList.toggle("bg-gray-600", i === slideIndex);
    dot.classList.toggle("bg-gray-300", i !== slideIndex);
  });
}

// Optional: Auto-slide
setInterval(() => {
  currentSlide = (currentSlide + 1) % slides.length;
  goToSlide(currentSlide);
}, 5000);

// Init
document.addEventListener("DOMContentLoaded", () => goToSlide(0));
