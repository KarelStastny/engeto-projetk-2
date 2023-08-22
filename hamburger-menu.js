const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");
const hamburgerIcon = document.querySelector(".hamburger-icon.icon");
const crossIcon = document.querySelector(".cross-icon.icon");

hamburger.addEventListener("click", () => {
    console.log("click");
    hamburger.classList.toggle("hidden");
    navMenu.classList.toggle("nav-menu-active");
    hamburgerIcon.classList.toggle("hidden");
    crossIcon.classList.toggle("active");
});