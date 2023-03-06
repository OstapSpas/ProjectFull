
// Переменные
const slider = document.querySelector('.slider');
const sliderItem = document.querySelectorAll('slider_item');
const sliderLine = document.querySelector('.slider__line');

const sliderBtnNext = document.querySelector('.slider__btn-next');
const sliderBtnPrev = document.querySelector('.slider__btn-prev');
        
let sliderCount = 0;
let sliderWidth = slider.offsetWidth;

setInterval(() => {
    nextSlide()
}, 3000);

sliderBtnNext.addEventListener('click', nextSlide);

sliderBtnPrev.addEventListener('click', prevSlide);




function nextSlide() {
    sliderCount++;
    
    if (sliderCount >= sliderItem.length) {
        sliderCount = 0;
    }
    rollSlider();
}

function prevSlide() {
    sliderCount--;
    
    if (sliderCount < 0) {
        sliderCount = sliderItem.length -1;
    }
    rollSlider();
}

function rollSlider() {
    sliderLine.style.transform = `translateX(${-sliderCount * sliderWidth}px)`;
}