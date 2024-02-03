const togglebtn = document.querySelector(".togggle_btn");
const togglebtnicon = document.querySelector(".togggle_btn i");
const dropdownmenu = document.querySelector(".dropdown_menu");

togglebtn.addEventListener("click", () => {
  dropdownmenu.classList.toggle("open");
  const isopen = dropdownmenu.classList.contains("open");
  togglebtnicon.classList = isopen ? `fa-solid fa-xmark` : `fa solid fa-bars`;
});
