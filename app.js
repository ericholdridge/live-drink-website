let slideImages = document.querySelectorAll('.slide');
console.log(slideImages);
let arrowLeft = document.querySelector('.prev');
let arrowRight = document.querySelector('.next');
let current = 0;

// Clear all images
function reset() {
    for(let i = 0; i < slideImages.length; i++) {
        slideImages[i].style.display = "none";
    }
}

// Init the slider
function startSlide() {
    reset();
    slideImages[0].style.display = "block";
}

// Show previous
function slideLeft() {
    reset();
    slideImages[current - 1].style.display = "block";
    current = current - 1;
}

// Show next
function slideRight() {
    reset();
    slideImages[current + 1].style.display = "block";
    current++;
}

arrowLeft.addEventListener('click', function(e) {
    e.preventDefault();
    if(current === 0) {
        current = slideImages.length;
    }
    slideLeft();
});

arrowRight.addEventListener('click', function(e) {
    e.preventDefault();
    if(current === slideImages.length - 1) {
        current = -1;
    }
    slideRight();
});

startSlide();












