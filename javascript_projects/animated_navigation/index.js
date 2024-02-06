const toogelbtn = document.getElementById("toggle");
const nav = document.getElementById("nav");
toogelbtn.addEventListener("click", () => {
  nav.classList.toggle("active");
});
