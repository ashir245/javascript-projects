const slides = document.querySelectorAll(".slide");
slides.forEach((slide) => {
  slide.addEventListener("click", () => {
    removecurrentactives();
    slide.classList.add("active");
  });
});
function removecurrentactives() {
  slides.forEach((slide) => {
    slide.classList.remove("active");
  });
}
