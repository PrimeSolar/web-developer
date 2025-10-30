/*
 * The Library of Custom Reusable Web Components
 * This file is the library containing my collection of custom, reusable web components
 * that can be used across different parts of the project. These components go beyond what browsers provide,
 * allowing for expanded capabilities and functionality in the project.
 *
 * Copyright © Vladislav Kazantsev
 * All rights reserved.
 * This code is the intellectual property of Vladislav Kazantsev.
 * You are welcome to clone the related repository and use the code for exploratory purposes.
 * However, unauthorized reproduction, modification, or redistribution of this code (including cloning of related repository or altering it for activities beyond exploratory use) is strictly prohibited.
 * Code snippets may be shared only when the original author is explicitly credited and a direct link to the original source of the code is provided alongside the code snippet.
 * Sharing the link to the file is permitted, except when directed toward retrieval purposes.
 * Any form of interaction with this file is strictly prohibited when facilitated by the code, except when such interaction is for discussion or exchange purposes with others.
 * This copyright notice applies globally.
 * For inquiries about collaboration, usage outside exploratory purposes, or permissions, please contact: hypervisor7@pm.me
 */

// The Scroll to Top Button
class ToTop extends HTMLElement {
  connectedCallback() {
    if (window.innerWidth <= 600) {
      this.innerHTML += `
      <a href="#">
        <span class="badge arrow-up">⬆</span>
      </a>
      `;
    } else {
      this.innerHTML += `
      <a href="#">
        <img src="./assets/arrow-up.png" alt="Scroll to top" title="Scroll to top" aria-label="Scroll to top" class="badge arrow-up" />
      </a>
      `;
    }
  }
}
customElements.define("to-top", ToTop);

// The Years of Experience
let experiencesText = document.querySelector("#about .card-text");
experiencesText.innerHTML =
  new Date().getFullYear() - 2019 + experiencesText.innerHTML;

const toTop = document
  .querySelector("#about")
  .appendChild(document.createElement("to-top"))
  .querySelector("a");
window.addEventListener("scroll", () => {
  if (window.pageYOffset > 450) {
    toTop.classList.add("active");
  } else {
    toTop.classList.remove("active");
  }
});

// The Footer
const footerContainer = document.querySelector("#footerContainer");
const year = new Date().getFullYear();

function footerContainerF(footerContainer) {
  if (footerContainer != null) {
    // Define the footer content:
    footerContainer.innerHTML += `Copyright © ${year} Vladislav Kazantsev. <span class="nowrap">All Rights Reserved.</span>`;
  }
}
footerContainerF(footerContainer);

console.log("components.js is completed");
