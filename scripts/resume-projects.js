/**
 * The Dynamically Created Project Tooltips and Cards for the Main Page and Resume
 *
 * Dynamically load project data from the main page (index.html)
 * and append it to the "Projects" section of the resume. The script allows to:
 * ✓ Fetch and parse project data from the main page for subsequent inclusion in the resume using DOMParser.
 * ✓ Extract project data (title, GitHub link, instance link, description).
 * ✓ Handle <br /> tags in titles by replacing with spaces for clean display.
 * ✓ Generate project card elements with proper semantic HTML structure.
 * ✓ Implement tooltip fallbacks for project information.
 * ✓ Establish error handling for fetch.
 * ✓ Create tooltips with project descriptions for the main page.
 * ✓ Apply the logic for opening and closing a tooltip with a description for each project on the main page.
 * This enables dynamic project portfolio rendering without duplicating HTML,
 * implementing reusability, ensuring single-source-of-truth, and improving maintainability.
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

/** The dynamically created tooltips with project descriptions for the main page. */

const projectImages = document.querySelectorAll(".project-image");
if (!window.location.href.includes("resume.html")) {
  for (const projectImage of projectImages) {
    const projectCard = projectImage.closest(".project-card");
    projectCard.setAttribute("data-tooltip", projectImage.alt);
    const description = document.createElement("div");
    description.classList.add("project-description");
    const p = document.createElement("p");
    p.textContent = "> Open Description";
    description?.appendChild(p);
    projectCard?.appendChild(description);
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
}

/** The dynamically created project cards for the resume. */
const projectCollection = document.querySelector(".project-collection");
if (window.location.href.includes("resume.html")) {
  /**
   * The script includes detailed commentaries
   * to support stakeholders with varying levels of JS (JavaScript) knowledge,
   * to show intentional logic decisions,
   * and to improve maintainability.
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
        const readmeHref =
          (project.querySelector(".project-github-link")?.href || "") +
          "blob/main/README.md";
        const div = document.createElement("div");
        div.classList.add("project-card");
        div.setAttribute(
          "data-tooltip",
          githubHref === "" &&
            projectHref === "" &&
            description === "" &&
            readmeHref === ""
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
          const liProject = document.createElement("li");
          const linkProject = document.createElement("a");
          linkProject.href = projectHref;
          linkProject.textContent = "Live Project";
          linkProject.ariaLabel = `${name} Live Project`;
          linkProject.rel = "noopener noreferrer";
          liProject.appendChild(linkProject);
          ul.appendChild(liProject);
        }

        if (readmeHref) {
          const liReadme = document.createElement("li");
          const linkReadme = document.createElement("a");
          linkReadme.href = readmeHref;
          linkReadme.textContent = "README";
          linkReadme.ariaLabel = `${name} README`;
          linkReadme.rel = "noopener noreferrer";
          liReadme.appendChild(linkReadme);
          ul.appendChild(liReadme);
        }

        div.appendChild(ul);
        projectCollection.appendChild(div);
      });
    })
    .catch((error) => console.error("Error loading project:", error));
}
