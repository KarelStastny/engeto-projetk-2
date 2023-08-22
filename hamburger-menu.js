const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");
const hamburgerIcon = document.querySelector(".hamburger-icon");
const crossIcon = document.querySelector(".cross-icon");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("hidden");
    navMenu.classList.toggle("nav-menu-active");
    hamburgerIcon.classList.toggle("hidden");
    crossIcon.classList.toggle("active");
});