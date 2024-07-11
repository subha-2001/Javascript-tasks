document.addEventListener('DOMContentLoaded', () => {
    const container = document.querySelector('.container');
    const testimonials = document.querySelectorAll('.testimonial');
    const prevButton = document.getElementById('prev');
    const nextButton = document.getElementById('next');
    let currentIndex = 0;

    const updateSlider = () => {
        const offset = -currentIndex * 100 / testimonials.length;
        container.style.transform = `translateX(${offset}%)`;
    };

    prevButton.addEventListener('click', () => {
        currentIndex = (currentIndex === 0) ? testimonials.length - 1 : currentIndex - 1;
        updateSlider();
    });

    nextButton.addEventListener('click', () => {
        currentIndex = (currentIndex === testimonials.length - 1) ? 0 : currentIndex + 1;
        updateSlider();
    });
});
