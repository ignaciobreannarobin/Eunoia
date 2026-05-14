document.addEventListener('DOMContentLoaded', () => {
    
    // 1. Contact Form Logic
    const contactForm = document.getElementById('contact-form');
    const responseMessage = document.getElementById('form-response');

    if(contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            responseMessage.innerHTML = `
                <div style="margin-top: 20px; padding: 15px; background: #d4edda; color: #155724; border-radius: 10px; font-weight: 600;">
                    Your message has been sent. A Eunoia advocate will reach out soon.
                </div>`;
            contactForm.reset();
        });
    }

    // 2. Smooth Reveal Animation on Scroll
    const observerOptions = { threshold: 0.1 };

    const revealOnScroll = (entries) => {
        entries.forEach(entry => {
            if(entry.isIntersecting) {
                entry.target.style.opacity = "1";
                entry.target.style.transform = "translateY(0)";
            }
        });
    };

    const scrollObserver = new IntersectionObserver(revealOnScroll, observerOptions);
    
    document.querySelectorAll('.section').forEach(section => {
        section.style.opacity = "0";
        section.style.transform = "translateY(30px)";
        section.style.transition = "all 0.8s ease-out";
        scrollObserver.observe(section);
    });
});
