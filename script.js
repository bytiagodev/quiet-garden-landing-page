document.documentElement.classList.add('js');

document.addEventListener('DOMContentLoaded', () => {
    const elements = document.querySelectorAll('.feature, .bloom-card, .about-paper-texture, .journal-row, .newsletter-blob');

    // With reduced motion on, nothing waits off screen to be revealed.
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
        elements.forEach((el) => el.classList.add('is-visible'));
        return;
    }

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                observer.unobserve(entry.target);
            }
        });
    }, { 
        threshold: 0.1,
        rootMargin: '0px 0px -20px 0px'
    });

    elements.forEach((el) => {
        observer.observe(el);
    });
});
