// The Library of Custom Reusable Web Elements
// This file is the library containing my collection of custom, reusable web elements
// that can be used across different parts of the project. These elements go beyond what browsers provide,
// allowing for expanded capabilities and functionality in the project.

// Scroll to Top Button
class scrollToTop extends HTMLElement {
  connectedCallback() {
    if (window.innerWidth <= 600) {
      this.innerHTML += `
      <a href="#" class="to-top">
        <span class="badge arrow-up">⬆</span>
      </a>
      `
    } else {
      this.innerHTML += `
      <a href="#" class="to-top">
        <img src="./assets/arrow.png" alt="Arrow Badge" class="badge arrow-up"/>
      </a>
      `
    }
  }
}
customElements.define("scroll-to-top-button", scrollToTop);
console.log(window.innerWidth);

const scrollToTopButton = document.createElement("scroll-to-top-button");
document.querySelector("#about").appendChild(scrollToTopButton);

const toTop = document.querySelector(".to-top");
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
