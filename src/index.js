import generateHome from "./generateHome";
import generateMenu from "./generateMenu";
import generateAbout from "./generateAbout";

const homeBtn = document.querySelector(".home-btn");
const menuBtn = document.querySelector(".menu-btn");
const aboutBtn = document.querySelector(".about-btn");

homeBtn.addEventListener("click", () => {
    console.log(generateHome());
});
menuBtn.addEventListener("click", () => {
    console.log(generateMenu());
});
aboutBtn.addEventListener("click", () => {
    console.log(generateAbout());
});
