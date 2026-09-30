/**
 * Skill Collection for the Resume
 *
 * Dynamically fetch skill data from the main page (index.html)
 * and append it to the "Skills" section of the resume. The script allows to:
 * ✓ Fetch and parse skill data from index.html using DOMParser.
 * ✓ Extract skill data.
 * ✓ Append skills to the collection element within resume.
 * ✓ Establish error handling for fetch.
 * This enables dynamic skill collection rendering without duplicating HTML,
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

const skillCollection = document.querySelector(".skill-collection");

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
    const doc = new DOMParser().parseFromString(html, "text/html");
    const skills = doc.querySelector(".skills .details-container");
    skillCollection.append(skills);
  })
  .catch((error) => console.error("Error loading skills:", error));
