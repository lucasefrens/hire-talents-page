const btnLeft = document.querySelector("#slider-btn-left");
const btnRight = document.querySelector("#slider-btn-right");
const sliderElements = document.querySelector(".main-slider .elements");

let porcentagem = 0;

btnLeft.addEventListener("click", () => {
    switch (porcentagem) {
        case 0: 
            porcentagem += 34;
            sliderElements.style.transform = `translateX(${porcentagem}%)`;
            break;
        case 34:
            porcentagem = 0;
            sliderElements.style.transform = `translateX(${porcentagem}%)`;
            break
        default:
            porcentagem = 0;
            sliderElements.style.transform = `translateX(${porcentagem}%)`;
    } 
})

btnRight.addEventListener("click", () => {    
    switch (porcentagem) {
        case 0: 
            porcentagem -= 34;
            sliderElements.style.transform = `translateX(${porcentagem}%)`;
            break;
        case -34:
            porcentagem = 0;
            sliderElements.style.transform = `translateX(${porcentagem}%)`;
            break
        default:
            porcentagem = 0;
            sliderElements.style.transform = `translateX(${porcentagem}%)`;
    } 
})