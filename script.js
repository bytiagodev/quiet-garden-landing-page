console.log("Quiet Garden Script: Active"); 

document.addEventListener('DOMContentLoaded', () => {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                console.log("Revealing:", entry.target.className);
                entry.target.classList.add('is-visible');
            }
        });
    }, { 
        threshold: 0.05, // Trigger as soon as 5% is visible
        rootMargin: '0px 0px -50px 0px' 
    });

    const elements = document.querySelectorAll('.feature, .bloom-card, .about-paper-texture, .journal-row, .newsletter-blob');
    
    if (elements.length === 0) {
        console.warn("Script Warning: No elements found to animate. Check your class names!");
    }

    elements.forEach((el) => {
        el.classList.add('reveal-hidden');
        observer.observe(el);
    });
});
