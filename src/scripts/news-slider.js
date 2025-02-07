document.addEventListener("DOMContentLoaded", function () {
  const track = document.getElementById("sliderTrack");
  const slides = Array.from(document.querySelectorAll(".slider__item"));
  const prevButton = document.getElementById("prevSlide");
  const nextButton = document.getElementById("nextSlide");
  let index = 0;
  let slideWidth = slides[0].offsetWidth;
  let autoSlideInterval;

  function updateSlideWidth() {
    slideWidth = slides[0].offsetWidth;
  }

  function moveSlide() {
    track.style.transition = "transform 1.5s ease-in-out";
    track.style.transform = `translateX(-${index * slideWidth}px)`;
  }

  function nextSlide() {
    index = (index + 1) % slides.length;
    moveSlide();
  }

  function prevSlide() {
    index = (index - 1 + slides.length) % slides.length;
    moveSlide();
  }

  function startAutoSlide() {
    autoSlideInterval = setInterval(nextSlide, 4000);
  }

  function stopAutoSlide() {
    clearInterval(autoSlideInterval);
  }

  nextButton.addEventListener("click", function () {
    stopAutoSlide();
    nextSlide();
    startAutoSlide();
  });

  prevButton.addEventListener("click", function () {
    stopAutoSlide();
    prevSlide();
    startAutoSlide();
  });

  window.addEventListener("resize", updateSlideWidth);
  track.addEventListener("mouseenter", stopAutoSlide);
  track.addEventListener("mouseleave", startAutoSlide);

  updateSlideWidth();
  startAutoSlide();

  // Забезпечення доступності кнопок поверх слайдів
  prevButton.style.position = "absolute";
  prevButton.style.zIndex = "10";
  nextButton.style.position = "absolute";
  nextButton.style.zIndex = "10";
});
