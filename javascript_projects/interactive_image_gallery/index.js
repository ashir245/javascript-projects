let images = document.querySelectorAll("img");
let wrapper = document.getElementById("wrapper");
let imgwrapper = document.getElementById("fullimg");
let close = document.querySelector("span");

let isImageOpen = false; // Flag to track if the image is currently open

images.forEach((img, index) => {
  img.addEventListener("click", () => {
    if (isImageOpen) {
      wrapper.style.display = "none"; // Close the image if it's already open
    } else {
      openmodel(`images/img${index}.jpg`);
    }
    isImageOpen = !isImageOpen; // Toggle the flag
  });
});

close.addEventListener("click", () => {
  wrapper.style.display = "none";
  isImageOpen = false; // Reset the flag when the close button is clicked
});

function openmodel(pic) {
  wrapper.style.display = "flex";
  imgwrapper.src = pic;
}
