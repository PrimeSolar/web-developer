/**
 * The Dynamically Updated Number of Years of My Commercial Experience in IT (since 2019)
 *
 * This script calculates years from 2019 to the current date and renders the value dynamically,
 * ensuring accuracy without manual updates.
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

const yearsOfExperience = document.querySelectorAll(".years-of-experience");

/**
 * The script includes detailed commentaries
 * to support stakeholders with varying levels of JS (JavaScript) knowledge,
 * to show intentional logic decisions,
 * and to improve maintainability.
 */
if (yearsOfExperience) {
  for (let x of yearsOfExperience) {
    const years = new Date().getFullYear() - 2019;
    const abbr = document.createElement("abbr");
    abbr.title = "Information Technology";
    abbr.textContent = "IT";
    x.textContent = `${years} years of commercial experience in `;
    x.appendChild(abbr);
    x.append(` (since 2019)`);
  }
}
