const menu = document.querySelector(".menu");
const btnMenu = document.querySelector("#button-menu");
const btnClose = document.querySelector(".icon-close");
const menuAction = document.querySelectorAll(".main-action");

function closeMenu() {
    menu.classList.remove("active");
    document.body.style.overflow = "";
}

btnMenu.addEventListener("click", () => {

    menu.classList.add("active");
    document.body.style.overflow = "hidden";

});

btnClose.addEventListener("click", () => {
    closeMenu();
});

menuAction.forEach(function(menuAction) {
    menuAction.addEventListener("click", () => {
        closeMenu();
    })
}) 