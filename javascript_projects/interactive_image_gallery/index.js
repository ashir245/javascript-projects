let images = document.querySelectorAll("img");
let wrapper = document.getElementById("wrapper");

let imgwrapper = document.getElementById("fullimg");

let close = document.querySelector("span");

images.forEach((img, index) => {
  img.addEventListener("click", () => {
    openmodel(`images/img${index}.jpg`);
  });
});
close.addEventListener("click", () => {
  wrapper.style.display = "none";
});
function openmodel(pic) {
  wrapper.style.display = "flex";
  imgwrapper.src = pic;
}
