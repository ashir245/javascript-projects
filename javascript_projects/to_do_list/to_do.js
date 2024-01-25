let form = document.querySelector("form");
let input = document.querySelector("input");
let todos = document.querySelector(".todos");

function getTodo(value) {
  let todo = document.createElement("div");

  // Create a span for the text
  let textEl = document.createElement("span");
  textEl.innerHTML = value;
  textEl.classList.add("textEl");

  todo.appendChild(textEl);

  // Create a delete button
  let deleteEl = document.createElement("button");
  deleteEl.innerHTML = "&times";
  deleteEl.classList.add("delete");
  deleteEl.addEventListener("click", (e) => {
    todo.remove();
  });
  todo.appendChild(deleteEl);

  // Create an edit button
  let editEl = document.createElement("button");
  editEl.innerHTML = `<img src="edit.png" />`;
  editEl.classList.add("edit");
  editEl.addEventListener("click", (e) => {
    let newText = prompt("Edit the todo:", textEl.innerHTML);
    if (!newText.trim()) return;
    textEl.innerHTML = newText;
  });
  todo.appendChild(editEl);

  todo.classList.add("todo");
  return todo;
}

form.addEventListener("submit", (e) => {
  e.preventDefault();
  let value = input.value.trim();
  if (!value.trim()) return;
  todos.appendChild(getTodo(value));
  input.value = "";
});
