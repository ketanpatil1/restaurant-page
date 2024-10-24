export default function generateHome() {
    const home = document.createElement("div");

    const heading = document.createElement("h1");
    heading.innerText = "Home";

    home.appendChild(heading);

    return home;
}
