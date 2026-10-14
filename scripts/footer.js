/**
 * The Footer
 *
 * This script implements rendering of dynamically created reusable footer content.
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

const footerContainer = document.querySelector(".footerContainer");
const year = new Date().getFullYear();

/**
 * The script includes detailed commentaries
 * to support stakeholders with varying levels of JS (JavaScript) knowledge,
 * to show intentional logic decisions,
 * and to improve maintainability.
 */
function footerContainerF(footerContainer) {
  if (footerContainer) {
    /** Define the footer content. */
    footerContainer.innerHTML += `Copyright © ${year} Vladislav Kazantsev. <span class="nowrap">All rights reserved.</span>`;
  }
}
footerContainerF(footerContainer);
