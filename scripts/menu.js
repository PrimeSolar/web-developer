const menu = document.querySelector(".menu-links");
const badge = document.querySelector(".hamburger-badge");

function toggleMenu() {
  menu.classList.toggle("open");
  badge.classList.toggle("open");
}

window.onclick = function(event) {
  if (!event.target.matches(".menu-links") && !event.target.matches(".hamburger-badge") && !event.target.matches(".hamburger-badge span") && menu.classList.contains("open") === true) {
    menu.classList.toggle("open");
    badge.classList.toggle("open");
  }
}
