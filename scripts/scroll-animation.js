/**
 * The Scroll Animation Handler
 *
 * Intersection Observer API provides performant viewport detection without scroll event listeners.
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

const sections = document.querySelectorAll(".scroll-animation");
/**
 * The script includes detailed commentaries
 * to support stakeholders with varying levels of JS (JavaScript) knowledge,
 * to show intentional logic decisions,
 * and to improve maintainability.
 */
/** Detects user's motion preference to ensure accessible UX before instantiating observers. */
const prefersReducedMotion = window.matchMedia(
  "(prefers-reduced-motion: reduce)"
).matches;

/** Feature detection to gracefully handle older browsers without IntersectionObserver support. */
const hasIntersectionObserverSupport =
  typeof IntersectionObserver !== "undefined";

if (sections && (prefersReducedMotion || !hasIntersectionObserverSupport)) {
  /** Applies "visible" class, making elements immediately visible to respect users' motion preferences
   * and/or to ensure compatibility with older browsers without the Intersection Observer.
   * The content remains fully accessible. */
  sections.forEach((section) => section.classList.add("visible"));
} else if (sections) {
  /** A threshold is activated when 10% of an element enters the viewport. */
  const observerConfig = {
    root: null,
    threshold: 0.1,
  };

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      /** Intersection Observer detects a viewport entry. */
      if (entry.isIntersecting) {
        /** Intersection Observer applies an animation class. */
        entry.target.classList.add("visible");
        /** Intersection Observer unobserves after applying the class to prevent memory leaks. */
        observer.unobserve(entry.target);
      }
    });
  }, observerConfig);

  sections.forEach((section) => {
    observer.observe(section);
  });
}
