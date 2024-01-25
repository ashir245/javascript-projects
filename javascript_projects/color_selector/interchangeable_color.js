const body = document.body;
const btns = document.querySelectorAll(".btn");

btns.forEach((btn) => {
  btn.addEventListener("click", () => {
    let value = btn.value;
    checkbg(value);
  });
});

function checkbg(color) {
  // Remove existing color classes from body
  body.classList.remove("purple", "blue", "red", "green", "yellow", "teal");

  switch (color) {
    case "purple":
      body.classList.add("purple");
      break;
    case "blue":
      body.classList.add("blue");
      break;
    case "red":
      body.classList.add("red");
      break;
    case "green":
      body.classList.add("green");
      break;
    case "yellow":
      body.classList.add("yellow");
      break;
    case "teal":
      body.classList.add("teal");
      break;
    default:
  }
}
