// Theme switcher with saved preference
const toggleButton = document.querySelector(".theme-toggle");

if (localStorage.getItem("theme")) {
  document.documentElement.setAttribute("data-theme", localStorage.getItem("theme"));
}

toggleButton.addEventListener("click", () => {
  let currentTheme = document.documentElement.getAttribute("data-theme");
  let targetTheme = currentTheme === "light" ? "dark" : "light";
  document.documentElement.setAttribute("data-theme", targetTheme);
  localStorage.setItem("theme", targetTheme);
});