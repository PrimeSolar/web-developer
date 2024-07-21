const menu = document.querySelector(".menu-links");
const badge = document.querySelector(".hamburger-icon");

function toggleMenu() {
  menu.classList.toggle("open");
  badge.classList.toggle("open");
}

window.onclick = function(event) {
  if (!event.target.matches(".menu-links") && !event.target.matches(".hamburger-icon") && !event.target.matches(".hamburger-icon span") && menu.classList.contains("open") === true) {
    menu.classList.toggle("open");
    badge.classList.toggle("open");
  }
}
