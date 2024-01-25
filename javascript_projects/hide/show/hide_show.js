document.addEventListener("DOMContentLoaded", function () {
  const input = document.getElementById("input");
  const icon = document.getElementById("icon");

  icon.addEventListener("click", () => {
    const currentType = input.getAttribute("type");

    if (currentType === "password") {
      input.setAttribute("type", "text");
      icon.classList.remove("fa-eye");
      icon.classList.add("fa-eye-slash");
    } else {
      input.setAttribute("type", "password");
      icon.classList.remove("fa-eye-slash");
      icon.classList.add("fa-eye");
    }
  });
});
