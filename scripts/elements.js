// The Library of Custom Reusable Web Elements
// This file is the library containing my collection of custom, reusable web elements
// that can be used across different parts of the project. These elements go beyond what browsers provide,
// allowing for expanded capabilities and functionality in the project.

// Scroll to Top Button
class ToTop extends HTMLElement {
  connectedCallback() {
    if (window.innerWidth <= 600) {
      this.innerHTML += `
      <a href="#">
        <span class="badge arrow-up">⬆</span>
      </a>
      `
    } else {
      this.innerHTML += `
      <a href="#">
        <img src="./assets/arrow-up.png" alt="Scroll to top" title="Scroll to top" aria-label="Scroll to top" class="badge arrow-up" />
      </a>
      `
    }
  }
}
customElements.define("to-top", ToTop);

const toTop = document.querySelector("#about").appendChild(document.createElement("to-top")).querySelector("a");
window.addEventListener("scroll", () => {
  if (window.pageYOffset > 450) {
    toTop.classList.add("active");
  } else {
    toTop.classList.remove("active");
  }
})

// Footer
footerContainer = document.querySelector("#footerContainer");

function footerContainerF(footerContainer) {
  if (footerContainer != null) {
    // Define footer content:
    footerContainer.innerHTML += `
Copyright © 2024 Vladislav Kazantsev. <span class="nowrap">All Rights Reserved.</span>
      `
  }
}
footerContainerF(footerContainer);
