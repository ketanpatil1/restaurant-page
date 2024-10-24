import generateHome from "./generateHome";
import generateMenu from "./generateMenu";
import generateAbout from "./generateAbout";

const homeBtn = document.querySelector(".home-btn");
const menuBtn = document.querySelector(".menu-btn");
const aboutBtn = document.querySelector(".about-btn");

homeBtn.addEventListener("click", () => {
    changeView(generateHome);
});
menuBtn.addEventListener("click", () => {
    changeView(generateMenu);
});
aboutBtn.addEventListener("click", () => {
    changeView(generateAbout);
});

const contentDiv = document.querySelector("#content");

function changeView(viewFunc) {
    while (contentDiv.hasChildNodes()) {
        contentDiv.removeChild(contentDiv.firstChild);
    }
    contentDiv.appendChild(viewFunc());
}
