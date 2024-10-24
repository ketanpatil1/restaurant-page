export default function generateMenu() {
    const menu = document.createElement("div");

    const heading = document.createElement("h1");
    heading.innerText = "Menu";

    menu.appendChild(heading);

    return menu;
}
