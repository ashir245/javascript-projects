const Toggler = document.getElementById("switch");
const p = document.getElementById("p");
Toggler.addEventListener("click", () => {
  if (Toggler.checked == true) {
    document.body.style.background = "black";
    p.innerText = "Dark";
    p.style.color = "white";
  } else {
    document.body.style.background = "white";
    p.innerText = "white";
    p.style.color = "black";
  }
});
