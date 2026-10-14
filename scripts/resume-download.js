/**
 * Script for Downloading the Resume as PDF
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

/** The button for downloading the resume as PDF. */
const downloadResumeButton = document.querySelector(".download-resume");

/**
 * The script includes detailed commentaries
 * to support stakeholders with varying levels of JS (JavaScript) knowledge,
 * to show intentional logic decisions,
 * and to improve maintainability.
 */
if (downloadResumeButton) {
  downloadResumeButton.addEventListener("click", function () {
    window.print();
  });
}

// document
//   .querySelector(".download-resume")
//   .addEventListener("click", function () {
//     const element = document.body;
//     const style = document.createElement("style");
//     style.innerHTML = `
// :root {
// --project-column: calc(50% - var(--project-collection-gap) / 2);
// }

// * {
// background-color: #ffffff;
// }

// header *,
// .skills li {
// background: #ffffff !important;
// }

// .contact-info, nav {
// flex-direction: row !important;
// margin-top: 0 !important;
// margin-bottom: 0 !important;
// padding-top: 0 !important;
// padding-bottom: 0 !important;
// }

// .project-collection {
// grid-template-columns: var(--project-column) var(--project-column);
// }

// .education h3 {
// font-size: 1.1rem;
// }

// .education p {
// font-size: 0.9rem;
// }

// body {
// margin: 0;
// padding: 0;
// }

// header,
// .projects,
// .experience,
// .timeline-item,
// .timeline-item:nth-of-type(2),
// .timeline-item:nth-of-type(3),
// .education,
// .certifications,
// .languages,
// .professional-summary,
// p {
// display: block;
// page-break-inside: avoid !important;
// break-inside: avoid !important;
// }

// .experience {
// page-break-before: always;
// }

// .skill-group,
// .timeline-details ul li {
// page-break-inside: avoid !important;
// break-inside: avoid !important;
// }

// .skill-group ul {
// margin: 0 !important;
// padding: 0 !important;
// gap: 0 !important;
// }

// .skill-group li {
// font-size: 0.75rem;
// padding: 3px 7px;
// }

// .project-collection {
// gap: 1px;
// }

// [data-tooltip]::after {
// opacity: 0 !important;
// }

// button,
// to-top {
// display: none !important;
// }

// .pageBreak {
// page-break-before: always;
// }

// nav ul li a {
// color: #007bff;
// }

// .education p,
// .professional-summary p {
// max-width: fit-content;
// min-height: fit-content;
// }`;
//     document.head.appendChild(style);
//     const opt = {
//       margin: 10,
//       filename: "Vladislav Kazantsev.pdf",
//       image: { type: "png", quality: 1.0 } /** The highest quality. */,
//       html2canvas: {
//         scale: 2,
//       } /** The higher the scale, the higher the quality. */,
//       jsPDF: {
//         orientation: "portrait",
//         unit: "mm",
//         format: "a4",
//         compress: true /** Disable compression for quality. */,
//       },
//     };

//     html2pdf().set(opt).from(element).save();

//     setTimeout(() => {
//       style.remove();
//     }, 10);
//   });
