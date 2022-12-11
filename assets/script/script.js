const hamburger = document.querySelector("#burger");
const menu = document.querySelector(".side");


hamburger.addEventListener("click", () => {
    if (menu.style.display == "none") {
        menu.style.display = "flex"
    } else {
        menu.style.display = "none"
    }
});