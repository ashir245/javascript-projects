const display = document.querySelector("#display");
const stopbtn = document.querySelector("#stop");
const startbtn = document.querySelector("#start");
const resetbtn = document.querySelector("#reset");

let startime = 0;
let elapsed_time = 0;
let current_time = 0;
let interval_id = 0;
let paused = true;
let hours = 0;
let minutes = 0;
let seconds = 0;
let miliseconds = 0;

startbtn.addEventListener("click", () => {
  if (paused) {
    paused = false;
    startime = Date.now() - elapsed_time;
    interval_id = setInterval(updatetime, 75);
    toggleActiveButton(startbtn, stopbtn, resetbtn);
  }
});

stopbtn.addEventListener("click", () => {
  if (!paused) {
    paused = true;
    elapsed_time = Date.now() - startime;
    clearInterval(interval_id);
    toggleActiveButton(stopbtn, startbtn, resetbtn);
  }
});

resetbtn.addEventListener("click", () => {
  paused = true;
  clearInterval(interval_id);
  elapsed_time = 0;
  hours = 0;
  minutes = 0;
  seconds = 0;
  miliseconds = 0;
  display.innerHTML = `00:00:00  <small>00</small>`;

  toggleActiveButton(resetbtn, startbtn, stopbtn);
});

function toggleActiveButton(activeBtn, inactiveBtn, inactivestopbtn) {
  activeBtn.classList.add("active");
  inactiveBtn.classList.remove("active");
  inactivestopbtn.classList.remove("active");
}

function updatetime() {
  elapsed_time = Date.now() - startime;
  hours = Math.floor((elapsed_time / (1000 * 60 * 60)) % 60);
  minutes = Math.floor((elapsed_time / (1000 * 60)) % 60);
  seconds = Math.floor((elapsed_time / 1000) % 60);
  miliseconds = Math.floor((elapsed_time % 1000) / 10);

  hours = String(hours).padStart(2, "0");
  minutes = String(minutes).padStart(2, "0");
  seconds = String(seconds).padStart(2, "0");
  display.innerHTML = `${hours}:${minutes}:${seconds}<small>  ${miliseconds}</small>`;
}
