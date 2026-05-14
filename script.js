// Wait for DOM to load
document.addEventListener('DOMContentLoaded', () => {
    
    // 1. Simple Contact Form Handling
    const contactForm = document.getElementById('contact-form');
    const responseMessage = document.getElementById('form-response');

    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Simulate an API call
        responseMessage.innerHTML = "<p style='color: #588157; margin-top: 20px;'>Thank you for reaching out. An Eunoia advocate will contact you within 24 hours.</p>";
        
        // Clear form
        contactForm.reset();
    });

    // 2. Reveal on Scroll Animation
    const sections = document.querySelectorAll('.section');
    
    const revealSection = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = "1";
                entry.target.style.transform = "translateY(0)";
            }
        });
    };

    const sectionObserver = new IntersectionObserver(revealSection, {
        root: null,
        threshold: 0.15,
    });

    sections.forEach(section => {
        section.style.opacity = "0";
        section.style.transform = "translateY(30px)";
        section.style.transition = "all 0.8s ease-out";
        sectionObserver.observe(section);
    });
});
