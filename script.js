document.addEventListener('DOMContentLoaded', function() {
    // Mobile Menu Toggle
    const menuToggle = document.querySelector('.menu-toggle');
    const navMenu = document.querySelector('.header-nav');

    menuToggle.addEventListener('click', function() {
        navMenu.classList.toggle('active');
    });

    // Smooth Scroll for Navigation Links
    const links = document.querySelectorAll('a[href^="#"]');

    links.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    // Form Validation
    const form = document.querySelector('.newsletter-form');

    form.addEventListener('submit', function(event) {
        const emailInput = document.getElementById('newsletter-email');
        if (!emailInput.value) {
            alert('Please enter your email.');
            event.preventDefault(); // Prevent form submission
        }
    });

    // Lightbox for Adventure Images
    const adventureItems = document.querySelectorAll('.adventure-item img');
    const lightbox = document.querySelector('.lightbox');
    const lightboxImg = lightbox.querySelector('img');

    adventureItems.forEach(img => {
        img.addEventListener('click', function() {
            lightboxImg.src = this.src;
            lightbox.style.display = 'block';
        });
    });

    lightbox.addEventListener('click', function() {
        lightbox.style.display = 'none';
    });
});
