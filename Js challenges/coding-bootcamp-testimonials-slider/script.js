document.addEventListener('DOMContentLoaded', () => {
  const container = document.querySelector('.container');
  const testimonials = [...document.querySelectorAll('.testimonial')]; // Spread syntax for array-like conversion
  const [prevButton, nextButton] = document.querySelectorAll('#prev, #next'); // Destructuring assignment for buttons
  let currentIndex = 0;

  const slide = (offset) => container.style.transform = `translateX(${offset}%)`;

  prevButton.onclick = () => slide(--currentIndex % testimonials.length * 100 / testimonials.length);
  nextButton.onclick = () => slide(++currentIndex % testimonials.length * 100 / testimonials.length);
});
