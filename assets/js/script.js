const slides = [
    {
        image: '/assets/images/bg1.png',
        title: 'Dark Knight',
        subtitle: 'Batman',
        description: 'A Hero can be anyone. Even a man doing something as simple and reassuring as putting a coat around a young boy\'s shoulders to let him know that the world hadn’t ended.'
    },

    {
        image: '/assets/images/bg2.png',
        title: 'Dark Knight',
        subtitle: 'The Joker',
        description: 'A Hero can be anyone. Even a man doing something as simple and reassuring as putting a coat around a young boy\'s shoulders to let him know that the world hadn’t ended.'
    },

    {
        image: '/assets/images/bg3.png',
        title: 'Dark Knight',
        subtitle: 'The Riddle',
        description: 'A Hero can be anyone. Even a man doing something as simple and reassuring as putting a coat around a young boy\'s shoulders to let him know that the world hadn’t ended.'
    },
];

let currentSlideIndex = 0;
const slideInterval = 3000; // Slide interval

function showSlide(index) {
    const slideImage = document.querySelector('.slide-image');
    const title = document.querySelector('.slide-content h1');
    const subtitle = document.querySelector('.slide-content h2');
    const description = document.querySelector('.slide-content p');

    slideImage.style.opacity = 0; // Fade out
    setTimeout(() => {
        // Update content with current slide
        slideImage.src = slides[index].image;
        title.textContent = slides[index].title;
        subtitle.textContent = slides[index].subtitle;
        description.textContent = slides[index].description;

        // Fade in
        slideImage.style.opacity = 1;
    }, 500); // Wait for fade out transition to complete


    // Update current slide index
    currentSlideIndex = index;
}

function showNextSlide() {
    currentSlideIndex = (currentSlideIndex + 1) % slides.length;
    showSlide(currentSlideIndex);
}

// Manual navigation
document.querySelector('.prev-btn').addEventListener('click', () => {
    currentSlideIndex = currentSlideIndex > 0 ? currentSlideIndex - 1 : slides.length - 1;
    showSlide(currentSlideIndex);
    resetInterval();
});

document.querySelector('.next-btn').addEventListener('click', () => {
    showNextSlide();
    resetInterval();
});

// Automatic navigation
let slideTimer = setInterval(showNextSlide, slideInterval);

// Reset the timer when manually navigating
function resetInterval() {
    clearInterval(slideTimer);
    slideTimer = setInterval(showNextSlide, slideInterval);
}

// Initialize slider
showSlide(currentSlideIndex);