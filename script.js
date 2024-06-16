document.addEventListener('DOMContentLoaded', function () {
    const track = document.querySelector('.carousel-track');
    const slides = Array.from(track.children);
    const nextButton = document.querySelector('.carousel-control.next');
    const prevButton = document.querySelector('.carousel-control.prev');

    let slideWidth = slides[0].getBoundingClientRect().width;

    const updateSlideWidth = () => {
        slideWidth = slides[0].getBoundingClientRect().width;
        updateSlidePosition();
    };

    let currentIndex = 0;

    const updateSlidePosition = () => {
        track.style.transform = 'translateX(-' + slideWidth * currentIndex + 'px)';
    };

    nextButton.addEventListener('click', () => {
        if (currentIndex < slides.length - 1) {
            currentIndex++;
            updateSlidePosition();
        }
    });

    prevButton.addEventListener('click', () => {
        if (currentIndex > 0) {
            currentIndex--;
            updateSlidePosition();
        }
    });

    window.addEventListener('resize', updateSlideWidth);

    track.addEventListener('touchstart', (e) => e.preventDefault());

    updateSlideWidth();
});
