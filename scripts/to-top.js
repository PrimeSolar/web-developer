/**
 * The "Navigate to page top" Button
 *
 * This script implements rendering of dynamically created reusable "Navigate to page top" buttons.
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

const toTopButton = document.body.appendChild(document.createElement("to-top"));
/**
 * The script includes detailed commentaries
 * to support stakeholders with varying levels of JS (JavaScript) knowledge,
 * to show intentional logic decisions,
 * and to improve maintainability.
 */
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

let scrollTimeout;

const toTopButtonBehaviorOnWindowScroll = () => {
  clearTimeout(scrollTimeout);

  if (window.pageYOffset > 450) {
    a.classList.add("active");
    toTopButton.classList.add("active");
  } else {
    a.classList.remove("active");
    scrollTimeout = setTimeout(() => {
      toTopButton.classList.remove("active");
    }, 35);
  }
};

toTopButtonBehaviorOnWindowResize();
window.addEventListener("resize", toTopButtonBehaviorOnWindowResize);
window.addEventListener("scroll", toTopButtonBehaviorOnWindowScroll);
