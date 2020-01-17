
const track = document.querySelector('.wrap-me');
const slides = Array.from(track.children);
const nextButton = document.querySelector('.next');
const prevButton = document.querySelector('.prev');
const dotsNav = document.querySelector('.slider-wrap');
const dots = Array.from(dotsNav.children);

// Get slide width depending on browser size
const slideWidth = slides[0].getBoundingClientRect().width;

// Arrange the slides horizontally next to eachother
const setSlidePosition = (slide, index) => {
    slide.style.left = slideWidth * index + 'px';
};

slides.forEach(setSlidePosition);

const moveToSlide = (track, currentSlide, targetSlide) => {
    track.style.transform = 'translateX(-' + targetSlide.style.left + ')';
    currentSlide.classList.remove('current-slide');
    targetSlide.classList.add('current-slide');
}

// When user clicks carousel left btn, move slides to right
prevButton.addEventListener('click', e => {
    console.log(slideWidth);
    e.preventDefault();
    const currentSlide = track.querySelector('.current-slide');
    const previousSlide = currentSlide.previousElementSibling;

    moveToSlide(track, currentSlide, previousSlide);
});

// When user clicks carousel right btn, move slides to left
nextButton.addEventListener('click', e => {
    // Get current slide and next slide
    console.log(slideWidth);
    e.preventDefault();
    const currentSlide = track.querySelector('.current-slide');
    const nextSlide = currentSlide.nextElementSibling;
    
    moveToSlide(track, currentSlide, nextSlide);
});











