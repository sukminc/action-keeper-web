document.addEventListener('DOMContentLoaded', () => {
    // Smooth scroll for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Waitlist form submission
    const form = document.querySelector('.waitlist-form');
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const input = form.querySelector('input');
        const button = form.querySelector('button');
        
        input.disabled = true;
        button.disabled = true;
        button.textContent = 'Thank you!';

        console.log(`Email submitted: ${input.value}`);

        setTimeout(() => {
            input.value = '';
            input.disabled = false;
            button.disabled = false;
            button.textContent = 'Join the Waitlist';
        }, 3000);
    });

    // Screenshot Loop Logic
    const screenshots = [
        {
            alt: 'Hero Section',
            url: 'screenshots/01-hero.png'
        },
        {
            alt: 'Features Section',
            url: 'screenshots/02-features.png'
        },
        {
            alt: 'How It Works Section',
            url: 'screenshots/03-how-it-works.png'
        }
    ];

    const screenshotImg = document.getElementById('screenshot-img');
    const prevBtn = document.getElementById('prev-btn');
    const nextBtn = document.getElementById('next-btn');
    let currentIndex = 0;
    let autoSlideInterval;

    function showScreenshot(index) {
        screenshotImg.src = screenshots[index].url;
        screenshotImg.alt = screenshots[index].alt;
    }

    function nextScreenshot() {
        currentIndex = (currentIndex + 1) % screenshots.length;
        showScreenshot(currentIndex);
    }

    function prevScreenshot() {
        currentIndex = (currentIndex - 1 + screenshots.length) % screenshots.length;
        showScreenshot(currentIndex);
    }

    function startAutoSlide() {
        autoSlideInterval = setInterval(nextScreenshot, 4000);
    }

    function stopAutoSlide() {
        clearInterval(autoSlideInterval);
    }

    // Event Listeners
    nextBtn.addEventListener('click', () => {
        stopAutoSlide();
        nextScreenshot();
        startAutoSlide();
    });

    prevBtn.addEventListener('click', () => {
        stopAutoSlide();
        prevScreenshot();
        startAutoSlide();
    });

    // Initial load
    showScreenshot(currentIndex);
    startAutoSlide();
});
