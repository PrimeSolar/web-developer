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

// Insert <meta name="author" content="Vladislav Kazantsev">
const metaAuthor = document.createElement("meta");
metaAuthor.name = "author";
metaAuthor.content = "Vladislav Kazantsev";
document.querySelector("head").appendChild(metaAuthor);

// Insert <meta name="copyright" content="© `Current Year` Vladislav Kazantsev">
const metaCopyright = document.createElement("meta");
metaCopyright.name = "copyright";
metaCopyright.content =
  "© " + new Date().getFullYear() + " Vladislav Kazantsev";
document.querySelector("head").appendChild(metaCopyright);

// Insert the custom CSS

// Insert "style-min.css"
const linkStyle = document.createElement("link");
linkStyle.rel = "stylesheet";
linkStyle.type = "text/css";
linkStyle.href = "styles/style-min.css";
document.querySelector("head").appendChild(linkStyle);

// Insert "media-queries-min.css"
const linkMediaQueries = document.createElement("link");
linkMediaQueries.rel = "stylesheet";
linkMediaQueries.type = "text/css";
linkMediaQueries.href = "styles/media-queries-min.css";
document.querySelector("head").appendChild(linkMediaQueries);

linkStyle.onload = function () {
  document.body.style.display = "flex";
};

// Insert <link rel="icon" href="assets/favicon.svg">
const linkImage = document.createElement("link");
linkImage.rel = "icon";
linkImage.href = "assets/favicon.svg";
document.querySelector("head").appendChild(linkImage);

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
