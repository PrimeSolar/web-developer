const html=document.querySelector("html");html.lang="en",html.dir="ltr";const metaViewport=document.createElement("meta");metaViewport.name="viewport",metaViewport.content="width=device-width, initial-scale=1",document.querySelector("head").appendChild(metaViewport),document.title="Vladislav Kazantsev | Web Developer";const metaAuthor=document.createElement("meta");metaAuthor.name="author",metaAuthor.content="Vladislav Kazantsev",document.querySelector("head").appendChild(metaAuthor);const metaCopyright=document.createElement("meta");metaCopyright.name="copyright",metaCopyright.content="© "+(new Date).getFullYear()+" Vladislav Kazantsev",document.querySelector("head").appendChild(metaCopyright);const linkStyle=document.createElement("link");linkStyle.rel="stylesheet",linkStyle.type="text/css",linkStyle.href="styles/style-min.css",document.querySelector("head").appendChild(linkStyle);const linkMediaQueries=document.createElement("link");linkMediaQueries.rel="stylesheet",linkMediaQueries.type="text/css",linkMediaQueries.href="styles/media-queries-min.css",document.querySelector("head").appendChild(linkMediaQueries),linkStyle.onload=function(){document.body.style.display="flex"};const linkImage=document.createElement("link");linkImage.rel="icon",linkImage.href="assets/favicon.svg",document.querySelector("head").appendChild(linkImage),document.body.onload=function(){for(let e of document.querySelectorAll("script"))e.type="text/javascript"};
