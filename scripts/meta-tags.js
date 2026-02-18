/*
 * Configuration Script
 *
 * This script sets up the essential HTML structure.
 * It dynamically inserts metadata, styles, and scripts to configure the document's head and body
 * elements for optimal SEO, accessibility, and user experience.
 *
 * Key Features:
 * - Sets the default language of the document to English (`lang = "en"`).
 * - Defines the default text direction as left-to-right (`dir = "ltr"`).
 * - Inserts viewport settings to ensure responsive design.
 * - Configures the document title for the web page.
 * - Includes metadata for author, copyright, description, and keywords to enhance SEO.
 * - Links to the style sheets for styling the interface.
 * - Adds a badge to enhance brand identity.
 * - Links to the scripts for functionality.
 * - Specifies the type attribute for all script elements for better compatibility.
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

/** Set the <html> element `lang` property. */
const html = document.querySelector("html");
html.lang = "en";

/** Set `dir="ltr"` for the <html> element. */
html.dir = "ltr";

/** Set `prefix="og: https://ogp.me/ns#"` for the <html> element. */
document.documentElement.setAttribute("prefix", "og: https://ogp.me/ns#");

/** Set <meta name="viewport" content="width=device-width, initial-scale=1" />. */
const metaViewport = document.createElement("meta");
metaViewport.name = "viewport";
metaViewport.content = "width=device-width, initial-scale=1";
document.querySelector("head").appendChild(metaViewport);

/** Set <title>Vladislav Kazantsev, Web Developer</title>. */
document.title = "Vladislav Kazantsev | Web Developer";

/** Set <meta name="author" content="Vladislav Kazantsev">. */
const metaAuthor = document.createElement("meta");
metaAuthor.name = "author";
metaAuthor.content = "Vladislav Kazantsev";
document.querySelector("head").appendChild(metaAuthor);

/** Set <meta name="copyright" content="© `Current Year` Vladislav Kazantsev">. */
const metaCopyright = document.createElement("meta");
metaCopyright.name = "copyright";
metaCopyright.content =
  "© " + new Date().getFullYear() + " Vladislav Kazantsev";
document.querySelector("head").appendChild(metaCopyright);

/** Insert <meta name="description" content="Explore my curated collection of projects, skills, and passions as a Web Developer. This website showcases my work, tells about my journey, and highlights opportunities for us to connect and collaborate!">. */
const metaDescription = document.createElement("meta");
metaDescription.name = "description";
metaDescription.content =
  "Explore my curated collection of projects, skills, and passions as a Web Developer. This website showcases my work, tells about my journey, and highlights opportunities for us to connect and collaborate!";
document.querySelector("head").appendChild(metaDescription);

/** Insert <meta name="keywords" content="cryptocurrency, prices, bitcoin price, ethereum price, market cap, crypto price alerts, cryptocurrency change percentage, top cryptocurrencies, crypto market, best cryptocurrency, crypto price comparison, altcoin prices">. */
const metaKeywords = document.createElement("meta");
metaKeywords.name = "keywords";
metaKeywords.content =
  "web developer portfolio, front end developer, backend developer, full stack developer, responsive web design, UX/UI design, web application development, JavaScript developer, HTML, CSS, eCommerce web development, mobile-friendly design, SEO for web development, best web development practices, website development services, custom web design, portfolio website design, graphic design for developers, certifications, programming languages, API integration";
document.querySelector("head").appendChild(metaKeywords);

/** Connect the custom CSS. */

/** Connect "style-min.css". */
const linkStyle = document.createElement("link");
linkStyle.rel = "stylesheet";
linkStyle.type = "text/css";
linkStyle.href = "styles/style-min.css";
document.querySelector("head").appendChild(linkStyle);

/** Connect "media-queries-min.css". */
const linkMediaQueries = document.createElement("link");
linkMediaQueries.rel = "stylesheet";
linkMediaQueries.type = "text/css";
linkMediaQueries.href = "styles/media-queries-min.css";
document.querySelector("head").appendChild(linkMediaQueries);

linkStyle.onload = function () {
  document.body.style.display = "flex";
};

/** Connect <link rel="icon" href="assets/logo.svg">. */
const linkImage = document.createElement("link");
linkImage.rel = "icon";
linkImage.href = "assets/logo.svg";
document.querySelector("head").appendChild(linkImage);

/** Connect "components-min.js". */
const componentsScript = document.createElement("script");
componentsScript.src = "scripts/components-min.js";
document.querySelector("body").appendChild(componentsScript);

/** Connect "menu-min.js". */
const menuScript = document.createElement("script");
menuScript.src = "scripts/menu-min.js";
document.querySelector("body").appendChild(menuScript);

/** Connect "hover-effect-min.js". */
const hoverEffectScript = document.createElement("script");
hoverEffectScript.src = "scripts/hover-effect-min.js";
document.querySelector("body").appendChild(hoverEffectScript);

/** Connect "scroll-animation-min.js". */
const scrollAnimationScript = document.createElement("script");
scrollAnimationScript.src = "scripts/scroll-animation-min.js";
document.querySelector("body").appendChild(scrollAnimationScript);

/** Connect "headings.js". */
const headingsScript = document.createElement("script");
headingsScript.src = "scripts/headings-min.js";
document.querySelector("body").appendChild(headingsScript);

/** Set `type="text/javascript"` for all <script> elements for better compatibility. */
document.body.onload = function () {
  for (let x of document.querySelectorAll("script")) {
    x.type = "text/javascript";
  }
};

// Insert <meta http-equiv="Pragma" content="no-cache">
// var metaPragma = document.createElement("meta");
// metaPragma.httpEquiv = "Pragma";
// metaPragma.content = "no-cache";
// document.querySelector("head").appendChild(metaPragma);
