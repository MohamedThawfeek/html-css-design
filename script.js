let icon = document.querySelector(".icon");
let Links = document.querySelector(".nav-links");
let container = document.querySelector(".container");

icon.addEventListener("click", () => {
  Links.classList.toggle("nav-show");
  container.classList.toggle("container-move");
});
