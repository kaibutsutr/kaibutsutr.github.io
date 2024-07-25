// Load the JavaScript after all the DOM elements are loaded
document.addEventListener("DOMContentLoaded", function () {
    initMobileBurgerMenu();
});

function initMobileBurgerMenu() {
    const body = document.body;
    const navOpeners = document.querySelectorAll(".nav__opener");

    navOpeners.forEach((opener) => {
        opener.addEventListener("click", () => {
            body.classList.toggle("nav--active");
        });
    });
}