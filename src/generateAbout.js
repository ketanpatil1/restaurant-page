export default function generateAbout() {
    const about = document.createElement("div");

    const heading = document.createElement("h1");
    heading.innerText = "About";

    about.appendChild(heading);

    return about;
}
