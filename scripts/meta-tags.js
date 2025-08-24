// Set the <html> element `lang` property
const html = document.querySelector("html");
html.lang = "en";

// Set `dir="ltr"` for the <html> element
html.dir = "ltr";

// Set `prefix="og: https://ogp.me/ns#"` for the <html> element
document.documentElement.setAttribute("prefix", "og: https://ogp.me/ns#");

// Set <meta name="viewport" content="width=device-width, initial-scale=1" />
const metaViewport = document.createElement("meta");
metaViewport.name = "viewport";
metaViewport.content = "width=device-width, initial-scale=1";
document.querySelector("head").appendChild(metaViewport);

// Set <title>Vladislav Kazantsev, Web Developer</title>
document.title = "Vladislav Kazantsev | Web Developer";

// Set <meta name="author" content="Vladislav Kazantsev">
const metaAuthor = document.createElement("meta");
metaAuthor.name = "author";
metaAuthor.content = "Vladislav Kazantsev";
document.querySelector("head").appendChild(metaAuthor);

// Set <meta name="copyright" content="© `Current Year` Vladislav Kazantsev">
const metaCopyright = document.createElement("meta");
metaCopyright.name = "copyright";
metaCopyright.content =
  "© " + new Date().getFullYear() + " Vladislav Kazantsev";
document.querySelector("head").appendChild(metaCopyright);

// Connect the custom CSS

// Connect "style-min.css"
const linkStyle = document.createElement("link");
linkStyle.rel = "stylesheet";
linkStyle.type = "text/css";
linkStyle.href = "styles/style-min.css";
document.querySelector("head").appendChild(linkStyle);

// Connect "media-queries-min.css"
const linkMediaQueries = document.createElement("link");
linkMediaQueries.rel = "stylesheet";
linkMediaQueries.type = "text/css";
linkMediaQueries.href = "styles/media-queries-min.css";
document.querySelector("head").appendChild(linkMediaQueries);

linkStyle.onload = function () {
  document.body.style.display = "flex";
};

// Connect <link rel="icon" href="assets/logo.svg">
const linkImage = document.createElement("link");
linkImage.rel = "icon";
linkImage.href = "assets/logo.svg";
document.querySelector("head").appendChild(linkImage);

// Connect "components-min.js"
const componentsScript = document.createElement("script");
componentsScript.src = "scripts/components-min.js";
document.querySelector("body").appendChild(componentsScript);

// Connect "menu-min.js"
const menuScript = document.createElement("script");
menuScript.src = "scripts/menu-min.js";
document.querySelector("body").appendChild(menuScript);

// Connect "scroll-animation-min.js"
const scrollAnimationScript = document.createElement("script");
scrollAnimationScript.src = "scripts/scroll-animation-min.js";
document.querySelector("body").appendChild(scrollAnimationScript);

// Set `type="text/javascript"` for all <script> elements for better compatibility
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
