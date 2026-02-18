/*
 * Script
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

const projectCollection = document.querySelector(".project-collection");

fetch(
  "https://raw.githubusercontent.com/PrimeSolar/web-developer/refs/heads/main/index.html"
)
  .then((response) => response.text())
  .then((html) => {
    const doc = new DOMParser().parseFromString(html, "text/html");
    const projectCards = Array.from(doc.querySelectorAll(".project-card"));
    projectCards.forEach((project) => {
      const name = project
        .querySelector(".project-title")
        .innerHTML.replace(/<br\s*\/?>/gi, " ")
        .trim();
      const githubHref = project.querySelector(
        ".button-container > a:nth-of-type(1)"
      ).href;
      const projectHref = project.querySelector(
        ".button-container > a:nth-of-type(2)"
      ).href;
      const li = document.createElement("li");
      li.innerHTML = `${name}:
      <li><a href=${githubHref} rel="noopener noreferrer">GitHub</a></li>
      <li><a href=${projectHref} rel="noopener noreferrer">Live Demo</a></li>
      `;
      projectCollection.appendChild(li);
    });
  })
  .catch(console.error);

document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const targetId = this.getAttribute("href");
    const targetElement = document.querySelector(targetId);
    targetElement.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  });
});
