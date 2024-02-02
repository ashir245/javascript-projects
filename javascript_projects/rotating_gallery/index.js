const imagecontainer = document.querySelector(".image-container");
const prevbtn = document.querySelector("#prev");
const nextbtn = document.querySelector("#next");

console.log(imagecontainer);
let x = 0;

prevbtn.addEventListener("click", () => {
  x = x + 45;
  rotate();
});
nextbtn.addEventListener("click", () => {
  x = x - 45;
  rotate();
});
function rotate() {
  imagecontainer.style.transform = `perspective(1000px) rotateY(${x}deg)`;
}
