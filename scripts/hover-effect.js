/*
 * The Hover Effect Script for the Email and LinkedIn Badges
 *
 * This script implements hover effects to the email and LinkedIn badges, updating their images and scale on mouse events.
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

/** The hover effect functionality for the email and LinkedIn badges. */
const emailBadge = document.querySelector(".email-badge");
const emailLink = document.querySelector(".email-link");
if (emailLink) {
  emailLink.addEventListener("mouseenter", () => {
    if (emailBadge) {
      emailBadge.src = "./assets/envelope-blue.svg";
      emailBadge.style.transform = "scale(1.1)";
    }
  });
  emailLink.addEventListener("mouseleave", () => {
    if (emailBadge) {
      emailBadge.src = "./assets/envelope.svg";
      emailBadge.style.transform = "scale(1)";
    }
  });
}
/**
 * The script includes detailed comments
 * to support stakeholders with varying JS knowledge.
 */
const linkedinBadge = document.querySelector(".contact-badge.linkedin-badge");
const linkedinLink = document.querySelector(".linkedin-link");
if (linkedinLink) {
  linkedinLink.addEventListener("mouseenter", () => {
    if (linkedinBadge) {
      linkedinBadge.src = "./assets/linkedin-blue.svg";
      linkedinBadge.style.transform = "scale(1.05)";
    }
  });
  linkedinLink.addEventListener("mouseleave", () => {
    if (linkedinBadge) {
      linkedinBadge.src = "./assets/linkedin.svg";
      linkedinBadge.style.transform = "scale(1)";
    }
  });
}
