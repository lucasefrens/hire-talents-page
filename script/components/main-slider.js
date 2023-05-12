const btnLeft = document.querySelector("#slider-btn-left");
const btnRight = document.querySelector("#slider-btn-right");
const sliderElements = document.querySelector(".main-slider .elements");

let porcentagem = 0;

btnLeft.addEventListener("click", () => {

    porcentagem -= 34;
    
    sliderElements.style.transform = `translateX(${porcentagem}%)`;

    if (porcentagem <= -34) {
        porcentagem = 34;  
    }
})

btnRight.addEventListener("click", () => {

    porcentagem += 34;
    
    sliderElements.style.transform = `translateX(${porcentagem}%)`;

    if (porcentagem >= 34) {
        porcentagem = -34;  
    }
})