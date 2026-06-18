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

/** The years of experience. */
let experiencesText = document.querySelector(".about .card-text");
/**
 * The script includes detailed comments
 * to support stakeholders with varying JS knowledge.
 */
if (experiencesText) {
  experiencesText.textContent =
    new Date().getFullYear() - 2019 + experiencesText.textContent;
}

/** The dynamically created tooltips with project descriptions. */
const projectImages = document.querySelectorAll(".project-image");
for (const projectImage of projectImages) {
  const projectCard = projectImage.closest(".project-card");
  projectCard.setAttribute("data-tooltip", projectImage.alt);
  const description = document.createElement("div");
  description.classList.add("project-description");
  const p = document.createElement("p");
  p.textContent = "> Open Description";
  description.appendChild(p);
  projectCard.appendChild(description);
  /** The logic for opening and closing a tooltip with a description for each project. */
  description.addEventListener("click", function () {
    if (!projectCard.classList.contains("project-description-enabled")) {
      for (let x of document.querySelectorAll(".project-card")) {
        if (x.classList.contains("project-description-enabled")) {
          x.classList.toggle("project-description-enabled");
          x.querySelector(".project-description p").textContent =
            "> Open Description";
        }
      }
      projectCard.classList.toggle("project-description-enabled");
      p.textContent = "> Close Description";
    } else {
      projectCard.classList.toggle("project-description-enabled");
      p.textContent = "> Open Description";
    }
  });
}

/** The "Navigate to page top" button. */
const toTopButton = document.body.appendChild(document.createElement("to-top"));
const a = document.createElement("a");
a.areaLabel = "Navigate to page top";
a.rel = "noopener noreferrer";
toTopButton.appendChild(a);
toTopButton.addEventListener("click", (event) => {
  event.preventDefault();
  window.scrollTo({ top: 0, behavior: "smooth" });
});

const toTopButtonBehaviorOnWindowResize = () => {
  a.replaceChildren();

  const isMobile = window.innerWidth <= 600;
  const isResumePage = new URL(window.location).pathname.includes("resume");

  if (isMobile) {
    const span = document.createElement("span");
    span.append(document.createTextNode("⬆"));
    span.classList.add("badge", "arrow-up");
    a.appendChild(span);
  } else {
    const img = document.createElement("img");
    img.src = isResumePage
      ? "../assets/arrow-up-circle-blue.svg"
      : "./assets/arrow-up-circle-white.svg";
    img.title = "Navigate to page top";
    img.alt = "Navigate to page top";
    img.classList.add("badge", "arrow-up");
    a.appendChild(img);
  }
};

const toTopButtonBehaviorOnWindowScroll = () => {
  if (window.pageYOffset > 450) {
    a.classList.add("active");
  } else {
    a.classList.remove("active");
  }
};

toTopButtonBehaviorOnWindowResize();
window.addEventListener("resize", toTopButtonBehaviorOnWindowResize);
window.addEventListener("scroll", toTopButtonBehaviorOnWindowScroll);

/** The footer. */
const FooterContainer = document.querySelector(".FooterContainer");
const year = new Date().getFullYear();

function footerContainerF(FooterContainer) {
  if (FooterContainer) {
    /** Define the footer content. */
    FooterContainer.innerHTML += `Copyright © ${year} Vladislav Kazantsev. <span class="nowrap">All Rights Reserved.</span>`;
  }
}
footerContainerF(FooterContainer);

console.log("components.js is completed");
