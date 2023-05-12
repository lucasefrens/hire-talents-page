const btnMenu = document.querySelector("#button-menu");
const btnClose = document.querySelector(".icon-close");
const menu = document.querySelector(".menu");

btnMenu.addEventListener("click", () => {

    menu.classList.add("active");
    document.body.style.overflow = "hidden";

});

btnClose.addEventListener("click", () => {

    menu.classList.remove("active");
    document.body.style.overflow = "";

});