/*
 * Project Cards for the Resume
 *
 * Dynamically load and render project cards from index.html.
 * - Fetch and parse project data from index.html using DOMParser.
 * - Extract project data (title, GitHub link, instance link, description).
 * - Handle <br /> tags in titles by replacing with spaces for clean display.
 * - Generate project card elements with proper semantic HTML structure.
 * - Implement tooltip fallbacks for project information.
 * - Establish error handling for fetch.
 * This enables dynamic project portfolio rendering without duplicating HTML,
 * implementing reusability and improving maintainability.
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

const projectsCollection = document.querySelector(".projects-collection");

/**
 * The script includes detailed comments
 * to support stakeholders with varying JS knowledge.
 */
fetch("../index.html")
  .then((response) => {
    if (!response.ok) throw new Error("Failed to fetch index.html");
    return response.text();
  })
  .then((html) => {
    let i = 1;
    const doc = new DOMParser().parseFromString(html, "text/html");
    const projectCards = Array.from(doc.querySelectorAll(".project-card"));
    projectCards.forEach((project) => {
      const name =
        project
          .querySelector(".project-title")
          ?.innerHTML?.replace(/<br\s*\/?>/gi, " ")
          .trim() || `Project ${i}`;
      i++;
      const githubHref =
        project.querySelector(".project-github-link")?.href || "";
      const projectHref =
        project.querySelector(".project-instance-link")?.href || "";
      const description = project.querySelector("img")?.alt?.trim() || "";
      const div = document.createElement("div");
      div.classList.add("project-card");
      div.setAttribute(
        "data-tooltip",
        githubHref === "" && projectHref === "" && description === ""
          ? "Project information will be available soon."
          : description === ""
          ? "Project description will be available soon."
          : description
      );

      /** Create title. */
      const title = document.createElement("p");
      const strong = document.createElement("strong");
      strong.textContent = name;
      title.appendChild(strong);
      div.appendChild(title);

      /** Create links list. */
      const ul = document.createElement("ul");

      if (githubHref) {
        const liGithub = document.createElement("li");
        const linkGithub = document.createElement("a");
        linkGithub.href = githubHref;
        linkGithub.textContent = "GitHub";
        linkGithub.ariaLabel = `${name} GitGub`;
        linkGithub.rel = "noopener noreferrer";
        liGithub.appendChild(linkGithub);
        ul.appendChild(liGithub);
      }

      if (projectHref) {
        const liDemo = document.createElement("li");
        const linkDemo = document.createElement("a");
        linkDemo.href = projectHref;
        linkDemo.textContent = "Live Demo";
        linkDemo.ariaLabel = `${name} Live Demo`;
        linkDemo.rel = "noopener noreferrer";
        liDemo.appendChild(linkDemo);
        ul.appendChild(liDemo);
      }

      div.appendChild(ul);
      projectsCollection.appendChild(div);
    });
  })
  .catch((error) => console.error("Error loading projects:", error));
