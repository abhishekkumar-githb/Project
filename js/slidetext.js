document.addEventListener("DOMContentLoaded", function() {
    const slides = document.querySelectorAll('.slide');
    const totalSlides = slides.length;
    let counter = 0;

    slides.forEach((slide, index) => {
        slide.style.left = `${index * 100}%`;
    });

    window.goPrev = () => {
        counter--;
        if (counter < 0) {
            counter = totalSlides - 1;
        }
        slideImage();
    };

    window.goNext = () => {
        counter++;
        if (counter === totalSlides) {
            counter = 0;
        }
        slideImage();
    };

    const slideImage = () => {
        slides.forEach(slide => {
            slide.style.transform = `translateX(-${counter * 100}%)`;
        });
    };
});
