const slider = document.querySelector(".slider__input");
const img = document.querySelector(".slider__image");

const imageSize = () => {
    const value = slider.value
    const size = 100 + Number(value) * 3;
    img.style.width = `${size}px`
}

const imageSizeDebounce = _.debounce(imageSize, 100)
slider.addEventListener("input", imageSizeDebounce)