const notescontainer = document.querySelector(".notes-container");
const createBtn = document.querySelector(".btn");
let notes = document.querySelectorAll(".input-box");

function shownotes() {
  notescontainer.innerHTML = localStorage.getItem("notes");
}

shownotes();
function updateStorage() {
  localStorage.setItem("notes", notescontainer.innerHTML);
}

createBtn.addEventListener("click", () => {
  let inputbox = document.createElement("p");
  let img = document.createElement("img");
  inputbox.className = "input-box";
  inputbox.setAttribute("contenteditable", "true");
  img.src = "images/delete.png";
  notescontainer.appendChild(inputbox).appendChild(img);
});
notescontainer.addEventListener("click", (e) => {
  if (e.target.tagName == "IMG") {
    e.target.parentElement.remove();
    updateStorage();
  } else if ((e.target.tagName = "p")) {
    notes = document.querySelectorAll(".input-box");
    notes.forEach((note) => {
      note.onkeyup = function () {
        updateStorage();
      };
    });
  }
});
document.addEventListener("keydown", (e) => {
  if (event.key == "Enter") {
    document.execCommand("insertLineBreak");
    event.preventDefault();
  }
});
